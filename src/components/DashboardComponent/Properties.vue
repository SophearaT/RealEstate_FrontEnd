<template>


  <!-- Upload Section -->
  <div class="flex ml-auto justify-center h-100 ">
    <div class="bg-white rounded-2xl shadow-lg p-8 w-[420px] text-center transition-all duration-300">
      <!-- Drop Zone -->
      <div class="border-2 border-dashed border-purple-300 rounded-xl p-8 hover:bg-purple-50 cursor-pointer">
        <!-- Icon -->
        <div class="flex justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-purple-400" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M3 7l9 6 9-6M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 6 9-6" />
          </svg>
        </div>

        <!-- Text -->
        <h2 class=" text-gray-700 font-semibold text-lg">
          Drag & drop
          <span class="text-purple-500">images</span>,
          <span class="text-purple-500">videos</span>,
          or any <span class="text-purple-500">file</span>
        </h2>
        <p class="text-gray-500 text-sm mt-2">
          or
          <span class="text-purple-500 cursor-pointer hover:underline">browse files</span>
          on your computer
        </p>
      </div>

      <!-- Upload Button -->
      <button class="mt-6 bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full shadow-md transition">
        Upload
      </button>
    </div>
  </div>
  <!-- Property Listings Section -->


  <div class="flex flex-wrap justify-center gap-6 p-6 animate-fadeIn">
    <!--House1-->
    <div
      class="w-64 h-[320px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg w-full h-32 object-cover" src="/src/assets/Photos/House.png" alt="House" />
      </a>
      <div class="p-3">
        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="mb-3 text-sm text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far.
        </p>
        <div class="flex gap-2 justify-center">
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
            Read more
          </a>
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-green-700 rounded-lg hover:bg-green-800">
            Edit
          </a>
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-red-700 rounded-lg hover:bg-red-800">
            Delete
          </a>
        </div>
      </div>
    </div>
    <!--House2-->
    <div
      class="w-64 h-[320px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg w-full h-32 object-cover" src="/src/assets/Photos/House.png" alt="House" />
      </a>
      <div class="p-3">
        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="mb-3 text-sm text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far.
        </p>
        <div class="flex gap-2 justify-center">
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
            Read more
          </a>
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-green-700 rounded-lg hover:bg-green-800">
            Edit
          </a>
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-red-700 rounded-lg hover:bg-red-800">
            Delete
          </a>
        </div>
      </div>
    </div>
    <!--House3-->
    <div
      class="w-64 h-[320px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg w-full h-32 object-cover" src="/src/assets/Photos/House.png" alt="House" />
      </a>
      <div class="p-3">
        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="mb-3 text-sm text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far.
        </p>
        <div class="flex gap-2 justify-center">
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
            Read more
          </a>
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-green-700 rounded-lg hover:bg-green-800">
            Edit
          </a>
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-red-700 rounded-lg hover:bg-red-800">
            Delete
          </a>
        </div>
      </div>
    </div>
    <!--House4-->
    <div
      class="w-64 h-[320px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg w-full h-32 object-cover" src="/src/assets/Photos/House.png" alt="House" />
      </a>
      <div class="p-3">
        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="mb-3 text-sm text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far.
        </p>
        <div class="flex gap-2 justify-center">
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
            Read more
          </a>
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-green-700 rounded-lg hover:bg-green-800">
            Edit
          </a>
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-red-700 rounded-lg hover:bg-red-800">
            Delete
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-wrap justify-center gap-6 p-6 animate-fadeIn">
    <!--House1-->
    <div
      class="w-64 h-[320px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg w-full h-32 object-cover" src="/src/assets/Photos/House.png" alt="House" />
      </a>
      <div class="p-3">
        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="mb-3 text-sm text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far.
        </p>
        <div class="flex gap-2 justify-center">
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
            Read more
          </a>
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-green-700 rounded-lg hover:bg-green-800">
            Edit
          </a>
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-red-700 rounded-lg hover:bg-red-800">
            Delete
          </a>
        </div>
      </div>
    </div>
    <!--House2-->
    <div
      class="w-64 h-[320px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg w-full h-32 object-cover" src="/src/assets/Photos/House.png" alt="House" />
      </a>
      <div class="p-3">
        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="mb-3 text-sm text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far.
        </p>
        <div class="flex gap-2 justify-center">
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
            Read more
          </a>
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-green-700 rounded-lg hover:bg-green-800">
            Edit
          </a>
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-red-700 rounded-lg hover:bg-red-800">
            Delete
          </a>
        </div>
      </div>
    </div>
    <!--House3-->
    <div
      class="w-64 h-[320px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg w-full h-32 object-cover" src="/src/assets/Photos/House.png" alt="House" />
      </a>
      <div class="p-3">
        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="mb-3 text-sm text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far.
        </p>
        <div class="flex gap-2 justify-center">
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
            Read more
          </a>
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-green-700 rounded-lg hover:bg-green-800">
            Edit
          </a>
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-red-700 rounded-lg hover:bg-red-800">
            Delete
          </a>
        </div>
      </div>
    </div>
    <!--House4-->
    <div
      class="w-64 h-[320px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img class="rounded-t-lg w-full h-32 object-cover" src="/src/assets/Photos/House.png" alt="House" />
      </a>
      <div class="p-3">
        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="mb-3 text-sm text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far.
        </p>
        <div class="flex gap-2 justify-center">
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
            Read more
          </a>
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-green-700 rounded-lg hover:bg-green-800">
            Edit
          </a>
          <a href="#"
            class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-red-700 rounded-lg hover:bg-red-800">
            Delete
          </a>
        </div>
      </div>
    </div>
  </div>






</template>