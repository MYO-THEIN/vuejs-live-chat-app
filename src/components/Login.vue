<template>
    <h2>Login</h2>
    <form @submit.prevent="login">
        <input type="text" placeholder="Email" v-model="email" />
        <input type="text" placeholder="Password" v-model="password" />
        <button>Login</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        // data
        let email = ref(""),
            password = ref("");

        // methods
        let login = ()=>{

        }

        return {
            email, password,
            login
        }
    }
}
</script>

<style>

</style>