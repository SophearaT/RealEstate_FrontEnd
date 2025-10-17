<template>
  
    <!-- <div class="w-64 bg-white shadow-md hidden md:flex flex-col"> -->
    <!-- <div class="px-6 py-5 text-2xl font-bold text-blue-600 border-b">
     MyDashboard 
      
    </div> -->
    <div class="bg-white shadow-md">
    <div>
      <!-- Top Bar (Mobile) -->
      <div class="flex items-center justify-between bg-white shadow-md px-4 py-3 md:hidden">
        <!-- <div class="flex items-center">
          <img src="@/assets/photos/TSPR.jpg" alt="Logo" class="w-8 h-8 mr-2" />
          <span class="text-xl font-bold text-blue-600">MyDashboard</span>
        </div> -->
        <button @click="toggleSidebar" class="text-gray-700 focus:outline-none">
          <!-- Hamburger Icon -->
          <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <!-- Close Icon -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    <div
      class="fixed inset-y-0 left-0 w-64 bg-white transform md:translate-x-0 md:static md:flex md:flex-col transition-transform duration-300 ease-in-out z-50"
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <!-- Logo + Title -->
      <div class="md:flex items-center px-6 py-5 border-b">
        <img src="@/assets/photos/TSPR.jpg" alt="Logo" class="w-8 h-8 mr-3" />
        <span class="text-2xl font-bold text-blue-600">MyDashboard</span>
      </div>
      <nav class="flex-1 px-4 py-6 overflow-y-auto">
        <ul class="space-y-2">
          <li>
            <!-- <a href="#" class="flex items-center p-2 rounded-lg hover:bg-blue-100 text-gray-700">
              <span class="ml-2">Dashboard</span>
            </a> -->
            <router-link
              to="/dashboard"
              class="flex items-center p-2 rounded-lg"
              :class="isActive('/dashboard') ? 'bg-blue-100 font-bold text-blue-600' : 'text-gray-700 hover:bg-blue-100'"
            >
              <span class="ml-2">Dashboard</span>
            </router-link>
          </li>
          <li>
            <!-- <a href="#" class="flex items-center p-2 rounded-lg hover:bg-blue-100 text-gray-700">
              <span class="ml-2">User</span>
            </a> -->
            <router-link
              to="/dashboard/user"
              class="flex items-center p-2 rounded-lg"
              :class="isActive('/dashboard/user') ? 'bg-blue-100 font-bold text-blue-600' : 'text-gray-700 hover:bg-blue-100'"
            >
              <span class="ml-2">User</span>
            </router-link>
          </li>
          <li>
            <!-- <a href="#" class="flex items-center p-2 rounded-lg hover:bg-blue-100 text-gray-700">
              <span class="ml-2">Agent</span>
            </a> -->
            <router-link
              to="/dashboard/agent"
              class="flex items-center p-2 rounded-lg"
              :class="isActive('/dashboard/agent') ? 'bg-blue-100 font-bold text-blue-600' : 'text-gray-700 hover:bg-blue-100'"
            >
              <span class="ml-2">Agent</span>
            </router-link>
          </li>
          <li>
            <!-- <a href="#" class="flex items-center p-2 rounded-lg hover:bg-blue-100 text-gray-700">
              <span class="ml-2">Company</span>
            </a> -->
            <router-link
              to="/dashboard/company"
              class="flex items-center p-2 rounded-lg"
              :class="isActive('/dashboard/company') ? 'bg-blue-100 font-bold text-blue-600' : 'text-gray-700 hover:bg-blue-100'"
            >
              <span class="ml-2">Company</span>
            </router-link>
          </li>
          <li>
            <!-- <router-link to="/dashboard/property" class="flex items-center p-2 rounded-lg hover:bg-blue-100 text-gray-700">
              <span class="ml-2">Property</span>
            </router-link> -->
            <router-link
              to="/dashboard/property"
              class="flex items-center p-2 rounded-lg"
              :class="isActive('/dashboard/property') ? 'bg-blue-100 font-bold text-blue-600' : 'text-gray-700 hover:bg-blue-100'"
            >
              <span class="ml-2">Property</span>
            </router-link>
          </li>
          <li>
            <!-- <a href="#" class="flex items-center p-2 rounded-lg hover:bg-blue-100 text-gray-700">
              <span class="ml-2">Setting</span>
            </a> -->
            <router-link
              to="/dashboard/setting"
              class="flex items-center p-2 rounded-lg"
              :class="isActive('/dashboard/setting') ? 'bg-blue-100 font-bold text-blue-600' : 'text-gray-700 hover:bg-blue-100'"
            >
              <span class="ml-2">Setting</span>
            </router-link>
          </li>
          <li>
            <!-- <a href="/login" @click="logout" class="flex items-center p-2 rounded-lg hover:bg-blue-100 text-gray-700">
              <span class="ml-2">Logout</span>
            </a> -->
            <a
              href="/login"
              @click.prevent="logout"
              class="flex items-center p-2 rounded-lg text-gray-700 hover:bg-blue-100"
            >
              <span class="ml-2">Logout</span>
            </a>
          </li>
        </ul>     
      </nav>
  </div>  
    <!-- Overlay (click to close on mobile) -->
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-white/1 backdrop-blur-sm bg-opacity-1 md:hidden"
      @click="closeSidebar"
    ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
      toggleSidebar() {
        this.isOpen = !this.isOpen;
      },
      closeSidebar() {
        this.isOpen = false;
      },
      isActive(path) {
      return this.$route.path === path
      },
      logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        this.$router.push('/login')
      }
  }
}
</script>
