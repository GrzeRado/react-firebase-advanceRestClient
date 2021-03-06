import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDYCQAgJpq1ujMczXgFewm-EGo-x7oWK3k",
    authDomain: "grzegorz-sandbox.firebaseapp.com",
    databaseURL: "https://grzegorz-sandbox.firebaseio.com",
    projectId: "grzegorz-sandbox",
    storageBucket: "grzegorz-sandbox.appspot.com",
    messagingSenderId: "807574041673"
}

firebase.initializeApp(config)

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const database = firebase.database()
export const auth = firebase.auth()