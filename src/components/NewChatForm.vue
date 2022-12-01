<template>
    <form>
        <textarea 
            placeholder="Type message and hit ENTER to send it" 
            v-model="message"
            @keypress.enter="handleSubmit"></textarea>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getCurrentUser from '../composables/getCurrentUser'
import { serverTimestamp } from '../firebase/config'
export default {
    setup() {
        // data
        let user = getCurrentUser();
        let message = ref("");

        // methods
        let handleSubmit = ()=>{
            let chat = {
                message: message.value,
                name: user.value.displayName,
                created_at: serverTimestamp()
            };

            message.value = "";
        }

        return {
            message,
            handleSubmit
        }
    }
}
</script>

<style>
form {
    margin: 10px;
}
textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}
</style>
