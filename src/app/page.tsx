"use client";
import { useState, useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';
import { useInView } from './useInView'; // import your custom hook


const steps = [
  {
    title: 'Data Collection',
    description: 'We gathered extensive football match data to train our prediction model. This data includes match results, team statistics, and more.',
    imgSrc: '../2.png',
    
  },
  {
    title: 'Data Cleaning',
    description: 'The collected data was cleaned and preprocessed to ensure accuracy and consistency. This step involved handling missing values, outliers, and format inconsistencies.',
    imgSrc: '../3.png',
    
  },
  {
    title: 'Feature Engineering',
    description: 'We extracted and created relevant features from the raw data to enhance the model’s predictive performance. This step includes encoding categorical variables and generating new features.',
    imgSrc: '../4.png',
    
  },
  {
    title: 'Model Training',
    description: 'The cleaned and engineered data was used to train various machine learning models. We experimented with different algorithms and hyperparameters to find the best performing model.',
    imgSrc: '../5.png',
    
  },
  {
    title: 'Model Evaluation',
    description: 'We evaluated the trained models using metrics such as accuracy, precision, recall, and F1 score. This step helps to determine how well the model performs on unseen data.',
    imgSrc: '../6.png',
    
  },
  {
    title: 'Model Optimization',
    description: 'Based on the evaluation results, we fine-tuned the model to improve its performance. This may involve adjusting hyperparameters, feature selection, or using advanced techniques.',
    imgSrc: '../7.png',
    
  },
  {
    title: 'Data Visualization',
    description: 'We created dashboards and visualizations to help users understand and interact with the prediction results. This step includes designing and implementing charts, graphs, and other visual tools.',
    imgSrc: '../8.png',
    
  },
  {
    title: 'Deployment',
    description: 'The final model was deployed to a production environment, where it can make predictions on new data. This step involves setting up the model for integration with the application and ensuring it runs efficiently.',
    imgSrc: '../9.png',
    
  },
  {
    title: 'Feedback',
    description: 'We gathered user feedback and monitored the model’s performance in the real world. Based on this feedback, we iterated on the model and the application to continuously improve them.',
    imgSrc: '../10.png',
    
  },
];



const teamMembers = [
    {
      name: 'KARROUM Houssam',
      role: 'Aspiring engineer in Big Data and Cloud Computing at ENSET',
      bio: 'I am passionate about embracing challenges and expanding my skills in the ever-evolving world of technology. Through my coursework and projects, I have gained a solid understanding of programming languages, algorithms, and data structures.',
      imgSrc: '../houssam.jpg',
      shortcuts: [
        { key: 'Ctrl', description: 'General control key' },
        { key: 'Shift', description: 'General shift key' },
        { key: 'Del', description: 'Delete key' }
      ]
    },
    {
      name: 'Bob Smith',
      role: 'Software Engineer',
      bio: 'Bob is a skilled software engineer with a passion for building robust and scalable applications. He focuses on backend development and system integration.',
      imgSrc: '../1.png',
      shortcuts: [
        { key: 'Ctrl', description: 'General control key' },
        { key: 'C', description: 'Copy key' },
        { key: 'V', description: 'Paste key' }
      ]
    },
  ];

  const trustedTeams = [
    { name: 'Arsenal', logoSrc: '../logo/arsenal.png' },
    { name: 'Aston Villa', logoSrc: '../logo/aston-villa.png' },
    { name: 'Liverpool', logoSrc: '../logo/liverpool.png' },
    { name: 'Man City', logoSrc: '../logo/city.png' },
    { name: 'Man United', logoSrc: '../logo/manchester-united.png' },
    { name: 'Newcastle', logoSrc: '../logo/newcastle-united.png' },
    { name: 'Tottenham', logoSrc: '../logo/tottenham.png' },
    { name: 'Watford', logoSrc: '../logo/watford.png' },
    { name: 'West Ham', logoSrc: '../logo/west-ham.png' },
    { name: 'Wolves', logoSrc: '../logo/wolves.png' },
  ];

const infiniteScrollStyles = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
  }
`;

export default function HomePage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const [setHeaderRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [setDescriptionRef, descriptionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [setButtonRef, buttonInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  

  const scrollToElement = (index: number) => {
    const element = document.getElementById(`step-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const completedSteps = steps.slice(0, -2);
  const pendingSteps = steps.slice(-2);

  useEffect(() => {
    const timeline = document.getElementById('timeline');
    if (timeline) {
      timeline.style.animation = 'scroll 20s linear infinite';
    }
  }, []);
 
  return (
    
    <div className="text-center py-20 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <style>{infiniteScrollStyles}</style>
      <h1
        ref={setHeaderRef}
        className={`text-5xl font-bold mb-6 text-gray-800 dark:text-gray-100 transition-transform duration-700 ease-out ${headerInView ? 'transform scale-100 opacity-100' : 'transform scale-75 opacity-0'}`}
      >
        Welcome to the Football Match Prediction App
      </h1>
      <p
        ref={setDescriptionRef}
        className={`text-lg mb-6 text-gray-600 dark:text-gray-300 transition-transform duration-700 ease-out ${descriptionInView ? 'transform scale-100 opacity-100' : 'transform scale-75 opacity-0'}`}
      >
        Predict match outcomes and analyze football data with ease.
      </p>
      <div
        ref={setButtonRef}
        className={`mb-12 transition-transform duration-700 ease-out ${buttonInView ? 'transform scale-100 opacity-100' : 'transform scale-75 opacity-0'}`}
      >
        <a
          href="/predict"
          className="inline-block bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 mr-4 dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          Go to Prediction
        </a>
        <a
          href="/dashboard"
          className="inline-block bg-gray-800 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gray-900 transition-transform transform hover:scale-105 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          Go to Dashboard
        </a>
      </div>

      {/* Divider Section */}
      <div className="my-16 border-t border-gray-300 dark:border-gray-700 mx-auto w-4/5"></div>

      {/* Explore Our Team Section */}
      <div
        
        className={`container mx-auto px-6 mb-20 text-center transition-transform duration-700 ease-out `}
      >
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-8">
          Explore Our Team
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Meet the talented individuals behind the Football Match Prediction App.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6 transition-transform duration-700 ease-out"
            >
              <figure className="mb-4">
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto"
                />
              </figure>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <em>{member.role}</em>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {member.bio}
              </p>
              <div className="flex flex-col items-center mt-4">
                <span className="text-gray-700 dark:text-gray-300 mb-2">Preferred Shortcuts:</span>
                <div className="flex gap-2">
                  {member.shortcuts.map((shortcut, idx) => (
                    <kbd key={idx} className="kbd">
                      {shortcut.key}
                    </kbd>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Divider Section */}
      <div className="my-16 border-t border-gray-300 dark:border-gray-700 mx-auto w-4/5"></div>

      {/* Steps Navigation Dropdown */}
      <div className="fixed bottom-8 left-8 z-50">
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Navigate Steps
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 bottom-full mb-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
              <div className="py-1">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      scrollToElement(index);
                      setIsDropdownOpen(false);
                    }}
                    className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                  >
                    {step.title}
                  </button>
                ))}
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="block px-4 py-2 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                >
                  Back to Top
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Divider Section */}
      <div className="my-16 border-t border-gray-300 dark:border-gray-700 mx-auto w-4/5"></div>

      {/* Steps Cards Section */}
      <div className= {`container mx-auto px-6 mb-20 text-center transition-transform duration-700 ease-out `}>
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-8 animate-slide-up">
          How We Built This App
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              id={`step-${index}`}
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-transform transform hover:scale-105 animate-scale-up ${
                index < steps.length - 2 ? 'bg-green-100 dark:bg-green-800' : 'bg-gray-100 dark:bg-gray-700'
              }`}
            >
              <figure>
                <img
                  src={step.imgSrc}
                  alt={step.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </figure>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider Section */}
      <div className="my-16 border-t border-gray-300 dark:border-gray-700 mx-auto w-4/5"></div>

      {/* Horizontal Timeline Section */}
      <div className="container mx-auto px-6 mb-20">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-8 animate-slide-up">
          Project Timeline
        </h2>
        <div className="overflow-hidden relative">
          <div
            id="timeline"
            className="flex space-x-8"
          >
            {[...completedSteps, ...pendingSteps, ...completedSteps].map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="relative flex items-center">
                  <div className={`w-3 h-3 ${index < completedSteps.length ? 'bg-green-500 dark:bg-green-400' : 'bg-gray-500 dark:bg-gray-400'} rounded-full`}></div>
                  {index < completedSteps.length - 1 && (
                    <div className={`flex-1 h-1 ${index < completedSteps.length ? 'bg-green-300 dark:bg-green-700' : 'bg-gray-300 dark:bg-gray-600'}`}></div>
                  )}
                </div>
                <div className={`ml-4 ${index < completedSteps.length ? 'bg-green-100 dark:bg-green-800' : 'bg-gray-100 dark:bg-gray-700'} rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700`}>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Trusted Teams Section */}
      <div className="container mx-auto px-6 mb-20 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-8 animate-slide-up">
          Analysed Teams
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {trustedTeams.map((team, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4"
            >
              <img
                src={team.logoSrc}
                alt={team.name}
                className="w-16 h-16 object-contain mb-4"
              />
              <p className="text-gray-800 dark:text-gray-100">{team.name}</p>
            </div>
          ))}
          
<button data-popover-target="popover-default" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">And much more Teams</button>
<div data-popover id="popover-default" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
    <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white">Popover title</h3>
    </div>
    <div className="px-3 py-2">
        <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
    <div data-popper-arrow></div>
</div>

        </div>
      </div>
    </div>
  );
}



  

