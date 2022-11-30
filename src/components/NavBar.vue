<template>
    <nav>
        <div>
            <p>Hi display name</p>
            <p class="email">logged in as email</p>
        </div>
        <button @click="logout">Logout</button>
    </nav>
</template>

<script>
import { ref } from '@vue/reactivity'
import { auth, signOut } from '../firebase/config'

export default {
    setup() {
        // data
        let error = ref("");

        // methods
        let logout = async()=>{
            try {
                await signOut(auth);
            } catch (err) {
                error.value = err.message;
            }
        }

        return {
            logout
        }
    }
}
</script>

<style>
nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
}
nav p.email {
    font-size: 14px;
    color: #999;
}
</style>
