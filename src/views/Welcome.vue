<template>
    <div class="welcome container">
        <h2>Welcome to Live Chat app</h2>
        <div v-if="showLoginForm">
            <Login />
            <p>
                Not a member? 
                <span @click="showLoginForm = !showLoginForm">Create account</span>
            </p>
        </div>
        <div v-else>
            <SignUp />
            <p>
                Member already?
                <span @click="showLoginForm = !showLoginForm">Login account</span>
            </p>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
export default {
    components: {
        Login,
        SignUp
    },
    setup() {
        // data
        let showLoginForm = ref(true);

        return {
            showLoginForm
        };
    }
}
</script>

<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}
.welcome form {
    width: 300px;
    margin: 20px auto;
}
.welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
}
.welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
}
.welcome button {
    margin: 20px auto;
}
</style>