<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navbar -->
    <header class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <!-- Logo -->
          <div class="text-2xl font-bold text-blue-600">RealEstate</div>

          <!-- Menu desktop -->
          <nav class="hidden md:flex space-x-6">
            <a href="#" class="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#" class="text-gray-600 hover:text-blue-600">Buy</a>
            <a href="#" class="text-gray-600 hover:text-blue-600">Rent</a>
            <a href="#" class="text-gray-600 hover:text-blue-600">Contact</a>
          </nav>

          <!-- Hamburger -->
          <button @click="menuOpen = !menuOpen" class="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="menuOpen" class="md:hidden bg-gray-100 px-4 pb-4 space-y-2">
        <a href="#" class="block text-gray-700">Home</a>
        <a href="#" class="block text-gray-700">Buy</a>
        <a href="#" class="block text-gray-700">Rent</a>
        <a href="#" class="block text-gray-700">Contact</a>
      </div>
    </header>

    <!-- Search Section -->
    <section class="max-w-4xl mx-auto px-4 py-10">
      <h2 class="text-3xl font-bold text-gray-800 text-center mb-6">
        Find Your Dream Property
      </h2>
      <div class="grid md:grid-cols-4 gap-4">
        <select class="border rounded-lg p-3 w-full">
          <option>Buy</option>
          <option>Rent</option>
        </select>
        <select class="border rounded-lg p-3 w-full">
          <option>House</option>
          <option>Condominium</option>
          <option>Apartment</option>
          <option>Land</option>
        </select>
        <input type="text" placeholder="Location"
          class="border rounded-lg p-3 w-full" />
        <button class="bg-blue-600 text-white rounded-lg p-3 font-semibold">
          Search
        </button>
      </div>
    </section>

    <!-- Property Card -->
    <section class="max-w-6xl mx-auto px-4 py-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div class="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
        <img src="https://source.unsplash.com/400x250/?house" alt="property"
          class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-800">Modern Family House</h3>
          <p class="text-blue-600 font-bold text-xl mt-2">$250,000</p>

          <div class="flex items-center justify-between mt-4 text-gray-500 text-sm">
            <div class="flex items-center space-x-2">
              <!-- Views -->
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 
                     9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>1.2k</span>
            </div>

            <!-- Rating -->
            <div class="flex items-center space-x-1 text-yellow-500">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.674h3.862c.969 0 
                     1.371 1.24.588 1.81l-3.124 2.27 1.2 3.674c.3.921-.755 
                     1.688-1.54 1.118L10 13.347l-3.137 2.126c-.784.57-1.838-.197-1.539-1.118l1.2-3.674
                     -3.124-2.27c-.783-.57-.38-1.81.588-1.81h3.862l1.199-3.674z" />
              </svg>
              <span>4.5</span>
            </div>

            <!-- Love -->
            <button class="text-red-500 hover:text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 
                     6.343l1.172-1.171a4 4 0 115.656 
                     5.656L10 17.657l-6.828-6.829a4 
                     4 0 010-5.656z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
        <img src="https://source.unsplash.com/400x250/?house" alt="property"
          class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-800">Modern Family House</h3>
          <p class="text-blue-600 font-bold text-xl mt-2">$250,000</p>

          <div class="flex items-center justify-between mt-4 text-gray-500 text-sm">
            <div class="flex items-center space-x-2">
              <!-- Views -->
              <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 
                     9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>1.2k</span>
            </div>

            <!-- Rating -->
            <div class="flex items-center space-x-1 text-yellow-500">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.674h3.862c.969 0 
                     1.371 1.24.588 1.81l-3.124 2.27 1.2 3.674c.3.921-.755 
                     1.688-1.54 1.118L10 13.347l-3.137 2.126c-.784.57-1.838-.197-1.539-1.118l1.2-3.674
                     -3.124-2.27c-.783-.57-.38-1.81.588-1.81h3.862l1.199-3.674z" />
              </svg>
              <span>4.5</span>
            </div>

            <!-- Love -->
            <button class="text-red-500 hover:text-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 
                     6.343l1.172-1.171a4 4 0 115.656 
                     5.656L10 17.657l-6.828-6.829a4 
                     4 0 010-5.656z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script setup>
import { ref } from "vue";

const menuOpen = ref(false);
</script>