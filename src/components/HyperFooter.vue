<template>
  <footer class="bg-black text-white mx-8 py-8 px-6 lg:px-8">
    <div class="grid grid-flow-col grid-rows-3 gap-4">
      <div class="row-span-3">
        <router-link class="flex items-center gap-2" to="/">
          <div class="w-[47px] h-[47px] flex items-center justify-center text-white">
            <svg width="30" height="24" viewBox="0 0 31 25" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.449219 24.5843L8.53524 8.41225L14.5998 20.5413H24.7073L17.9689 7.09828L14.5998 13.7692L12.9152 10.4338L17.9689 0.326233L30.098 24.5843H0.449219ZM5.8399 20.5413H11.2306L8.53524 15.1338L5.8399 20.5413Z" />
            </svg>
          </div>
          <h1 class="text-2xl font-bold text-gray-300 tracking-[-0.48px]">La Mansion</h1>
        </router-link>
        <address class="mt-4 text-gray-400">
          <h2 class="text-white underline">Adress:</h2>
          Bridge 2, National Road 6A, Sangkat Prek Leap, Khan Chroy Changva, Phnom Penh, Cambodia.
        </address>
      </div>
      <div class="col-span-2 row-span-2">
        <ul>
          <li>
            <router-link to="/about" class="ext-gray-300 hover:text-blue-400 hover:underline transition-colors">About
              Us</router-link>
          </li>
          <li><router-link to="/contact"
              class="ext-gray-300 hover:text-blue-400 hover:underline transition-colors">Contact Us</router-link></li>
          <li><router-link to="/privacy"
              class="ext-gray-300 hover:text-blue-400 hover:underline transition-colors">Privacy Policy</router-link>
          </li>
        </ul>
      </div>
      <div class="col-span-2 text-center">REMS &copy; All Rights Reserved</div>
    </div>
  </footer>
</template>