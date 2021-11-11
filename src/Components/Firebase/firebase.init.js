import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initializeConfig = () => {
    initializeApp(firebaseConfig)
}

export default initializeConfig;