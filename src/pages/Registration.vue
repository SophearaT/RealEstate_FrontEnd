<template>
    <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">User Information</h2>
        <form @submit.prevent="handleSubmit" class="space-y-4">
            <!-- Name Field -->
            <div>
                <label class="block mb-1 text-sm font-medium text-gray-700">Name</label>
                <input type="text" v-model="form.name"
                    class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name" required />
            </div>

            <!-- Email Field -->
            <div>
                <label class="block mb-1 text-sm font-medium text-gray-700">Email</label>
                <input type="email" v-model="form.email"
                    class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email" required />
            </div>

            <!-- Age Field -->
            <div>
                <label class="block mb-1 text-sm font-medium text-gray-700">Age</label>
                <input type="number" v-model="form.age" min="0"
                    class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your age" required />
            </div>

            <!-- Submit Button -->
            <button type="submit"
                class="w-full py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-200">
                Submit
            </button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'UserForm',
    data() {
        return {
            form: {
                name: '',
                email: '',
                age: ''
            }
        }
    },
    methods: {
        async handleSubmit() {
            console.log('Form submitted:', this.form)
            // You can add validation or API calls here
            try{
                //use post to summit data to api
                const respone = await axios.post('https://68648e915b5d8d03397d8138.mockapi.io/api/v1/users', {
                    //assign data to variables
                    name: this.form.name,
                    email: this.form.email,
                    age: this.form.age
                })
                console.log("Form Submited Successfully",respone.data);
                //clear form
                this.form ={
                    name: '',
                    email: '',
                    age: ''
                }
                //link to the page directly
                this.$router.push('/user');

            }catch(error){
                console.error('Error',error);
            }
        }
    }
}
</script>