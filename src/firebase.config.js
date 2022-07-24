import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore } from 'firebase/firestore'
import {getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCsL2st6A_Y0f2Z8l-KXv5vAdjaQAWAlek",
    authDomain: "taazadeliveryapp.firebaseapp.com",
    databaseURL: "https://taazadeliveryapp-default-rtdb.firebaseio.com",
    projectId: "taazadeliveryapp",
    storageBucket: "taazadeliveryapp.appspot.com",
    messagingSenderId: "156527493740",
    appId: "1:156527493740:web:81e41a640692d487340e49",
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  export {app, firestore, storage};