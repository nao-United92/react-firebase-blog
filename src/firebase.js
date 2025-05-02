import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCiPNmWOVSKHlpUqUI1OUhuMttL8BuQQb4',
  authDomain: 'blog-9dbc2.firebaseapp.com',
  projectId: 'blog-9dbc2',
  storageBucket: 'blog-9dbc2.firebasestorage.app',
  messagingSenderId: '7865132094',
  appId: '1:7865132094:web:89ba52306732bb2c5e5d6f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
