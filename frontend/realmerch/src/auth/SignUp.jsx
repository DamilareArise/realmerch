/* eslint-disable react/prop-types */
import { useState } from "react";
// import wavingHand from "./../assets/wavingHand.svg";
import google from "./../assets/googlee.svg";
import facebook from "./../assets/facebookk.svg";
import twitter from "./../assets/x.svg";
import message from "./../assets/mail.svg";
import passwordd from "./../assets/password.svg";
import full from "./../assets/fullName.svg";
import loginn from "./../assets/loginbg.png";
import signmg from "./../assets/signinmg.jpg";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const SignUp = ({ info }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setloading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { signWithGoogle, validateOrRegisterUser } = info;

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    // Email validation
    if (!validateEmail(email)) {
      setEmailError("Invalid email format");
      valid = false;
    } else {
      setEmailError("");
    }

    // Password matching validation
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      // Signup logic goes here
      console.log("Full Name:", fullName);
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  // signup user

  const auth = getAuth();
  const signUpUser = () => {
    setloading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        validateOrRegisterUser(fullName, email);
        setloading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setloading(false);
        alert("Email already exist");
      });
  };

  return (
    <div
      className={`flex justify-center items-center h-screen /bg-[#fbf0f0]  bg-cover bg-center`}
      style={{
        backgroundImage: `url(${loginn})`,
      }}
    >
      {/* <div className="basis-1/2 pt-[30px] pl-[36px] bg-[#fbf0f0] flex flex-col items-start">
        <div className="mb-[32px]  flex flex-col gap-[24px]">
          <p className="font-[500] text-[24px] leading-[37.5px]">Join Real Merch Today!</p>
          <p className="font-[400] text-[18px] leading-[28px]">Create an account to unlock an <br/> unlimited shopping experience</p>
        </div>
        <div className="flex flex-col items-center">
          <form onSubmit={handleSubmit} className="flex flex-col w-[487px]">
      
            <div className="flex items-center border-[1px] border-[#808080] gap-[17.43px] rounded-[30px] px-[25.56px] shadow-md shadow-[#00000040] mb-[10px]">
              <img src={full} alt="Full Name" width={22.07} height={17.43} />
              <input
                type="text"
                placeholder="Fullname"
                className="py-[15px] border-none outline-none w-full placeholder:text-[18px] bg-[#fbf0f0]"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

          
            <div className="flex flex-col mb-[10px]">
              <div className="flex items-center border-[1px] border-[#808080] gap-[17.43px] rounded-[30px] px-[25.56px] shadow-md shadow-[#00000040]">
                <img src={message} alt="Email" width={22.07} height={17.43} />
                <input
                  type="email"
                  placeholder="Email"
                  className="py-[15px] border-none outline-none w-full placeholder:text-[18px] bg-[#fbf0f0]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              {emailError && (
                <p className="text-red-500 text-sm mt-2">{emailError}</p>
              )}
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
                className="py-[15px] border-none outline-none w-full placeholder:text-[18px] bg-[#fbf0f0]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

           
            <div className="flex flex-col mb-[10px]">
              <div className="flex items-center border-[1px] border-[#808080] gap-[17.43px] rounded-[30px] px-[25.56px] shadow-md shadow-[#00000040]">
                <img
                  src={passwordd}
                  alt="Confirm Password"
                  width={22.07}
                  height={17.43}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="py-[15px] border-none outline-none w-full placeholder:text-[18px] bg-[#fbf0f0]"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              {passwordError && (
                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
              )}
            </div>

           
            <label className="flex items-center self-start pt-[16px]">
              <input
                type="checkbox"
                name="terms"
                className="/mr-2 custom-radio"
                required
              />
              <p className="font-[400] text-[16px] ml-[4px]">
                Agree to Terms and conditions
              </p>
            </label>

            <button
              type="submit"
              className="bg-[#476A6F] rounded-[20px] py-[14px] text-[16px] font-[500] text-white mt-[20px]"
              onClick={signUpUser}
            >
             { loading ? ('Loading...') : ('Sign up')}
            </button>
          </form>

       
          <span className="flex gap-[56px] mt-[30px] justify-center">
            <button>
              <img
                src={google}
                width={45}
                height={45}
                alt=""
                className="p-[12px] rounded-[10px] border-[1px] border-[#808080]"
                onClick={signWithGoogle}
              />
            </button>
            <button>
              <img
                src={facebook}
                width={45}
                height={45}
                alt=""
                className="p-[12px] rounded-[10px] border-[1px] border-[#808080]"
              />
            </button>
            <button>
              <img
                src={twitter}
                width={45}
                height={45}
                alt=""
                className="p-[12px] rounded-[10px] border-[1px] border-[#808080]"
              />
            </button>
          </span>

          <span className="flex justify-center items-center py-[24px] gap-[8px]">
            <p className="font-[400] text-[16px]">Already a member?</p>
            <Link to={'/'} className="text-[#476A6F] font-[500] text-[20px]">
              Login
            </Link>
          </span>
        </div>
      </div> */}

      {/* <div className="basis-1/2 bg-[#476A6F] rounded-bl-[250px]"></div> */}

      <div className="flex justify-center items-center w-[90%] h-[90%] bg-[#F2E3DD] ">
        <div className="basis-1/2 p-[24px] flex flex-col">
          
          <div className="flex flex-col items-center">
          <div className="mb-[12px]  flex flex-col justify-center items-start gap-[18px] w-[80%]">
            <p className="font-[500] text-[20px] leading-[17.5px]">
              Join Real Merch Today!
            </p>
            <p className="font-[400] text-[16px] leading-[18px]">
              Create an account to unlock an <br /> unlimited shopping
              experience
            </p>
          </div>
            <form onSubmit={handleSubmit} className="flex flex-col w-[487px]">
              <div className="flex items-center border-[1px] border-[#808080] gap-[17.43px] rounded-[30px] px-[25.56px] shadow-md shadow-[#00000040] mb-[10px]">
                <img src={full} alt="Full Name" width={22.07} height={17.43} />
                <input
                  type="text"
                  placeholder="Fullname"
                  className="py-[12px] border-none outline-none w-full placeholder:text-[14px] bg-[#f2e3dd]"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col mb-[10px]">
                <div className="flex items-center border-[1px] border-[#808080] gap-[17.43px] rounded-[30px] px-[25.56px] shadow-md shadow-[#00000040]">
                  <img src={message} alt="Email" width={22.07} height={17.43} />
                  <input
                    type="email"
                    placeholder="Email"
                    className="py-[12px] border-none outline-none w-full placeholder:text-[14px] bg-[#f2e3dd]"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                {emailError && (
                  <p className="text-red-500 text-sm mt-2">{emailError}</p>
                )}
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
                  className="py-[12px] border-none outline-none w-full placeholder:text-[14px] bg-[#f2e3dd]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col mb-[10px]">
                <div className="flex items-center border-[1px] border-[#808080] gap-[17.43px] rounded-[30px] px-[25.56px] shadow-md shadow-[#00000040]">
                  <img
                    src={passwordd}
                    alt="Confirm Password"
                    width={22.07}
                    height={17.43}
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="py-[12px] border-none outline-none w-full placeholder:text-[14px] bg-[#f2e3dd]"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                {passwordError && (
                  <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                )}
              </div>

              <label className="flex items-center self-start pt-[12px]">
                <input
                  type="checkbox"
                  name="terms"
                  className="/mr-2 custom-radio"
                  required
                />
                <p className="font-[400] text-[16px] ml-[4px]">
                  Agree to Terms and conditions
                </p>
              </label>

              <button
                type="submit"
                className="bg-[#845649] rounded-[20px] py-[14px] text-[16px] font-[500] text-white mt-[20px]"
                onClick={signUpUser}
              >
                {loading ? "Loading..." : "Sign up"}
              </button>
            </form>

            <span className="flex gap-[56px] mt-[30px] justify-center">
              <button>
                <img
                  src={google}
                  width={45}
                  height={45}
                  alt=""
                  className="p-[12px] rounded-[10px] border-[1px] border-[#808080]"
                  onClick={signWithGoogle}
                />
              </button>
              <button>
                <img
                  src={facebook}
                  width={45}
                  height={45}
                  alt=""
                  className="p-[12px] rounded-[10px] border-[1px] border-[#808080]"
                />
              </button>
              <button>
                <img
                  src={twitter}
                  width={45}
                  height={45}
                  alt=""
                  className="p-[12px] rounded-[10px] border-[1px] border-[#808080]"
                />
              </button>
            </span>

            <span className="flex justify-center items-center py-[16px] gap-[8px]">
              <p className="font-[400] text-[16px]">Already a member?</p>
              <Link to={"/"} className="text-[#476A6F] font-[500] text-[20px]">
                Login
              </Link>
            </span>
          </div>
        </div>
        <div
          className="basis-1/2 h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${signmg})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default SignUp;
