import React from "react";

const Background = () => {
  return (
    <>
      {/* Dark background */}
      <div className="fixed inset-0 bg-gray-900 -z-20"></div>
      
      {/* Circle 1 */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full opacity-20 blur-3xl animate-pulse-slow -z-10"></div>

      {/* Circle 2 */}
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-pink-600 rounded-full opacity-20 blur-3xl animate-pulse-slow delay-1000 -z-10"></div>
    </>
  );
};

export default Background;
