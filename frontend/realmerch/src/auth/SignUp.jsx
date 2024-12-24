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
import { useFormik } from "formik";
import * as Yup from "yup"; 

const SignUp = ({ info }) => {
  const [loading, setloading] = useState(false);
  const { signWithGoogle, validateOrRegisterUser } = info;
  const auth = getAuth();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    onSubmit: (values) => {
      setloading(true);
      console.log(values);
      createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        validateOrRegisterUser(values.fullName, values.email);
        setloading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setloading(false);
      });
        
    },

    validationSchema: Yup.object({
      fullName: Yup.string().required("Fullname is required"),
      email: Yup.string().email("Enter a valid email").required("Email is required"),
      password: Yup.string().min(8, "Password is too short - should be 8 characters minimum").required("Password is required"),
      confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match").required("Confirm Password is required"),
      }),

    });
    

  return (
    <div
      className={`flex justify-center items-center h-screen /bg-[#fbf0f0]  bg-cover bg-center`}
      style={{
        backgroundImage: `url(${loginn})`,
      }}
    >

      <div className="flex justify-center items-center w-[95%] lg:w-[90%] h-[95%] lg:h-[90%] bg-[#F2E3DD] ">
        <div className="lg:basis-1/2 p-[12px] lg:p-[24px] flex flex-col">
          
          <div className="flex flex-col items-center">
          <div className="mb-[12px]  flex flex-col justify-center items-start gap-[18px] w-[80%]">
            <p className="font-[500] text-[18px] md:text-[20px] leading-[17.5px]">
              Join Real Merch Today!
            </p>
            <p className="font-[400] text-[12px] md:text-[16px] leading-[18px]">
              Create an account to unlock an <br className="hidden lg:block"/> unlimited shopping
              experience
            </p>
          </div>
            <form onSubmit={formik.handleSubmit} className="flex flex-col md:w-[380px] lg:w-[487px]">
              <div className="flex items-center border-[1px] border-[#808080] gap-[17.43px] rounded-[30px] px-[25.56px] shadow-md shadow-[#00000040] mb-[10px]">
                <img src={full} alt="Full Name" width={22.07} height={17.43} />
                <input
                  type="text"
                  placeholder="Fullname"
                  className="py-[8px] lg:py-[12px] border-none outline-none w-full placeholder:text-[10px] md:placeholder:text-[14px] bg-[#f2e3dd]"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="fullName"
                />
              </div>
              {formik.touched.fullName && formik.errors.fullName ? (
                <p className="text-red-500 text-sm mt-2">{formik.errors.fullName}</p>
              ) : null}

              <div className="flex flex-col mb-[10px]">
                <div className="flex items-center border-[1px] border-[#808080] gap-[17.43px] rounded-[30px] px-[25.56px] shadow-md shadow-[#00000040]">
                  <img src={message} alt="Email" width={22.07} height={17.43} />
                  <input
                    type="email"
                    placeholder="Email"
                    className="py-[8px] lg:py-[12px] border-none outline-none w-full placeholder:text-[10px] md:placeholder:text-[14px] bg-[#f2e3dd]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="email"

                  />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-500 text-sm mt-2">{formik.errors.email}</p>
                ) : null}
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
                  className="py-[8px] lg:py-[12px] border-none outline-none w-full placeholder:text-[10px] md:placeholder:text-[14px] bg-[#f2e3dd]"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="password"

                />
              </div>
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red-500 text-sm mt-2">{formik.errors.password}</p>
              ) : null}

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
                    className="py-[8px] lg:py-[12px] border-none outline-none w-full placeholder:text-[10px] md:placeholder:text-[14px] bg-[#f2e3dd]"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="confirmPassword"

                  />
                </div>
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                  <p className="text-red-500 text-sm mt-2">{formik.errors.confirmPassword}</p>
                ) : null}
              </div>

              <label className="flex items-center self-start pt-[12px]">
                <input
                  type="checkbox"
                  name="terms"
                  className="/mr-2 custom-radio"
                  required
                />
                <p className="font-[400] text-[12px] md:text-[16px] ml-[4px]">
                  Agree to Terms and conditions
                </p>
              </label>

              <button
                type="submit"
                className="bg-[#845649] rounded-[20px] py-[8px] lg:py-[14px] text-[12px] md:text-[16px] font-[500] text-white mt-[20px]"
              >
                {loading ? "Loading..." : "Sign up"}
              </button>
            </form>

            <span className="flex gap-[30px] md:gap-[56px] mt-[15px] lg:mt-[30px] justify-center">
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

            <span className="flex justify-center items-center py-[8px] lg:py-[16px] gap-[8px]">
              <p className="font-[400] text-[12px] md:text-[16px]">Already a member?</p>
              <Link to={"/"} className="text-[#845649] font-[500] text-[16px] md:text-[20px]">
                Login
              </Link>
            </span>
          </div>
        </div>
        <div
          className="basis-1/2 h-full bg-center bg-cover hidden lg:block"
          style={{
            backgroundImage: `url(${signmg})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default SignUp;
