import { auth, createUserWithEmailAndPassword, updateProfile } from '../firebase/config'
import { ref } from "vue";

let useSignUp = ()=>{
    let error = ref("");
    
    let createNewUserAccount = async(username, email, password)=>{
        try {
            let response = await createUserWithEmailAndPassword(auth, email, password);
            if (response) {
                // update user profile
                await updateProfile(auth.currentUser, {
                    displayName: username
                }).then(()=>{
                    return response;
                }).catch((err)=>{
                    error.value = err.message;    
                });
            } else {
                throw new Error("Couldn't create new user account in Firebase");
            };
        }
        catch (err) {
            error.value = err.message;
        }
    };

    return {
        createNewUserAccount,
        error
    }
};

export default useSignUp;
