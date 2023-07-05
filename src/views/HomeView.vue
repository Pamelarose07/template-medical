<script setup>
import Details from '../components/Details/Details.vue'

import About from '../components/About/About.vue'
import Services from '../components/Services/Services.vue'
import Doctors from '../components/Doctors/Doctors.vue'
import Footer from '../components/Footer/Footer.vue'
import { initFlowbite } from 'flowbite'
import { onMounted } from 'vue'

onMounted(() => {
  initFlowbite()
})
</script>
<template>
 
 

 
<nav class="fixed z-50 w-full h-20 border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
    <a href="#" class="flex items-center">
        <img src="/src/assets/BLINC-05.png" class="h-16 mr-2 mt-1" alt="Flowbite Logo" />
       
    </a>
    <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900  rounded  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
        </li>
        <li>
          <a href="#About" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
      
        <li>
          <a href="#Services" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#Doctors" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Doctors</a>
        </li>

      </ul>
    </div>
  </div>
</nav>

<div>
    
    <img class="h-full w-full pt-20 md:pt-9" src="src/assets/dd.jpg" alt="image description">
    
   
    <p class=" -mt-18 ml-44 justify-end text-white font-bold text-1xl md:text-6xl md:absolute md:top-80 md:right-6">Our priority is caring for you</p>


    <a href="#Details" class="relative inline-flex items-center px-12 py-2.5 overflow-hidden text-lg font-medium text-white border-2 border-blue-500 rounded-2 hover:text-white group hover:bg-gray-50 -top-24 md:-top-64 md:mt-16 md:left-3/4 md:ml-68 md:pl-10 md:px-12 md:py-2.5">
<span class="absolute left-0 block w-full h-0 transition-all bg-blue-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease md:w-10 md:h-10">
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative">Appointment</span>
</a>

<a href="#Doctors" class="relative inline-flex items-center px-12 py-2.5 overflow-hidden text-lg font-medium text-white border-2 border-blue-500 rounded-2 hover:text-white group hover:bg-gray-50 md:-top-64 md:mt-10 md:left-2/3 md:-ml-80">
<span class="absolute left-0 block w-full h-0 transition-all bg-blue-500 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative">Find a Doctor</span>
</a>
  </div>




   

    <div id="About">
    <About/>
    </div>
    <div id="Services">
    <Services/>
    </div>
    <div id="Details">
  <Details/>
</div>

    <div id="Doctors">
    <Doctors/>
    </div>
<Footer/>
    

</template>
