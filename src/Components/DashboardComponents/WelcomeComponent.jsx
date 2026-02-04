import React, { useState } from "react";

const WelcomeComponent = () => {
  const [status, setStatus] = useState("Online");
  const options = ["Online", "Offline"];

  return (
    <div className="w-full max-w-[1440px]  py-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        {/* Left */}
        <div className="w-full sm:w-auto">
          <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900">
            Welcome Back, Mehdi Hassan!
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-1">
            Let's dive in and get things done.
          </p>
        </div>

        {/* Right */}
        <div className="w-full sm:w-auto flex justify-start sm:justify-end">
          <div className="bg-[#5F8EFD26] p-1 rounded-full flex w-fit">
            {options.map((item) => (
              <button
                key={item}
                onClick={() => setStatus(item)}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300
                  ${
                    status === item
                      ? "bg-[#5F8EFD] text-white shadow"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default WelcomeComponent;
