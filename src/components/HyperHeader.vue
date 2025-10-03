<template>
    <header class=" bg-black relative z-10 px-6 lg:px-8 pt-8 py-16">
        <nav class="flex items-center justify-between max-w-[1388px] mx-auto">
            <!-- Logo -->
            <div class="flex items-center gap-2">
                <div class="w-[47px] h-[47px] flex items-center justify-center text-white">
                    <svg width="30" height="24" viewBox="0 0 31 25" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.449219 24.5843L8.53524 8.41225L14.5998 20.5413H24.7073L17.9689 7.09828L14.5998 13.7692L12.9152 10.4338L17.9689 0.326233L30.098 24.5843H0.449219ZM5.8399 20.5413H11.2306L8.53524 15.1338L5.8399 20.5413Z" />
                    </svg>
                </div>

                <h1 class="text-2xl font-bold text-gray-300 tracking-[-0.48px]">La Mansion</h1>
            </div>

            <!-- Navigation Links -->
            <div class="hidden lg:flex items-center gap-8">
                <a href="#"
                    class="text-2xl font-bold text-gray-300 tracking-[-0.48px] hover:text-blue-400 transition-colors">Home</a>
                <a href="#"
                    class="text-2xl font-bold text-gray-300 tracking-[-0.48px] hover:text-blue-400 transition-colors">About Us</a>
                <a href="#"
                    class="text-2xl font-bold text-gray-300 tracking-[-0.48px] hover:text-blue-400 transition-colors">Properties</a>
                <a href="#"
                    class="text-2xl font-bold text-gray-300 tracking-[-0.48px] hover:text-blue-400 transition-colors">Agents</a>
            </div>

            <!-- Action Buttons -->
            <div class="hidden lg:flex items-center gap-4">
                <router-link to="/register">
                <button
                    class="px-4 py-3 border-2 border-black rounded-[11px] text-2xl font-bold text-gray-300 tracking-[-0.48px] hover:bg-red-500 hover:text-white transition-colors">
                    Register
                </button>
                </router-link>
                <button
                    class="px-4 py-3 border-2 border-black rounded-[11px] text-2xl font-bold text-gray-300 tracking-[-0.48px] hover:bg-green-500 hover:text-white transition-colors">
                    Log in
                </button>
            </div>
        </nav>
    </header>



</template>
<!-- <script>


export default {
    
    methods: {
        changeLanguage(lang) {
            this.$i18n.locale = lang;
        }
    }
}
</script> -->