'use client';
import { useState, useRef, useEffect } from 'react';

const teams = [
  'Arsenal', 'Aston Villa', 'Bournemouth', 'Brentford', 'Brighton', 'Burnley',
  'Chelsea', 'Crystal Palace', 'Everton', 'Fulham', 'Leeds', 'Leicester',
  'Liverpool', 'Luton', 'Man City', 'Man United', 'Newcastle', 'Norwich',
  'Nott\'m Forest', 'Sheffield United', 'Southampton', 'Tottenham', 'Watford',
  'West Brom', 'West Ham', 'Wolves'
];

const teamLogos: { [key: string]: string } = {
  'Arsenal': '../logo/arsenal.png',
  'Aston Villa': '../logo/aston-villa.png',
  'Bournemouth': '../logo/bournemouth.png',
  'Brentford': '../logo/brentford.png',
  'Brighton': '../logo/brighton.png',
  'Burnley': '../logo/burnley.png',
  'Chelsea': '../logo/chelsea.png',
  'Crystal Palace': '../logo/crystal-palace.png',
  'Everton': '../logo/everton.png',
  'Fulham': '../logo/fulham.png',
  'Leeds': '../logo/leeds.png',
  'Leicester': '../logo/leicester.png',
  'Liverpool': '../logo/liverpool.png',
  'Luton': '../logo/luton.png',
  'Man City': '../logo/city.png',
  'Man United': '../logo/manchester-united.png',
  'Newcastle': '../logo/newcastle-united.png',
  'Norwich': '../logo/norwich.png',
  'Nott\'m Forest': '../logo/nottingham-forest.png',
  'Sheffield United': '../logo/sheffield-united.png',
  'Southampton': '../logo/southampton.png',
  'Tottenham': '../logo/tottenham.png',
  'Watford': '../logo/watford.png',
  'West Brom': '../logo/west-brom.png',
  'West Ham': '../logo/west-ham.png',
  'Wolves': '../logo/wolves.png'
};

export default function Predict() {
  const [prediction, setPrediction] = useState<{ winning_team: string, probability: number[] } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [homeTeam, setHomeTeam] = useState<string | null>(null);
  const [awayTeam, setAwayTeam] = useState<string | null>(null);

  const homeTeamRef = useRef<HTMLSelectElement>(null);
  const awayTeamRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const homeTeamValue = homeTeamRef.current?.value || '';
    const awayTeamValue = awayTeamRef.current?.value || '';

    if (homeTeamValue === awayTeamValue) {
      setError('Home team and away team cannot be the same.');
      return;
    }

    try {
      const response = await fetch('https://backend-b7cp.onrender.com/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ home_team: homeTeamValue, away_team: awayTeamValue })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setPrediction(data);
    } catch (error) {
      setError((error as Error).message || 'An unexpected error occurred');
    }
  };

  useEffect(() => {
    if (homeTeamRef.current) {
      setHomeTeam(homeTeamRef.current.value);
    }
    if (awayTeamRef.current) {
      setAwayTeam(awayTeamRef.current.value);
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 animate-fade-in">
        Football Match Prediction
      </h1>

      {/* Premier League Section */}
      <section className="my-12">
        <div className="bg-white p-6 rounded-lg shadow-lg animate-slide-up">
          <div className="flex flex-col md:flex-row items-center space-x-7 space-y-5">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Premier League</h2>
              <p className="text-lg text-gray-700 mb-4">
                The Premier League is one of the most exciting football leagues in the world, featuring top teams from England and beyond. With high-stakes matches and world-class players, it's a league that captures the hearts of football fans globally.
              </p>
              <p className="text-lg text-gray-700">
                Stay updated with the latest match predictions and team performances to enhance your viewing experience and make the most of the thrilling football action.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="../epl.png" 
                alt="Premier League" 
                className="w-full h-auto rounded-lg shadow-md transition-transform transform hover:scale-105" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Prediction Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg animate-slide-up">
        <div className="flex w-full items-center">
          <div className="flex-1 flex flex-col items-center">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Home Team:
              <div className="flex items-center mt-2">
                <select
                  ref={homeTeamRef}
                  onChange={(e) => setHomeTeam(e.target.value)}
                  required
                  className="select select-secondary w-full max-w-xs mt-1 transition-transform transform hover:scale-105"
                >
                  <option value="" disabled>Select Home Team</option>
                  {teams.map((team, index) => (
                    <option key={index} value={team}>{team}</option>
                  ))}
                </select>
                {homeTeam && (
                  <img 
                    src={teamLogos[homeTeam]} 
                    alt={homeTeam} 
                    className="w-18 h-16 ml-4 transition-transform transform hover:scale-105"
                  />
                )}
              </div>
            </label>
          </div>
          <div className="divider divider-horizontal mx-7">Vs</div>
          <div className="flex-1 flex flex-col items-center">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Away Team:
              <div className="flex items-center mt-2">
                <select
                  ref={awayTeamRef}
                  onChange={(e) => setAwayTeam(e.target.value)}
                  required
                  className="select select-secondary w-full max-w-xs mt-1 transition-transform transform hover:scale-105"
                >
                  <option value="" disabled>Select Away Team</option>
                  {teams.map((team, index) => (
                    <option key={index} value={team}>{team}</option>
                  ))}
                </select>
                {awayTeam && (
                  <img 
                    src={teamLogos[awayTeam]} 
                    alt={awayTeam} 
                    className="w-18 h-16 ml-4 transition-transform transform hover:scale-105"
                  />
                )}
              </div>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 mt-6"
        >
          Predict
        </button>
      </form>

      {/* Prediction Results */}
      {prediction && (
        <div className="mt-6 p-4 bg-white rounded-lg shadow-md animate-slide-up">
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Prediction</h2>
          <p className="text-lg text-gray-700">Winning Team: <strong>{prediction.winning_team}</strong></p>
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2 text-black">Probabilities</h3>
            <div className="relative w-full h-6 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-blue-500"
                style={{ width: `${prediction.probability[0]}%` }}
              ></div>
              <div
                className="absolute left-0 top-0 h-full bg-yellow-500"
                style={{ width: `${prediction.probability[1]}%`, left: `${prediction.probability[0]}%` }}
              ></div>
              <div
                className="absolute right-0 top-0 h-full bg-red-500"
                style={{ width: `${prediction.probability[2]}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-gray-700">
              <span>Home team wins probability: {prediction.probability[0]}%</span>
              <span>Draw probability: {prediction.probability[1]}%</span>
              <span>Away team wins probability: {prediction.probability[2]}%</span>
            </div>
          </div>
        </div>
      )}

      {/* Error Handling */}
      {error && (
        <div className="mt-6 p-4 bg-red-100 text-red-700 rounded-lg shadow-md animate-slide-up">
          <h2 className="text-2xl font-semibold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
