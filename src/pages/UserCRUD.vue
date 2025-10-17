<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main content -->
    <div class="flex flex-col flex-1">
      <Navbar/>
      <main class="flex-1 p-6 overflow-y-auto">
        <UserForm/>
        <RouterView/>
        <!-- <UserDashboardContent /> -->
      </main>
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import UserDetail from '@/components/UserDetail.vue';
import UserForm from '@/components/UserForm.vue';


export default {
  components: { Sidebar,Navbar,UserForm}
}
</script>
