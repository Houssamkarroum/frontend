'use client';

import { useState, useEffect } from 'react';
import FeedbackList from "./FeedbackList";
import { Feedback } from '../api/get-feedback/types'; // Adjust the path as necessary

export default function FeedbackPage() {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [role, setRole] = useState('');
  const [rating, setRating] = useState(5);
  const [alertVisible, setAlertVisible] = useState(false);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  useEffect(() => {
    fetch('/api/get-feedback')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setFeedbacks(data as Feedback[])) // Ensure data is cast to Feedback[]
      .catch(error => console.error('Error fetching feedback:', error));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newFeedback: Feedback = {
      id: '', // Add the 'id' property
      author: name,
      feedback,
      role,
      rating,
      datetime: new Date().toISOString(),
    };

    const response = await fetch('/api/submit-feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    if (response.ok) {
      setAlertVisible(true);
      setFeedbacks([newFeedback, ...feedbacks]);
      setName('');
      setFeedback('');
      setRole('');
      setRating(5);
      setTimeout(() => setAlertVisible(false), 3000); // Hide alert after 3 seconds
    } else {
      alert('Failed to submit feedback');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 mt-4 p-8 rounded-lg shadow-md w-full max-w-md mb-8"
      >
        <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Submit Your Feedback
        </h1>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-gray-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="role">
            Role
          </label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-gray-300"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="feedback">
            Feedback
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-gray-300"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="rating">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            min="1"
            max="5"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-700 dark:text-gray-300"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors dark:bg-blue-700 dark:hover:bg-blue-800"
        >
          Submit
        </button>
        {alertVisible && (
          <div role="alert" className="alert alert-success mt-4 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current text-green-500"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Feedback submitted successfully!</span>
          </div>
        )}
      </form>
      <div className="p-8 rounded-lg shadow-md w-full max-w-5xl bg-white dark:bg-gray-800">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Feedback Submissions
        </h1>
        <FeedbackList feedbacks={feedbacks} />
      </div>
    </div>
  );
}
