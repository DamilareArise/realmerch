import  { useState } from "react";
import loginImage from "././../../assets/adminLogin.jpg";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

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

  return (
    <div className="h-screen flex bg-[#F9F2F2]">
      <div 
        className="w-1/2 h-full bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url(${loginImage})`,
          clipPath: 'polygon(0 0, 70% 0, 100% 100%, 0% 100%)',
        }}
      >
        <p className="text-[#FFFFFF] text-[60px] leading-[75px] font-[600]">
          WELCOME <br /> BACK!!
        </p>
      </div>

      <div className="w-1/2 p-8 flex justify-center flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign In</h2>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-[17px] border border-[#808080] rounded-lg focus:outline-none /focus:ring-2 /focus:ring-blue-600 bg-[#F9F2F2] ${
                errors.email ? "border-red-500" : ""
              }`}
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-[17px] border border-[#808080] bg-[#F9F2F2] rounded-lg focus:outline-none /focus:ring-2 focus:ring-blue-600 ${
                errors.password ? "border-red-500" : ""
              }`}
              placeholder="Password"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end mb-6">
            <a href="#" className="text-[18px] font-[400] text-black hover:underline text-end">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#845649] rounded-tl-lg rounded-br-lg text-white font-bold py-[17px] px-4 /hover:rounded-lg hover:opacity-[75%] transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
