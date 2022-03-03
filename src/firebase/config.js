import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "clone-29de6.firebaseapp.com",
  projectId: "clone-29de6",
  storageBucket: "clone-29de6.appspot.com",
  messagingSenderId: "999775148271",
  appId: "1:999775148271:web:cc5d06efa0807b2f57e31a"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });


