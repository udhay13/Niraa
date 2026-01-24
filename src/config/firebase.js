import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDaCcN3pWQbLHuBB60uJTFPGde2E0WQJBw",
    authDomain: "niraa-569ac.firebaseapp.com",
    projectId: "niraa-569ac",
    storageBucket: "niraa-569ac.firebasestorage.app",
    messagingSenderId: "371675712665",
    appId: "1:371675712665:web:6956862f76d31dd7423c08",
    measurementId: "G-2SD9SR3QCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export services for use in the app
export const auth = getAuth(app);
export const db = getFirestore(app);
export { analytics };
