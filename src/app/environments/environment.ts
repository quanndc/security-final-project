import { initializeApp } from 'firebase/app';

export const environment = {
  production: false,
};

export const firebaseConfig = {
  apiKey: 'AIzaSyBRJW87cNG81LGLuy1ErzRGDFIq8F2W4Us',
  authDomain: 'security-final-project.firebaseapp.com',
  projectId: 'security-final-project',
  storageBucket: 'security-final-project.appspot.com',
  messagingSenderId: '359389295953',
  appId: '1:359389295953:web:62218a494d8d14809a8f70',
  measurementId: 'G-8R3Y0ERTZJ',
};

const app = initializeApp(firebaseConfig);
