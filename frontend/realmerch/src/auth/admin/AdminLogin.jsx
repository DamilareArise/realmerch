/* eslint-disable react/prop-types */
import { useState } from "react";
import loginImage from "././../../assets/adminLogin.jpg";
import message from "././../../assets/mail.svg";
import passwordd from "././../../assets/password.svg"; // Replace this with a lock icon image
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AdminLogin = ( {signin} ) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setloading] = useState(false)

  const navigate = useNavigate()

  const validateForm = () => {
    const newErrors = {};

    // Email validation (simple regex for email format)
    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Password validation (at least 6 characters, customize as needed)
    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform the login action
      console.log("Form submitted successfully:", { email, password });
      // You can redirect or trigger further logic here
    }
  };

  const loginAdmin = () =>{
    setloading(true)
    axios.post("http://localhost:5000/account/check-admin", {
      email
    })
    .then((response)=>{
      if(response.data.status){
        signin(email, password)
        navigate('/admin/dashboard')

      }
      else{
        alert('Not admin')
        setloading(false)
      }
    })
    .catch((err)=>{
      console.log(err)
      setloading(false)
    })
  }

  return (
    <div className="h-screen flex bg-[#F9F2F2]">
      <div
        className="w-1/2 h-full bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${loginImage})`,
          clipPath: "polygon(0 0, 70% 0, 100% 100%, 0% 100%)",
        }}
      >
        <p className="text-[#FFFFFF] text-[60px] leading-[75px] font-[600]">
          WELCOME <br /> BACK!!
        </p>
      </div>

      <div className="w-1/2 p-8 flex justify-center flex-col items-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Sign In
        </h2>

        <form onSubmit={handleSubmit} className="w-[520px]">
          <div className="mb-4">
            <div
              className={`flex w-full py-[17px] px-4 border ${
                errors.email ? "border-red-500" : "border-[#808080]"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-[#F9F2F2]`}
            >
              <img src={message} alt="Email" width={22.07} height={17.43} />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-4 bg-transparent focus:outline-none"
                placeholder="Email"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="mb-4">
            <div
              className={`flex w-full py-[17px] px-4 border ${
                errors.password ? "border-red-500" : "border-[#808080]"
              } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-[#F9F2F2]`}
            >
              <img src={passwordd} alt="Password" width={22.07} height={17.43} />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-4 bg-transparent focus:outline-none"
                placeholder="Password"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end mb-6">
            <a
              href="#"
              className="text-[18px] font-[400] text-black hover:underline text-end"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#845649] rounded-tl-[40px] rounded-br-[40px] text-white font-bold py-[17px] px-4 hover:opacity-[75%] transition duration-300"
            onClick={loginAdmin}
          >
            {
              loading ? 'Loading...' : 'Login'

            }
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
