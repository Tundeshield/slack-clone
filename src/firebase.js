import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyD2-T4nTQLx_Mi_ukbusrDswpdtzcnLdXw",
	authDomain: "slack-clone-by-tunde.firebaseapp.com",
	projectId: "slack-clone-by-tunde",
	storageBucket: "slack-clone-by-tunde.appspot.com",
	messagingSenderId: "542260434076",
	appId: "1:542260434076:web:8423c93d375c8ce123c959",
	measurementId: "G-QJ8VDCX2LK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider, db};