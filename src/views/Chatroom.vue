<template>
    <div class="container">
        <NavBar />
        <NewChatForm />
    </div>
</template>

<script>
import { watch } from '@vue/runtime-core'
import NavBar from '../components/NavBar'
import NewChatForm from '../components/NewChatForm'
import getCurrentUser from '../composables/getCurrentUser'
import { useRouter } from 'vue-router'
export default {
    components: {
        NewChatForm,
        NavBar
    },
    setup() {
        let router = useRouter();

        // data
        let user = getCurrentUser();

        watch(user, ()=>{
            if (!user.value)
                router.push({name: 'welcome'});
        })
    }
}
</script>

<style>

</style>
