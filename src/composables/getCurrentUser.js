import { ref } from "vue"
import { auth, onAuthStateChanged } from '../firebase/config'

let user = ref(auth.currentUser);

onAuthStateChanged(auth, (currentUser)=>{
    user.value = currentUser;
})

let getCurrentUser = ()=>{
    return user;
}

export default getCurrentUser;
