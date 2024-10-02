// import Login from "./auth/Login"
import SignUp from "./auth/SignUp"
import { initializeApp } from "firebase/app"


function App() {
  
  const firebaseConfig = {
    apiKey: "AIzaSyBgorH5Crfr_qyBNft0B0bOovs3cM10Skc",
    authDomain: "realmerch-40514.firebaseapp.com",
    projectId: "realmerch-40514",
    storageBucket: "realmerch-40514.appspot.com",
    messagingSenderId: "185118234919",
    appId: "1:185118234919:web:ea60521a63cf3e6c0a7102"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  return (
    <>
      {/* <Login/> */}
      <SignUp/>
    </>
  )
}

export default App
