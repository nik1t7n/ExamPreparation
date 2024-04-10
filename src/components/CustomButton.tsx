import React from "react";

interface Props {
  text: string;
  onClick?: () => void; // Добавляем проп onClick, который принимает функцию без аргументов и возвращаемое значение
}

const CustomButton = ({ text, onClick }: Props) => {
  return (
    <div>
      <button
        onClick={onClick} // Привязываем обработчик события onClick к кнопке
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {text} {/* Отображаем текст кнопки */}
        </span>
      </button>
    </div>
  );
};

export default CustomButton;
