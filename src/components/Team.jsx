import React from "react";
import ceo from "../img/ceo.png";

const Team = () => {
  return (
    <div>
      <p class="text-5xl font-medium tracking-wide text-center text-[#22322B] pt-[20px]  font-['Montserrat']">
        Meet our Team
      </p>
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"></div>

      <div class="max-w-md mx-auto bg-[#29545E] rounded-xl shadow-md overflow-hidden md:max-w-2xl pb-20 pt-20 pr-10 pl-10">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="max-h-full w-full object-cover md:h-full md:w-48"
              src={ceo}
              alt="Man looking at item at a store"
            />
          </div>
          <div class="p-8 bg-white ">
            <div class="uppercase tracking-wide text-lg font-bold text-[#0A3F70] ">
              From The Chairman
            </div>

            <p class="mt-2 text-slate-500 text-[#767676] ">
              While growing up one of my dreams has been to build a company that
              offers trustbased services Thus further down the years I developed
              an interest in the property development business.
            </p>
            <div class=" tracking-wide text-sm text-[#0058DB] font-semibold">
              <i>Read more</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
