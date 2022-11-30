<template>
    <h2>Sign Up</h2>
    <form @submit.prevent="signUp">
        <input type="text" placeholder="User name" v-model="username" />
        <input type="text" placeholder="Email" v-model="email" />
        <input type="text" placeholder="Password" v-model="password" />
        <div v-if="error" class="error">{{error}}</div>
        <button>Sign Up</button>
    </form>
</template>

<script>
import useSignUp from '../composables/signUp';
import { ref } from '@vue/reactivity'
export default {
    setup(){
        let { createNewUserAccount, error } = useSignUp();

        // data
        let username = ref(""),
            email = ref(""),
            password = ref(""); 

        // methods
        let signUp = async()=>{
            let response = await createNewUserAccount(username.value, email.value, password.value);
            if (response) {
                // redirect codes
            }
        }

        return {
            username, email, password, error,
            signUp
        }
    }
}
</script>

<style>

</style>
