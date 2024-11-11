import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAc8SA-xUIPxAHmZP-gYbr9JnZulmpNUdw",
    authDomain: "task-management-b78ed.firebaseapp.com",
    projectId: "task-management-b78ed",
    storageBucket: "task-management-b78ed.firebasestorage.app",
    messagingSenderId: "130078869104",
    appId: "1:130078869104:web:7f24a534ee28bcf85116b5",
    measurementId: "G-YFRGVK9T28"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
