<template>
    <div class="bg-gray-300 bg-cover bg-center min-h-screen flex items-center justify-center">
    <div class="m-16 w-full shadow-2xl  max-w-md mx-auto  p-6 rounded-4xl bg-blue-50">
        <h2 class="  text-2xl font-semibold mb-6 text-gray-800 text-center">User Login</h2>
        <Form :validation-schema="validateSchema" @submit="handleSubmit" class="space-y-4">
           


            <!-- Name Field -->
            <div>
                <label class="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
                <Field type="text" v-model="form.name" name="name"
                    class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name" />
                <ErrorMessage name="name" class="text-red-600 text-sm mt-1"/>
            </div>


            <!-- Email Field -->
           
            <!-- Password Field -->   
            <div>
                <label class="block mb-1 text-sm font-medium text-gray-700">Password</label>
                <Field type="password" v-model="form.password" name="password"
                    class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"  />
                <ErrorMessage name="password" class="text-red-600 text-sm mt-1"/>
            </div>

            <p class=" text-center text-sm text-gray-500 ">Don't have an account? <router-link to="/register" class=" font-semibold text-blue-600 underline underline-offset-4">Register</router-link> here.</p>

            <!-- Submit Button -->
             <RouterLink to="/generaluserpage">
             <div class="flex justify-center">
                <button type="submit"
                    class="w-30  py-2 bg-green-600 text-white font-semibold rounded-xl hover:bg-blue-600 transition duration-200">
                    Login
                </button>
            </div>
            </RouterLink>
        </Form>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import { Form, Field, ErrorMessage, validate} from 'vee-validate';
import * as yup from 'yup';
export default {
    name: 'UserForm',
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        return {
            form: {
                name: '',
                email: '',
                age: ''
            },
            validateSchema: yup.object({
                name: yup.string().matches(/^[A-Za-z\s]+$/,
                        'Only alphabet and space is accepted'
                    )
                        .min(3, 'Name must be at least 3 characters')
                        .required('Name is required'),
                    email: yup.string().email('Invalid email').required('Email is required'),
                    age: yup.number().min(10, 'Minimum age of 10').max(120, 'Maximum age of 120').required('Age is required')

            })            
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