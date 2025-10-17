<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main content -->
    <div class="flex flex-col flex-1">
      <Navbar />
      <main class="flex-1 p-6 overflow-y-auto">
        <RouterView/>
        <!-- <UserDashboardContent /> -->
      </main>
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';


export default {
  components: { Sidebar,Navbar}
}
</script>
