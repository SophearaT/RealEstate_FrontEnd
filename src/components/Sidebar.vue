<template>
  <div class="w-64 bg-white shadow-md hidden md:flex flex-col">
    <div class="px-6 py-5 text-2xl font-bold text-blue-600 border-b">
      MyDashboard
    </div>
    <nav class="flex-1 px-4 py-6">
      <ul class="space-y-2">
        <li>
          <a href="#" class="flex items-center p-2 rounded-lg hover:bg-blue-100 text-gray-700">
            <span class="ml-2">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center p-2 rounded-lg hover:bg-blue-100 text-gray-700">
            <span class="ml-2">User</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center p-2 rounded-lg hover:bg-blue-100 text-gray-700">
            <span class="ml-2">Agent</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center p-2 rounded-lg hover:bg-blue-100 text-gray-700">
            <span class="ml-2">Company</span>
          </a>
        </li>
        <li>
          <router-link to="/dashboard/property" class="flex items-center p-2 rounded-lg hover:bg-blue-100 text-gray-700">
            <span class="ml-2">Property</span>
          </router-link>
        </li>
        <li>
          <a href="#" class="flex items-center p-2 rounded-lg hover:bg-blue-100 text-gray-700">
            <span class="ml-2">Setting</span>
          </a>
        </li>
        <li>
          <a href="/login" @click="logout" class="flex items-center p-2 rounded-lg hover:bg-blue-100 text-gray-700">
            <span class="ml-2">Logout</span>
          </a>
        </li>
      </ul>
     
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
      logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        //this.$router.push('/login')
      }
  }
}
</script>
