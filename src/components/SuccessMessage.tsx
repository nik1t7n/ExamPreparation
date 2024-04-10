// SuccessMessage.tsx
import React from "react";

const SuccessMessage = ({ onReset }: { onReset: () => void }) => {
  return (
    <div className="bg-green-200 border-l-4 border-green-500 text-green-700 p-4" role="alert">
      <p className="font-bold">Congratulations!</p>
      <p className="text-sm">You have completed all questions. Would you like to start again?</p>
      <button className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={onReset}>
        Reset Quiz
      </button>
    </div>
  );
};

export default SuccessMessage;
