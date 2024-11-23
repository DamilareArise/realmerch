/* eslint-disable react/prop-types */
import { useState } from "react";
import wavingHand from "./../assets/wavingHand.svg";
import google from "./../assets/googlee.svg";
import facebook from "./../assets/facebookk.svg";
import twitter from "./../assets/x.svg";
import message from "./../assets/mail.svg";
import passwordd from "./../assets/password.svg";
import loginn from "./../assets/loginbg.png";
import loginmg from "./../assets/loginmg.jpg";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { Link, useNavigate } from "react-router-dom";

const Login = ({ info }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);
  const { signWithGoogle, loginWithEmailAndPassword } = info;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // login logic go dey here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const loginUser = () => {
    setloading(true);
    loginWithEmailAndPassword(email, password);
    setloading(false);
    navigate("/");
  };

  return (
    <div
      className={`flex justify-center items-center h-screen /bg-[#fbf0f0]  bg-cover bg-center`}
      style={{
        backgroundImage: `url(${loginn})`,
      }}
    >
      <div className="flex justify-center items-center w-[95%] md:w-[90%] h-[95%] md:h-[90%] bg-[#F2E3DD] ">
        <div className="lg:basis-1/2  p-[30px]">
          <span className="flex gap-[7px] items-center">
            <p className="font-[500] text-[18px] md:text-[24px]">Welcome to Real Merch</p>
            <img src={wavingHand} alt="" />
          </span>

          <p className="mt-[13px] mb-[15px] lg:mb-[30px] font-[400] text-[16px]">
            Please login to your account
          </p>

          <div className="flex flex-col items-center">
            <span className="flex gap-[56px] mb-[15px] lg:mb-[30px] justify-center">
              <button onClick={signWithGoogle}>
                <img
                  src={google}
                  width={50}
                  alt=""
                  className="p-[12px] rounded-[10px] border-[1px] border-[#808080]"
                />
              </button>

              <button>
                <img
                  src={facebook}
                  width={50}
                  alt=""
                  className="p-[12px] rounded-[10px] border-[1px] border-[#808080]"
                />
              </button>

              <button>
                <img
                  src={twitter}
                  width={50}
                  alt=""
                  className="p-[12px] rounded-[10px] border-[1px] border-[#808080]"
                />
              </button>
            </span>

            <p className="text-center mb-[12px] lg:mb-[23px]">OR</p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col lg:w-[400px] xl:w-[487px]"
            >
              <div className="flex items-center border-[1px] border-[#808080] gap-[17.43px] rounded-[30px] px-[25.56px] shadow-md shadow-[#00000040] mb-[10px]">
                <img src={message} alt="Email" width={22.07} height={17.43} />
                <input
                  type="email"
                  placeholder="Email"
                  className="py-[8px] lg:py-[18px]  border-none outline-none w-full placeholder:text-[20px] bg-[#F2E3DD]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center border-[1px] border-[#808080] gap-[17.43px] rounded-[30px] px-[25.56px] shadow-md shadow-[#00000040] mb-[10px]">
                <img
                  src={passwordd}
                  alt="Password"
                  width={22.07}
                  height={17.43}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="py-[8px] lg:py-[18px]  border-none outline-none w-full placeholder:text-[20px] bg-[#F2E3DD]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <a
                href="http://"
                className="text-end py-[12px] lg:py-[16px] font-[400] text-[16px]"
              >
                Forget Password
              </a>

              <button
                type="submit"
                className="bg-[#845649] rounded-[20px] py-[8px] lg:py-[14px] text-[16px] font-[500] text-[white]"
                onClick={loginUser}
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </form>
          </div>
      
          <span className="flex justify-center items-center py-[24px] gap-[8px]">
            <p className="  font-[400] text-[16px]">New to Real Merch?</p>

            <Link
              to={"/signup"}
              className="text-[#20052B] font-[500]  text-[16px] md:text-[20px]"
            >
              Sign up
            </Link>
          </span>
        </div>
        <div
          className="basis-1/2 h-full bg-center bg-cover hidden lg:block"
          style={{
            backgroundImage: `url(${loginmg})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
