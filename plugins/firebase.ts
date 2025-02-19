import { defineNuxtPlugin } from '#app';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: 'AIzaSyCMObNmdGomA9_81buLBf-lOausOdBcSJk',
    authDomain: 'todo-nuxt-app-77a63.firebaseapp.com',
    projectId: 'todo-nuxt-app-77a63',
    storageBucket: 'todo-nuxt-app-77a63.firebasestorage.app',
    messagingSenderId: '936658258948',
    appId: '1:936658258948:web:0cb3a396edf3b4ae197951',
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);

  nuxtApp.provide('db', db);
});
