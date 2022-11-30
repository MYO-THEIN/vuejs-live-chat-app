<template>
    <h2>Login</h2>
    <form @submit.prevent="login">
        <input type="text" placeholder="Email" v-model="email" />
        <input type="text" placeholder="Password" v-model="password" />
        <div v-if="error" class="error">{{error}}</div>
        <button>Login</button>
    </form>
</template>

<script>
import useLogin from '../composables/login'
import { ref } from '@vue/reactivity'
export default {
    setup(){
        let {loggingIn, error} = useLogin();

        // data
        let email = ref(""),
            password = ref("");

        // methods
        let login = async()=>{
            let response = await loggingIn(email.value, password.value);
            if (response) {
                // redirect codes
            }
        }

        return {
            email, password, error,
            login
        }
    }
}
</script>

<style>

</style>