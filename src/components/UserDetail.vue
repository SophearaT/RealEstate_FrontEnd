 <template>
          <div class="bg-white p-4 rounded shadow-md mb-4">
        <h2 class="text-xl font-bold mb-3">{{ user && user.id ? 'Edit User' : 'Add User' }}</h2>

        <input v-model="form.name" placeholder="Name" class="w-full border p-2 mb-3 rounded" />
        <input v-model="form.email" placeholder="Email" class="w-full border p-2 mb-3 rounded" />
        <input v-if="!user || !user.id" v-model="form.password" type="password" placeholder="Password"
        class="w-full border p-2 mb-3 rounded"/>

        <div class="flex gap-2">
        <button @click="saveUser" class="bg-green-500 text-white px-4 py-2 rounded">Save</button>
        <button @click="$emit('close')" class="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
        </div>
        </div>
</template>
<script>
import api  from '@/services/api';
export default {
  props: ['user'],
  data() {
    return {
      form: this.users
        ? { ...this.user }
        : { name: '', email: '', password: '' }
    }
  },
  methods: {
    async saveUser() {
      if (this.form.id) {
        await api.put(`/users/${this.form.id}`, this.form)
      } else {
        await api.post('/users', this.form)
      }
      this.$emit('refresh')
      this.$emit('close')
    }
  }
}
</script>
