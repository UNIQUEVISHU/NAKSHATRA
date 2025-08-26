import React from "react";

const BackgroundEffects = ({ symbols }) => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute w-full h-full bg-[radial-gradient(circle,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:22px_22px]" />
      {symbols && symbols.map((item, index) => (
        <span
          key={index}
          className={`absolute ${item.color} ${item.size} opacity-30 animate-float${(index % 3) + 1}`}
          style={{ top: item.top, left: item.left }}
        >
          {item.symbol}
        </span>
      ))}
      <style jsx>{`
        .animate-float1 {
          @apply animate-[float1_12s_ease-in-out_infinite];
        }
        .animate-float2 {
          @apply animate-[float2_14s_ease-in-out_infinite];
        }
        .animate-float3 {
          @apply animate-[float3_16s_ease-in-out_infinite];
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-25px) translateX(15px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(20px) translateX(-20px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(25px); }
        }
      `}</style>
    </div>
  );
};

export default BackgroundEffects;
