// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBvptVd16U_iGscKoo6V6uBzNH4gWXLOJ4",
    authDomain: "memecoins-35950.firebaseapp.com",
    projectId: "memecoins-35950",
    storageBucket: "memecoins-35950.firebasestorage.app",
    messagingSenderId: "796242883516",
    appId: "1:796242883516:web:01f57459f874821d5a71b9",
    measurementId: "G-3WDKR80GJV"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const websitesCollection=collection(db,"Memecoins");

export const getAllWebsites=async ()=>{
    const querySnapshot = await getDocs(websitesCollection);
    return querySnapshot.docs.map((doc) =>({id:doc.id,data:doc.data()}))
}

export const updateDocument = async (docId:string,data:any) => {
  try {
    const docRef = doc(db, "Memecoins", docId);
    await updateDoc(docRef, data);
    return true;
  } catch (error) {
    return false
  }
}

export { db, collection, addDoc};


