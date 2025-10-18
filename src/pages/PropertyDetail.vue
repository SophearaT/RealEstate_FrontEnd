<template>
  <div class="bg-gray-50 min-h-screen p-6 flex justify-center">
    <div class="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Left Section (Main property info) -->
      <div class="lg:col-span-2 bg-white rounded-2xl shadow p-6">
        <!-- Main Image -->
        <div class="rounded-xl overflow-hidden mb-4">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Property"
            class="w-full h-80 object-cover"
          />
        </div>

        <!-- Small preview images -->
        <div class="flex gap-3 mb-6 overflow-x-auto">
          <img
            v-for="n in 5"
            :key="n"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            class="w-28 h-20 rounded-lg object-cover hover:opacity-80 transition"
            alt="Preview"
          />
        </div>

        <!-- Title and location -->
        <div class="mb-3">
          <h2 class="text-2xl font-bold text-gray-800">
            The Crystal Hyatt Place
          </h2>
          <p class="text-gray-500 text-sm">
            New York/Midtown-South, 52 West 36th Street, New York, NY 10018
          </p>
        </div>

        <!-- Property info -->
        <div class="flex flex-wrap gap-8 border-y py-4 text-gray-600 text-sm mb-4">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M20 13V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7m16 0v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7m16 0H4"/>
            </svg>
            <span>2 Bedroom</span>
          </div>

          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 7h18M3 12h18m-9 5h9"/>
            </svg>
            <span>2 Bathroom</span>
          </div>

          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24"
              stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M8 7v10M16 7v10M4 7h16M4 17h16"/>
            </svg>
            <span>2500 ft²</span>
          </div>

          <div class="font-semibold text-gray-800">Price: <span class="text-blue-600">$150,000</span></div>
        </div>

        <!-- Description -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Description</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Just 5 minutes’ walk from the Empire State Building, this Manhattan hotel offers free Wi-Fi
            and modern rooms equipped with a flat-screen TV. The 34th Street—Herald Square underground
            station is 4 minutes’ walk away. A corner sofa and a refrigerator are included in each room.
          </p>
        </div>

        <!-- Home Details -->
        <div>
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Home Details</h3>
          <p class="text-gray-600 text-sm leading-relaxed">
            Each room includes a coffee maker, work desk, and free toiletries. Guests have access to
            an on-site fitness center, breakfast area, and concierge services.
          </p>
        </div>
      </div>

      <!-- Right Section (Agent + Nearby Properties) -->
      <div class="space-y-6">
        <!-- Agent Card -->
        <div class="bg-white rounded-2xl shadow p-6">
          <div class="flex items-center gap-4 mb-4">
            <img
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="Agent"
              class="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h4 class="font-semibold text-gray-800">Jonathan Straus</h4>
              <p class="text-gray-500 text-sm">Joined Sep 01, 2018</p>
            </div>
          </div>

          <p class="text-sm text-gray-600 mb-4">
            I'm a postdoc working on cancer research. I love NYC and exploring new homes.
          </p>

          <ul class="text-sm text-gray-700 space-y-1 mb-4">
            <li><strong>Location:</strong>Sensok Phnompenh</li>
            <li><strong>Phone number:</strong> +855 123456789</li>
            <li><strong>Email:</strong> jonathan.straus@example.com</li>
            <li><strong>Career:</strong> Sailor Or Company</li>
          </ul>

          <div class="flex gap-3">
            <button class="flex-1 bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700">Email</button>
            <button class="flex-1 border border-blue-600 text-blue-600 rounded-lg py-2 hover:bg-blue-50">Call</button>
          </div>
        </div>

        <!-- Nearby Properties -->
        <div class="bg-white rounded-2xl shadow p-6">
          <h3 class="text-lg font-semibold text-gray-800 mb-4">Properties Nearby</h3>

          <div v-for="i in 3" :key="i" class="flex gap-4 mb-4 last:mb-0">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Nearby Property"
              class="w-24 h-20 rounded-lg object-cover"
            />
            <div>
              <h4 class="font-semibold text-gray-800">$1,500,000</h4>
              <p class="text-gray-500 text-sm">100 West, 15th Street, San Francisco</p>
              <div class="flex items-center gap-3 text-gray-500 text-xs mt-1">
                <span>2 Bed</span>
                <span>2 Bath</span>
                <span>2500ft²</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
