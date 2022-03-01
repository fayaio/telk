import React from "react"
import ceo from "../img/ceo.png"

const Team = () => {
    return (
        <div class="max-w-md mx-auto bg-[#29545E] rounded-xl shadow-md overflow-hidden md:max-w-2xl pb-20">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img class="max-h-full w-full object-cover md:h-full md:w-48" src={ceo} alt="Man looking at item at a store"/>
          </div>
          <div class="p-8 bg-white ">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">From The Chairman</div>
            
            <p class="mt-2 text-slate-500">While growing up one of my dreams has been to build a company that offers trustbased services Thus further down the years I developed an interest in the property development business.</p>
            <div class=" tracking-wide text-sm text-indigo-500 font-semibold">Read more</div>
          </div>
        </div>
      </div>
    )
}

export default Team