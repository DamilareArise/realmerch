
import Login from "./auth/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignUp from "./auth/SignUp";
import { initializeApp } from "firebase/app";
import axios from "axios";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Landing from "./components/Landing";
import AdminLogin from "./auth/admin/AdminLogin";
import AdminDashboard from "./components/AdminDash/AdminDashboard";
import AdminProductDashboard from "./components/AdminDash/AdminProductDashboard";
import AdminOrderList from "./components/AdminDash/AdminOrderList";
import { CartProvider } from "./components/context/CartContext";
import Cart from "./components/Cart";
import AdminUserSearch from "./components/AdminDash/AdminUserSearch";
import PaymentInvoice from "./components/Invoice";
import AdminProfile from "./components/AdminDash/AdminProfile";
import AdminContact from "./components/AdminDash/AdminContact";
import MyAccount from "./components/MyAccount";

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
  const navigate = useNavigate();

  // Validate User Or Register
  const validateOrRegisterUser = (fullname, email) => {
    axios
      .post("http://localhost:5000/account/register", {
        fullname: fullname,
        email: email,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.status) {
          verifyEmail(email);
        }
        navigate("/");
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
        console.log("Error occured", err);
      });
  };

  // signin with email and password
  const loginWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("Wrong Email or Password");
      });
  };

  // send email verification
  const verifyEmail = (email) => {
    const actionCodeSettings = {
      url: "http://localhost:5173/login", // The URL to which users will be redirected
      handleCodeInApp: true, // If set to true, the app will handle the link directly
    };

    sendEmailVerification(auth.currentUser, actionCodeSettings).then(() => {
      alert(`A verification email has been sent to ${email}`);
    });
  };

  let data = {
    app,
    signWithGoogle,
    validateOrRegisterUser,
    loginWithEmailAndPassword,
  };

  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/login" element={<Login info={data} />} />
          <Route path="/signup" element={<SignUp info={data} />} />
          <Route path="/" element={<Landing />} />
          <Route
            path="/admin/login"
            element={<AdminLogin signin={loginWithEmailAndPassword} />}
          />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route
            path="/admin/productDashboard"
            element={<AdminProductDashboard />}
          />
          <Route path="/admin/adminOrderList" element={<AdminOrderList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Admin/user-search" element={<AdminUserSearch />} />
          {/* <Route path="/invoice" element={<PaymentInvoice />} /> */}
          <Route path="/admin/profile" element={<AdminProfile />} />
          <Route path="/admin/contact" element={<AdminContact />} />
          <Route path="/myAccount" element={<MyAccount />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
