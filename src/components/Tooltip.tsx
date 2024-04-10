import React, { useState } from 'react';

interface Props {
    text: string;
}

const Tooltip = ({ text }: Props) => {
  const [showText, setShowText] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500 text-white cursor-pointer"
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
      >
        ?
      </div>
      {showText && (
        <div className="absolute top-0 left-10 p-2 bg-gray-200 text-gray-800 rounded-md shadow-md inline-block auto">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
