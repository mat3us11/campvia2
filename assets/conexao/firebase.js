import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyB_gMNQllmBjosKiYBBMPA_vkXPJDYXiuM",
    authDomain: "campvia.firebaseapp.com",
    projectId: "campvia",
    storageBucket: "campvia.firebasestorage.app",
    messagingSenderId: "1095535876931",
    appId: "1:1095535876931:web:ed0ea5403f7c5603792df6",
    measurementId: "G-20L2WTDYL8"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);