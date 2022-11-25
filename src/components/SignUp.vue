<template>
    <h2>Sign Up</h2>
    <form @submit.prevent="signUp">
        <input type="text" placeholder="User name" v-model="username" />
        <input type="text" placeholder="Email" v-model="email" />
        <input type="text" placeholder="Password" v-model="password" />
        <button>Sign Up</button>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        // data
        let username = ref(""),
            email = ref(""),
            password = ref("");

        // methods
        let signUp = ()=>{

        }

        return {
            username, email, password,
            signUp
        }
    }
}
</script>

<style>

</style>
