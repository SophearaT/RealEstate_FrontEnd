<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Overview</h1>

    <!-- Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-red-100 shadow rounded-lg p-6">
        <h2 class="text-gray-600 text-sm">Total Users</h2>
        <p class="text-2xl font-semibold mt-2">{{ totalUsers }}</p>
      </div>
      <div class="bg-green-100 shadow rounded-lg p-6">
        <h2 class="text-gray-600 text-sm">Active Sessions</h2>
        <p class="text-2xl font-semibold mt-2">345</p>
      </div>
      <div class="bg-blue-100 shadow rounded-lg p-6">
        <h2 class="text-gray-600 text-sm">Revenue</h2>
        <p class="text-2xl font-semibold mt-2">$12,400</p>
      </div>
    </div>
    
   

    <!-- Table -->
    <div class="mt-4 bg-white shadow rounded-lg p-6">
      <h2 class="text-xl font-semibold mb-4">Recent Users</h2>

       <!-- 🔍 Filter Controls -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
      <div class="flex items-center space-x-2">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search by name or email..."
          class="border px-3 py-2 rounded-lg w-64 focus:ring focus:ring-blue-200"
        />
        <select
          v-model="selectedRole"
          class="border px-3 py-2 rounded-lg focus:ring focus:ring-blue-200"
        >
          <option value="">All Roles</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="manager">Manager</option>
        </select>
      </div>

      <button
        @click="resetFilters"
        class="px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
      >
        Reset Filters
      </button>
    </div>

      <table class="min-w-full border">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="py-2 px-4 border-b">Name</th>
            <th class="py-2 px-4 border-b">Email</th>
            <th class="py-2 px-4 border-b">Role</th>
            <th class="py-2 px-4 border-b text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr 
                
                v-for="user in filteredUsers" 
                :key="user.id" 
                class="hover:bg-gray-50">
                <!-- v-for="user in users" -->
            <td class="py-2 px-4 border-b">{{ user.name }}</td>
            <td class="py-2 px-4 border-b">{{ user.email }}</td>
            <td class="py-2 px-4 border-b">{{ user.role }}</td>
            <td class="py-2 px-4 border-b text-right">
              
               <button
                @click="openEditModal(user)"
                class="text-blue-500 hover:underline mr-2"
              >
                Edit
              </button>
              <button
                @click="openDeleteModal(user)"
                class="text-red-500 hover:underline"
              >
                Delete
              </button>

            </td>
          </tr>
          <tr v-if="filteredUsers.length === 0">
            <td colspan="4" class="text-center py-4 text-gray-500">
              No users found.
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
     <!-- ✨ Popup Form Modal -->
    <transition name="fade">
      <div
        v-if="showEditModal"
        class="fixed inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm z-50" 
      >
      <!-- bg-white/0.1 backdrop-blur-sm -->
        <!-- Form Card -->
        <div
          class="bg-white w-full max-w-md p-6 rounded-2xl shadow-2xl border border-gray-200 transform transition-all scale-100 animate-fade-in-up relative"
        >
          <!-- Close Button -->
          <button
            @click="cancelEdit"
            class="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          >
            ×
          </button>

          <h2 class="text-xl font-semibold mb-4 text-center text-gray-800">
            Edit User
          </h2>

          <form @submit.prevent="saveUser">
            <div class="mb-3">
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Name</label
              >
              <input
                v-model="editUser.name"
                type="text"
                class="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <div class="mb-3">
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Email</label
              >
              <input
                v-model="editUser.email"
                type="email"
                class="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
                required
              />
            </div>

            <div class="mb-3">
              <label class="block text-sm font-medium text-gray-700 mb-1"
                >Role</label
              >
              <input
                v-model="editUser.role"
                type="text"
                class="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
              />
            </div>

            <div class="flex justify-end space-x-2 mt-4">
              <button
                type="button"
                @click="cancelEdit"
                class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </transition>
    <!-- DELETE CONFIRMATION MODAL -->
    <transition name="fade">
      <div
        v-if="showDeleteModal"
         class="fixed inset-0 flex items-center justify-center bg-white/10 backdrop-blur-sm z-50"
        
      >
      <!-- class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" -->
        <div class="bg-white w-full max-w-md p-6 rounded-2xl shadow-2xl border border-gray-200 transform transition-all scale-100 animate-fade-in-up relative">
          <!-- class="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center" -->
          <h2 class="text-lg font-semibold mb-4">Delete User</h2>
          <p class="text-gray-600 mb-6">Are you sure you want to delete <strong>{{ deleteUser.name }}</strong>?</p>
          <div class="flex justify-center space-x-3">
            <button @click="closeDeleteModal" class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
              Cancel
            </button>
            <button @click="confirmDelete()" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
              Delete
            </button>
          </div>
        </div>
      </div>
    </transition>
</div>
  
</template>

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
      totalUsers: 0,
      page: 1,
      limit: 10,
      pagination: {
        page: 1,
        totalPages: 1,
        hasNextPage: false,
        hasPrevPage: false,
      },      
      showEditModal: false,
      showDeleteModal: false,
      editUser: {},
      deleteUser:{},
      searchQuery: "",
      selectedRole: "",
    }
  },
  mounted() {
    this.fetchUsers()
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) => {
        const matchesSearch =
          user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesRole =
          this.selectedRole === "" ||
          user.role.toLowerCase() === this.selectedRole.toLowerCase();
        return matchesSearch && matchesRole;
      });
    },
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
        this.totalUsers = data.totalDocs || this.users.length; // ✅ dynamically count users
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
    resetFilters() {
      this.searchQuery = "";
      this.selectedRole = "";
    },
       // 🧩 Open edit form
    openEditModal(user) {
      this.editUser = {...user};      
      this.showEditModal = true;     
    },

    // 🧩 Cancel editing
    cancelEdit() {
      this.showEditModal = false;
      this.editUser = {}
    },

    // 🧩 Save user changes
    async saveUser() {
      const token = localStorage.getItem("token");
      console.log(this.editUser._id)
      try {
        await axios.patch(
          `http://localhost:3000/users/${this.editUser._id}`,this.editUser,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        
        this.showEditModal = false;
        this.fetchUsers();
      } catch (err) {
        console.error("Error saving user:", err);
      }
    },    
    openDeleteModal(user) {
      this.deleteUser = {...user};
      this.showDeleteModal = true;
    },
    closeDeleteModal() {
      this.showDeleteModal = false;
      this.deleteUser = {};
    },
    async confirmDelete() {
      const token = localStorage.getItem("token");      
      try {
        await axios.delete(`http://localhost:3000/users/${this.deleteUser._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        this.showDeleteModal = false;
        this.fetchUsers(); // refresh user list
      } catch (err) {
        console.error("Error deleting user:", err)
      }
    },

    //Pagination------------------------
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


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.3s ease-out;
}
</style>
