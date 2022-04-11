import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyBHe_rwwrMSvhcmcRcLDy1wVqFHUBVWQFM",
  authDomain: "genius-car-services-2ded4.firebaseapp.com",
  projectId: "genius-car-services-2ded4",
  storageBucket: "genius-car-services-2ded4.appspot.com",
  messagingSenderId: "365850289902",
  appId: "1:365850289902:web:d42bb61d5517dd3a7b75ff"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;