<template>
    <div class="max-w-sm mx-auto my-8 p-6 bg-white rounded-2xl shadow-md border border-cyan-500">
        <h2 class="text-2xl font-semibold mb-4 text-center">Contact Form</h2>
        <Form :validation-schema="validateSchema" @submit="handleSubmit">
            <!-- Name Field -->
            <div>
                <label for="name" class="block mb-1 font-semibold">Name</label>
                <Field type="text" v-model="form.name" name="name"
                    class="w-full px-4 py-2 border border-black-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Enter your name" />
                <ErrorMessage name="name" class="text-red-600 text-sm mt-1" />
            </div>
            <!-- Email Field -->
            <div>
                <label for="email" class="block mb-1 font-semibold">Email</label>
                <Field type="email" v-model="form.email" name="email"
                    class="w-full px-4 py-2 border border-black-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Enter your email" />
                <ErrorMessage name="email" class="text-red-600 text-sm mt-1" />
            </div>
            <!-- Message Field -->
            <div>
                <label for="message" class="block mb-1 font-semibold">Message</label>
                <Field as="textarea" v-model="form.message" name="message" rows="3"
                    class="w-full px-4 py-2 border border-black-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Enter your message" />
                <ErrorMessage name="message" class="text-red-600 text-sm mt-1" />
            </div>
            <!-- Submit Button -->
            <div>
                <button type="submit"
                    class="container mx-auto py-2 bg-black text-white rounded-2xl hover:bg-red-500 hover:text-white font-semibold hover:cursor-pointer transition-colors duration-300">
                    Send Message
                </button>
            </div>
        </Form>
    </div>
</template>
<script>
import axios from 'axios';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

export default {
    name: 'ContactForm',
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
                message: ''
            },
            validateSchema: yup.object({
                name: yup.string().matches(/^[A-Za-z\s]+$/,
                    'Only alphabet and space is accepted')
                    .min(3, 'Name must be at least 3 characters')
                    .required('Name is required'),
                email: yup.string().email('Invalid email').required('Email is required'),
                message: yup.string().min(5, 'Message must be from 5 to 100 characters').max(100, 'Message must be from 5 to 100 characters').required('Message is required')
            }),

        }
    },
    methods: {
        async handleSubmit() {
            console.log('Form submitted:', this.form)
            // You can add validation or API calls here
            try {
                //use post to summit data to api
                const respone = await axios.post('https://68648e915b5d8d03397d8138.mockapi.io/api/v1/users', {
                    //assign data to variables
                    name: this.form.name,
                    email: this.form.email,
                    message: this.form.message
                })
                console.log("Form Submited Successfully", respone.data);
                //clear form
                this.form = {
                    name: '',
                    email: '',
                    message: ''
                }
                //link to the page directly
                this.$router.push('/');

            } catch (error) {
                console.error('Error', error);
            }
        }
    }
}
</script>