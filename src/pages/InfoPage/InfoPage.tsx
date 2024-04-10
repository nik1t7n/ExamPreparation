import React from "react";
import AreaCard from "../../components/info/AreaCard";
import { areas } from "../../data/Areas";

const colors = [
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-purple-200",
  "bg-pink-200",
  "bg-indigo-200",
];


const InfoPage = () => {
  return (
    <div className="dark:bg-gray-800">
      <div className="container mx-auto px-4 py-8 h-screen">
        <div className="h-[80vh] overflow-y-auto rounded-lg border border-gray-300 shadow-md dark:bg-gray-850">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {areas.map((area, index) => {
              // Используем остаток от деления на длину массива цветов для выбора по порядку
              const colorIndex = index % colors.length;
              return (
                <AreaCard
                  key={index}
                  category={area.category}
                  name={area.name}
                  fgp={area.fgp}
                  relief={area.relief}
                  climate={area.climate}
                  internalWaters={area.internalWaters}
                  soils={area.soils}
                  landscape={area.landscape}
                  vegetation={area.vegetation}
                  fauna={area.fauna}
                  bg_color={colors[colorIndex]} // Передаем цвет по порядку
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
