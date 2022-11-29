<template>
    <h2>Sign Up</h2>
    <form @submit.prevent="signUp">
        <input type="text" placeholder="User name" v-model="username" />
        <input type="text" placeholder="Email" v-model="email" />
        <input type="text" placeholder="Password" v-model="password" />
        <button>Sign Up</button>
    </form>
    <p v-if="error" class="error">{{error}}</p>
</template>

<script>
import { auth, createUserWithEmailAndPassword, updateProfile } from '../firebase/config'
import { ref } from '@vue/reactivity'
export default {
    setup(){
        // data
        let username = ref(""),
            email = ref(""),
            password = ref(""),
            error = ref("");

        // methods
        let signUp = async()=>{
            try {
                let response = await createUserWithEmailAndPassword(auth, email.value, password.value)
                if (response) {
                    // update user profile
                    await updateProfile(auth.currentUser, {
                        displayName: username.value
                    }).then(()=>{
                        console.log("User profile has been updated");
                    }).catch((err)=>{
                        console.log(err.message);
                    });

                    console.log(response.user);
                    error.value = "";
                } else {
                    throw new Error("Couldn't create new user account in Firebase");
                };
            }
            catch (err) {
                error.value = err.message;
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
