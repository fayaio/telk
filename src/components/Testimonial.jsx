import React from "react";
import kehide from "../img/kehide.png"


const Testimonial= () => {
    return (
        <div class = "bg-[url('/img/teambg.png')] wel-i  " >
  
  
  <div class="mb-8 text-center">
    <h2 class="text-4xl font-bold text-white">Testimonials</h2>
    <p class="text-lg text-white">What others say about us</p>
</div>
<div class="lg:grid lg:grid-cols-3 lg:gap-x-2 bg-white test-tp">
    <div class="p-4 text-gray-800 rounded-lg shadow-md ">
        <div class="mb-2 ">
            
            <div class="flex flex-col items-center justify-center ">
                <div class=" w-40 h-40 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                    <img src={kehide} alt="img"
                        class="object-cover object-center w-full h-full" />
                </div>
                <h5 class="font-bold text-indigo-600">Kehinde Oyefeso</h5>
                
                <p class="mb-2 text-center text-gray-600 ">
                " BJF Property’s greatest strengths versus other solutions I’ve used is its simplicity and ease of customization. "
            </p>
            </div>
        </div>
    </div>
    <div class="p-4 text-gray-800 rounded-lg shadow-md">
        <div class="mb-2">
            
            <div class="flex flex-col items-center justify-center ">
                <div class="w-40 h-40 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                    <img src={kehide} alt="img"
                        class="object-cover object-center w-full h-full" />
                </div>
                <h5 class="font-bold text-indigo-600">Kehinde Oyefeso</h5>
                
                <p class="mb-2 text-center text-gray-600 ">
                " BJF Property’s greatest strengths versus other solutions I’ve used is its simplicity and ease of customization. "
            </p>
            </div>
        </div>
    </div>
    <div class="p-4 text-gray-800 rounded-lg shadow-md">
        <div class="mb-2">
           
            <div class="flex flex-col items-center justify-center">
                <div class="w-40 h-40 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                    <img src={kehide} alt="img"
                        class="object-cover object-center w-full h-full" />
                </div>
                <h5 class="font-bold text-indigo-600">Kehinde Oyefeso</h5>
                
                <p class="mb-2 text-center text-gray-600 ">
                " BJF Property’s greatest strengths versus other solutions I’ve used is its simplicity and ease of customization. "
            </p>
            </div>
        </div>
    </div>
</div>

        </div>
    
    )
}


export default Testimonial

