<template>
    <p>Hello World {{ $route.params.name }}</p>
    <div>
        {{ project }}
    </div>
</template>
<script>
import axios from 'axios';
export default {
    async mounted(){
        try{
        const name = this.$route.params.name;
        const response = await axios.get('https://api.github.com/repos/SophearaT/' + name); 
        this.project = response.data;  
        }catch(error){
           console.error('Error',error);
           this.project = {};

        }      
    },
    data(){
        return {
            project: {}
        }
    }
}
</script>