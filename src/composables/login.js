import { auth, signInWithEmailAndPassword } from '../firebase/config'
import { ref } from '@vue/reactivity'

let useLogin = ()=>{
    let error = ref("");

    let loggingIn = async(email, password)=>{
        try {
            let response = await signInWithEmailAndPassword(auth, email, password);
            if (response) {
                return response;
            } else {
                throw new Error("Can't log into your account");
            }
        } catch (err) {
            error.value = err.message;
        }
    }

    return {
        loggingIn,
        error
    }
}

export default useLogin;
