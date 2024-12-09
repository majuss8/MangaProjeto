/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import firebase from '@react-native-firebase/app';

// import {loadStripe} from '@stripe/stripe-react-native';

// const stripePromise = loadStripe('pk_test_51OzW4C05RkUBQsgX9TeM6ErwYHa1z6sLU3Ky3hva4c3jfZackmVWBRVHV737gD2VuC1jaos03PGeTEXoVbjLbgFw00tim5F7Pn');

const firebaseConfig = {
    apiKey: 'AIzaSyDb6kbhQEI21nG4C1xj93Zh9SJbL2SSoqc',
    authDomain: 'mangaprojeto-7ebe6.firebaseapp.com',
    projectId: 'mangaprojeto-7ebe6',
    storageBucket: 'mangaprojeto-7ebe6.firebasestorage.app',
    messagingSenderId: '424478057262',
    appId: '1:424478057262:android:cca9491bfa52c31ef110bf',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

AppRegistry.registerComponent(appName, () => App);
