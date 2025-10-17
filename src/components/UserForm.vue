<template>
  <div class="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
    <div class="bg-white rounded-lg w-96 p-6 shadow-lg">
      <h3 class="text-xl font-semibold mb-4">
        {{ user ? 'Edit User' : 'Add New User' }}
      </h3>

      <form @submit.prevent="saveUser">
        <div class="mb-4">
          <label class="block text-gray-700 mb-1">Name</label>
          <input
            v-model="form.name"
            type="text"
            class="w-full border p-2 rounded"
            placeholder="Enter name"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 mb-1">Email</label>
          <input
            v-model="form.email"
            type="email"
            class="w-full border p-2 rounded"
            placeholder="Enter email"
            required
          />
        </div>

        <div class="flex justify-end space-x-2">
          <button
            type="button"
            class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            @click="$emit('close')"
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
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserForm',
  props: {
    user: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
      },
    }
  },
  watch: {
    user: {
      handler(newVal) {
        if (newVal) {
          this.form.name = newVal.name
          this.form.email = newVal.email
        } else {
          this.form.name = ''
          this.form.email = ''
        }
      },
      immediate: true,
    },
  },
  methods: {
    async saveUser() {
      if (this.user) {
        await axios.put(`http://localhost:3000/users/${this.user.id}`, this.form)
      } else {
        await axios.post('http://localhost:3000/users', this.form)
      }
      this.$emit('saved')
      this.$emit('close')
    },
  },
}
</script>
