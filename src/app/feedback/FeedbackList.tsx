"use client";

const FeedbackList = ({ feedbacks }: { feedbacks: Array<any> }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {feedbacks.length > 0 ? (
        feedbacks.map((item, index) => (
          <figure key={index} className="bg-gray-200 dark:bg-gray-700 rounded-md shadow-sm p-4">
            <div className="flex items-center mb-4 text-yellow-300">
              {[...Array(item.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
              ))}
            </div>
            <blockquote className="mb-4">
              <p className="text-lg font-semibold text-gray-900 dark:text-white">"{item.feedback}"</p>
            </blockquote>
            <figcaption className="flex items-center mt-6 space-x-3 rtl:space-x-reverse">
              <img className="w-8 h-8 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="profile picture"/>
              <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
                <cite className="pe-3 font-medium text-gray-900 dark:text-white">{item.author}</cite>
                <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">{item.role}</cite>
              </div>
            </figcaption>
          </figure>
        ))
      ) : (
        <p className="text-gray-600 dark:text-gray-300">No feedback available.</p>
      )}
    </div>
  );
};

export default FeedbackList;
