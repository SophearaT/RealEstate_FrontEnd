<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Property</h1>

    <!-- Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-white shadow rounded-lg p-6">
        <h2 class="text-gray-600 text-sm">Total Users</h2>
        <p class="text-2xl font-semibold mt-2">1,245</p>
      </div>
      <div class="bg-white shadow rounded-lg p-6">
        <h2 class="text-gray-600 text-sm">Active Sessions</h2>
        <p class="text-2xl font-semibold mt-2">345</p>
      </div>
      <div class="bg-white shadow rounded-lg p-6">
        <h2 class="text-gray-600 text-sm">Revenue</h2>
        <p class="text-2xl font-semibold mt-2">$12,400</p>
      </div>
    </div>
    

    <!-- Table -->
    <div class="mt-4 bg-white shadow rounded-lg p-6">
      <h2 class="text-xl font-semibold mb-4">Recent Users</h2>
      <table class="min-w-full border">
        <thead>
          <tr class="bg-gray-50 text-left">
            <th class="py-2 px-4 border-b">Name</th>
            <th class="py-2 px-4 border-b">Email</th>
            <th class="py-2 px-4 border-b">Role</th>
            <th class="py-2 px-4 border-b text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" class="hover:bg-gray-50">
            <td class="py-2 px-4 border-b">{{ user.name }}</td>
            <td class="py-2 px-4 border-b">{{ user.email }}</td>
            <td class="py-2 px-4 border-b">{{ user.role }}</td>
            <td class="py-2 px-4 border-b text-right">
              <!-- <button class="text-blue-500 hover:underline mr-2">Edit</button>
              <button class="text-red-500 hover:underline">Delete</button> -->
              <a href="#" class="text-blue-500 hover:underline mr-2">Edit</a>
              <a href="#" class="text-red-500 hover:underline">Delete</a>

            </td>
          </tr>
        </tbody>
      </table>

       <!-- Pagination Controls -->
    <div class="flex py-2 justify-between items-center">
      <div>
        <label class="text-sm font-medium mr-2">Items per page:</label>
        <select v-model.number="limit" @change="fetchUsers" class="border rounded px-2 py-1">
          <option :value="5">5</option>
          <option :value="10">10</option>
          <option :value="20">20</option>
        </select>
      </div>

      <div class="space-x-2">
        <button
          @click="prevPage"
          :disabled="!pagination.hasPrevPage"
          class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>
        <span class="text-sm">Page {{ pagination.page }} of {{ pagination.totalPages }}</span>
        <button
          @click="nextPage"
          :disabled="!pagination.hasNextPage"
          class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>

    </div>

   

  </div>
</template>

<!-- <script>
export default {
  name: 'DashboardContent',
  data() {
    return {
      users: [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' }
      ]
    }
  }
}
</script> -->
<script>
import axios from 'axios'
export default {
  components: {
  //  CreateUser,
  },
  name: 'Users',
  data() {
    return {
      users: [],
      page: 1,
      limit: 10,
      pagination: {
        page: 1,
        totalPages: 1,
        hasNextPage: false,
        hasPrevPage: false,
      },
    }
  },
  mounted() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      const token = localStorage.getItem('token')
      console.log(token)
      try {
        const { data } = await axios.get('http://localhost:3000/users', {
          params: { page: this.page, limit: this.limit },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        this.users = data.docs
        this.pagination = {
          page: data.page,
          totalPages: data.totalPages,
          hasNextPage: data.hasNextPage,
          hasPrevPage: data.hasPrevPage,
        }
      } catch (err) {
        console.error('Error fetching users:', err)
      }
    },
    nextPage() {
      if (this.pagination.hasNextPage) {
        this.page++
        this.fetchUsers()
      }
    },
    prevPage() {
      if (this.pagination.hasPrevPage) {
        this.page--
        this.fetchUsers()
      }
    },
  },
  watch: {
    limit(newLimit, oldLimit) {
      if (newLimit !== oldLimit) {
        this.page = 1 // reset to first page on limit change
        this.fetchUsers()
      }
    },
  },
}
</script>