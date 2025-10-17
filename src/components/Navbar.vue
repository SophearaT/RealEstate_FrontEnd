<!-- <template>
  <header class="bg-white shadow flex items-center justify-between px-6 py-4">
    <div class="text-lg font-semibold">Dashboard</div>
    <div class="flex items-center space-x-4">
      <a href="" class="text-blue py-2 rounded hover:text-blue-600">
        Mr.Toem Sopheara
      </a>
      <img
        src="https://i.pravatar.cc/40"
        alt="User Avatar"
        class="w-10 h-10 rounded-full border"
      />            
    </div>
  </header>
</template> -->

<!-- <script>
const username = 'Default'
export default {
  name: 'Navbar',
  data(){
    //return username = localStorage.getItem('username').toString
  }

}
</script> -->
<template>
  <header class="bg-white shadow flex items-center justify-between px-6 py-4 hidden md:flex">
    <!-- Left side -->
    <!-- <div class="text-lg font-semibold">Dashboard</div> -->

    <!-- Right side -->
    <div class="relative ml-auto">
      <div
        class="flex items-center space-x-3 cursor-pointer"
        @click="toggleDropdown"
      >
        <span class="text-gray-700 font-medium hover:text-blue-600 transition">
          {{ user.name }}
        </span>
        <!-- :src="user.photo" -->
        <img
          
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
          class="w-10 h-10 rounded-full border"
        />
      </div>

      <!-- Dropdown Menu -->
      <transition name="fade">
        <div
          v-if="dropdownOpen"
          class="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50"
        >
          <!-- User Info Section -->
          <div class="px-4 py-3 border-b border-gray-100">
            <p class="text-sm font-semibold text-gray-800">
              {{ user.name }}
            </p>
            <p class="text-xs text-gray-500">{{ user.email }}</p>
            <p class="text-xs text-gray-400 italic">{{ user.role }}</p>
          </div>

          <!-- Actions -->
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            @click="goToProfile"
          >
            Profile
          </a>
          <button
            @click="logout"
            class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
import axios from 'axios';
export default {
  name: "Navbar",
  data() {
    return {
      user: {
        name: "",
        email: "",
        role: "",
        photo: "",
      },
      dropdownOpen: false,
    };
  },
 async mounted() {
    // Example: Get user info from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user")) || {
      name: "Guest User",
      email: "guest@example.com",
      role: "Viewer",
      photo: "https://i.pravatar.cc/40",
    }; 
    
    this.user = storedUser;
    console.log(this.user)

    // Listen for outside clicks to close dropdown
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    handleClickOutside(e) {
      const dropdown = this.$el.querySelector(".relative");
      if (dropdown && !dropdown.contains(e.target)) {
        this.dropdownOpen = false;
      }
    },
    goToProfile() {
      this.$router.push("/profile");
      this.dropdownOpen = false;
    },
    logout() {
      localStorage.removeItem("user");
      this.$router.push("/login");
      this.dropdownOpen = false;
    },
  },
};
</script>

<style scoped>
/* Smooth fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
header {
  position: sticky;
  top: 0;
  z-index: 50;
}
</style>
