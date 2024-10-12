import Login from "./auth/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import SignUp from "./auth/SignUp";
import { initializeApp } from "firebase/app";
import axios from "axios";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Landing from "./components/Landing";
import AdminLogin from "./auth/admin/AdminLogin";
import AdminDashboard from "./components/AdminDash/AdminDashboard";
import AdminProductDashboard from "./components/AdminDash/AdminProductDashboard";
import AdminOrderList from "./components/AdminDash/AdminOrderList";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBgorH5Crfr_qyBNft0B0bOovs3cM10Skc",
    authDomain: "realmerch-40514.firebaseapp.com",
    projectId: "realmerch-40514",
    storageBucket: "realmerch-40514.appspot.com",
    messagingSenderId: "185118234919",
    appId: "1:185118234919:web:ea60521a63cf3e6c0a7102",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  // ValidateUser
  const validateOrRegisterUser = (fullname, email) => {
    axios
      .post("http://localhost:5000/account/register", {
        fullname: fullname,
        email: email,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  // signWithGoogle ---------
  const signWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user, user.displayName);
        validateOrRegisterUser(user.displayName, user.email);
      })
      .catch((err) => {
        console.log("Error occured");
      });
  };

  let data = {
    app,
    signWithGoogle,
    validateOrRegisterUser
  } 

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Login info = {data} />
          }
        />
        <Route path="/signup" element={<SignUp info = {data} />} />
        <Route path="/landing" element={<Landing/>}/>
        <Route path="/admin/login" element={<AdminLogin/>}/>
        <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
        <Route path="/admin/productDashboard" element={<AdminProductDashboard/>}/>
        <Route path="/admin/adminOrderList" element={<AdminOrderList/>}/>
      </Routes>
    </>
  );
}

export default App;
