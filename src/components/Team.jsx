import React from "react"
import ceo from "../img/ceo.png"

const Team = () => {
    return (
        <div class=" relative bg-[#29545E] rounded-3xl team-tg ">
            <img class="absolute rounded-lg team-img "  src={ceo} alt= "hero"></img>
            <div class="absolute bg-[#FFF]  team-mg">
            <p class="absolute text-4xl font-bold tracking-wide text-blue-900 team-pg  font-['Montserrat']">From The Chairman</p>
            <p class="absolute text-2xl font-medium tracking-wider text-gray-500 team-pm  font-['Montserrat']">While growing up, one of my dreams has been to build a company that offers trust-based services.
    <br/>Thus, further down the years, I developed an interest in the property development business. </p>
            <p class="w-44 h-8 absolute text-2xl italic font-italic tracking-wider underline text-center text-blue-700 team-pj  font-['Montserrat']">Read More</p>
            </div>
            <div class= "relative team-m" >

            </div>
        </div> 
    )
}

export default Team