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
