import {auth, provider} from '../firebase';

export function signINAPI(){
    return (dispatch)=>{
        auth.SignInWithPopup(provider)
        .then((payload)=>{
            console.log(payload);

        })
        .catch((error)=>alert(error.message ))
    };
}