// app/dash/PowerBIDashboard.tsx
import React from 'react';
import '../globals.css'; // Import the CSS file containing animations

const PowerBIDashboard = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
      {/* Header Section */}
      <header className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-2 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent animate-slide-up">
          Premier League Dashboard
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2 animate-slide-up">
          Explore in-depth analytics and insights on Premier League matches and team performances.
        </p>
      </header>

      {/* Main Content */}
      <div className="container mx-auto">
        {/* Description Section */}
        <section className="mb-12 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-transparent bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-900 dark:to-gray-800">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-slide-up">
            Detailed Analysis
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4 animate-slide-up">
            Dive deep into match statistics, team performance metrics, and visualizations. This dashboard
            provides comprehensive insights that can help you understand the dynamics of the Premier League.
          </p>
          <p className="text-gray-700 dark:text-gray-300 animate-slide-up">
            Utilize the interactive elements to filter and explore data, compare teams, and track performance trends over time.
          </p>
        </section>

        {/* PowerBI Embed Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border-2 border-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 dark:border-gradient-to-r dark:from-teal-500 dark:via-blue-600 dark:to-indigo-700">
          <iframe
            title="EPLBio"
            width="100%"
            height="600"
            src="https://app.powerbi.com/reportEmbed?reportId=916aba07-038e-4853-b4b1-a0cf28bade3a&autoAuth=true&ctid=2ec11419-847c-4e29-8815-7f5b2fed9339"
            frameBorder="0"
            allowFullScreen={true}
            className="border-none rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default PowerBIDashboard;
