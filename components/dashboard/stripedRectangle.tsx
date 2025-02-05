import React from "react";

const StripedRectangle = ({ number = 63, width = "50px", height = "40px" }) => {
  return (
    <div className="relative">
      {/* Container with stripes */}
      <div
        className="relative overflow-hidden border ml-12 mt-6 mr-4 border-blue-700"
        style={{
          width,
          height,
          background: `repeating-linear-gradient(
            45deg,
            #2563eb,
            #2563eb 10px,
            #1d4ed8 10px,
            #1d4ed8 20px
          )`
        }}
      >
        {/* Centered number */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[7px] font-semibold text-white">{number}%</span>
        </div>
      </div>
    </div>
  );
};

export default StripedRectangle;
