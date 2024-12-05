import SideNav from "./SideNav";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import profile from "./../../assets/profilee.svg";
import upload from "./../../assets/upload.svg";
import adProfile from "./../../assets/adminProfile.svg";
import activity from "./../../assets/activity.svg";
import back from "./.././../assets/back.svg";
import forward from "./../../assets/forward.svg";
import payment from "./../../assets/payment.png";
import TopSellingSection from "./TopSellingSection";
import SalesChart from "../SalesChart";

const AdminDashboard = () => {
  const [signuser, setUser] = useState(null);

  const activities = [
    {
      id: 1,
      detail: "Accessed Dashboard",
      action: "Access",
      page: "Order List",
      date: "02-07-2024",
    },
    {
      id: 2,
      detail: "Updated Profile Information",
      action: "Edit",
      page: "Profile",
      date: "05-07-2024",
    },
    {
      id: 3,
      detail: "Viewed Payment History",
      action: "View",
      page: "Payments",
      date: "10-07-2024",
    },
    {
      id: 4,
      detail: "Downloaded Invoice",
      action: "Download",
      page: "Invoices",
      date: "12-07-2024",
    },
    {
      id: 5,
      detail: "Logged Out",
      action: "Logout",
      page: "Dashboard",
      date: "15-07-2024",
    },
  ];
  let users = null;
  const auth = getAuth();
  // const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        // navigate("/login");
      }
    });
  }, [auth]);
  return (
    <div>
      <SideNav />

      <div className="pt-[41px] /px-[20px] /md:px-[50px] bg-[#F9F2F2] flex">
        {/* <Navbar/> */}

        <div className="w-[10%]"></div>

        <div className="flex flex-col gap-[38px] /ml-[150px] w-[90%] px-[20px]">
          <p className="self-start font-[500] text-[22px] leading-[32px] ">
            Dashboard
          </p>
          <div className="flex justify-end mb-[22px]">
            <a
              to={"/admindisplay"}
              className="px-[23px] py-[8px] bg-[#845649] rounded-[25px] flex gap-[10px] items-center shadow-md shadow-[#00000040] text-[#ffffff]"
            >
              <img src={upload} alt="" width={18} height={18} />
              <p className="font-[400] text-[16px] leading-[20px]">
                Upload Carousel
              </p>
            </a>
          </div>

          <div className="flex justify-between text-white">
            <div className="bg-[#845649] p-[24px] rounded-[16px] w-[274px]  flex flex-col gap-[8px]">
              <div className="flex justify-between items-center">
                <span className="flex flex-col">
                  <p>Total user</p>
                  <p className="text-[24px] font-[600]">523,456</p>
                </span>

                <span className="py-[10px] px-[14px] bg-[#E3E1E1] rounded-[8px] ">
                  <i className="fa-solid fa-user text-white "></i>
                </span>
              </div>

              <div className="flex justify-between">
                <i className="fa-solid fa-arrow-trend-up"></i>
                <p className="text-[16px] ">5.5% Up from last month</p>
              </div>
            </div>

            <div className="bg-[#845649] p-[24px] rounded-[16px] w-[274px]  flex flex-col gap-[8px]">
              <div className="flex justify-between items-center">
                <span className="flex flex-col">
                  <p>Total Order</p>
                  <p className="text-[24px] font-[600]">11,000</p>
                </span>

                <span className="py-[10px] px-[14px] bg-[#E3E1E1] rounded-[8px] ">
                  <i className="fa-solid fa-gift text-white"></i>
                </span>
              </div>

              <div className="flex justify-between">
                <i className="fa-solid fa-arrow-trend-up"></i>
                <p className="text-[16px] ">2.5% Up from last week</p>
              </div>
            </div>

            <div className="bg-[#845649] p-[24px] rounded-[16px] w-[274px]  flex flex-col gap-[8px]">
              <div className="flex justify-between items-center">
                <span className="flex flex-col">
                  <p>Total Sales</p>
                  <p className="text-[24px] font-[600]">10,000</p>
                </span>

                <span className="py-[10px] px-[14px] bg-[#E3E1E1] rounded-[8px] ">
                  <i className="fa-solid fa-user text-white "></i>
                </span>
              </div>

              <div className="flex justify-between">
                <i className="fa-solid fa-arrow-trend-up"></i>
                <p className="text-[16px] ">8.5% Up from last week</p>
              </div>
            </div>

            <div className="bg-[#845649] p-[24px] rounded-[16px] w-[274px]  flex flex-col gap-[8px]">
              <div className="flex justify-between items-center">
                <span className="flex flex-col">
                  <p>Total Pending</p>
                  <p className="text-[24px] font-[600]">10,000</p>
                </span>

                <span className="py-[10px] px-[14px] bg-[#E3E1E1] rounded-[8px] ">
                  <i className="fa-solid fa-user text-white "></i>
                </span>
              </div>

              <div className="flex justify-between">
                <i className="fa-solid fa-arrow-trend-up"></i>
                <p className="text-[16px] ">4.5% Up from last week</p>
              </div>
            </div>
          </div>

          <SalesChart />

          {/* customer data */}
          <div className="flex flex-col mt-[24px] mb-[50px]">
            <p className="text-[#000] font-[500] text-[30px] mb-[12px]">
              Customer Data
            </p>

            <div className="flex justify-between">
              <div className="flex gap-[18px] text-white items-center rounded-[16px] py-[18px] px-[24px] bg-[#845649]">
                <i className="fa-solid fa-user text-white "></i>
                <span className="flex flex-col gap-[8px]">
                  <p className="font-[500] text-[18px]">New Customers</p>
                  <p className="text-[16px]">523,456</p>
                </span>
              </div>

              <div className="flex gap-[18px] text-white items-center rounded-[16px] py-[18px] px-[24px] bg-[#845649]">
                <i className="fa-solid fa-user text-white "></i>
                <span className="flex flex-col gap-[8px]">
                  <p className="font-[500] text-[18px]">
                    Total Registered Customers
                  </p>
                  <p className="text-[16px]">523,456</p>
                </span>
              </div>

              <div className="flex gap-[18px] text-white items-center rounded-[16px] py-[18px] px-[24px] bg-[#845649]">
                <img src={activity} alt="" />
                <span className="flex flex-col gap-[8px]">
                  <p className="font-[500] text-[18px]">Customer Value</p>
                  <p className="text-[16px]">90%</p>
                </span>
              </div>
            </div>
          </div>

          {/* payment overview */}

          <div>
            <p className="text-[34px] font-[500] mb-[24px]">Payment Overview</p>

            <div className="flex gap-[50px]">
              <div>
                <p className="font-[500] text-[20px] text-black leading-[30px] mb-[20px]">
                  Recent Payments
                </p>
                <div>
                  <div className="flex w-[584px]  justify-between items-center shadow-sm shadow-[#00000040] border-b-[1.4px] border-black py-[10px] px-[8px]">
                    <div className="flex">
                      <img src={payment} alt="" />
                      <span className="flex flex-col">
                        <p>Payment ID: 1234</p>
                        <p>Amount: $20</p>
                      </span>
                    </div>

                    <span className="flex items-center gap-[8px]">
                      <p className="font-[500] text-[16px]">Successful</p>
                      <i className="fa-regular fa-thumbs-up text-[#845649] fa-xl fa-shake"></i>
                    </span>
                  </div>

                  <div className="flex w-[584px]  justify-between items-center shadow-sm shadow-[#00000040] border-b-[1.4px] border-black py-[10px] px-[8px]">
                    <div className="flex">
                      <img src={payment} alt="" />
                      <span className="flex flex-col">
                        <p>Payment ID: 1234</p>
                        <p>Amount: $20</p>
                      </span>
                    </div>

                    <span className="flex items-center gap-[8px]">
                      <p className="font-[500] text-[16px]">Successful</p>
                      <i className="fa-regular fa-thumbs-up text-[#845649] fa-xl fa-shake"></i>
                    </span>
                  </div>

                  <div className="flex w-[584px]  justify-between items-center shadow-sm shadow-[#00000040] border-b-[1.4px] border-black py-[10px] px-[8px]">
                    <div className="flex">
                      <img src={payment} alt="" />
                      <span className="flex flex-col">
                        <p>Payment ID: 1234</p>
                        <p>Amount: $20</p>
                      </span>
                    </div>

                    <span className="flex items-center gap-[8px]">
                      <p className="font-[500] text-[16px]">Successful</p>
                      <i className="fa-regular fa-thumbs-up text-[#845649] fa-xl fa-shake"></i>
                    </span>
                  </div>

                  <div className="flex w-[584px]  justify-between items-center shadow-sm shadow-[#00000040] border-b-[1.4px] border-black py-[10px] px-[8px]">
                    <div className="flex">
                      <img src={payment} alt="" />
                      <span className="flex flex-col">
                        <p>Payment ID: 1234</p>
                        <p>Amount: $20</p>
                      </span>
                    </div>

                    <span className="flex items-center gap-[8px]">
                      <p className="font-[500] text-[16px]">Successful</p>
                      <i className="fa-regular fa-thumbs-up text-[#845649] fa-xl fa-shake"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-[500] text-[20px] text-black leading-[30px] mb-[20px]">
                  Refunds/ Returns
                </p>

                <div className="flex gap-[20px]">
                  <div className="border-[1.41px] border-[#0000001A] rounded-[8px] p-[18px] shadow-md shadow-[#00000040]">
                    <p className="text-[#00000080] text-[16px] leading-[26px]">
                      Total Items Returned
                    </p>
                    <p className="text-black font-[500] text-[26px] leading-[34px]">
                      200
                    </p>
                    <p className="text-[#00000080] text-[16px] leading-[26px]">
                      1%
                    </p>
                  </div>

                  <div className="border-[1.41px] border-[#0000001A] rounded-[8px] p-[18px] shadow-md shadow-[#00000040]">
                    <p className="text-[#00000080] text-[16px] leading-[26px]">
                      Avg. Monthly Refunds
                    </p>
                    <p className="text-black font-[500] text-[26px] leading-[34px]">
                      $850
                    </p>
                    <p className="text-[#00000080] text-[16px] leading-[26px]">
                      +3%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[34px] font-[500] mb-[24px]">
              Recent Activities
            </p>

            <table className="w-full text-left mb-4 border-collapse">
              <thead>
                <tr className="/bg-gray-200">
                  <th className="px-[4px] md:px-3 border-t py-5 border-b text-[10px] md:text-[16px] font-[500]">
                    S/N
                  </th>
                  <th className="px-[4px] md:px-3 border-t py-5 border-b text-[10px] md:text-[16px] font-[500]">
                    Details
                  </th>
                  <th className="px-[4px] md:px-3 border-t py-5 border-b text-[10px] md:text-[16px] font-[500]">
                    Actions
                  </th>
                  <th className="px-[4px] md:px-3 border-t py-5 border-b text-[10px] md:text-[16px] font-[500]">
                    Page
                  </th>
                  <th className="px-[4px] md:px-3 border-t py-5 border-b text-[10px] md:text-[16px] font-[500]">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity, index) => (
                  <tr
                    key={activity.id}
                    className={`${index % 2 === 0 ? "bg-gray-100" : ""}`}
                  >
                    <td className="px-[4px] md:px-3 py-5 border-b text-[10px] md:text-[14px] font-[400]">
                      {index + 1}
                    </td>
                    <td className="px-[4px] md:px-3 py-5 border-b text-[10px] md:text-[14px] font-[400]">
                      {activity.detail}
                    </td>
                    <td className="px-[4px] md:px-3 py-5 border-b text-[10px] md:text-[14px] font-[400]">
                      {activity.action}
                    </td>
                    <td className="px-[4px] md:px-3 py-5 border-b text-[10px] md:text-[14px] font-[400]">
                      {activity.page}
                    </td>
                    <td className="px-[4px] md:px-3 py-5 border-b text-[10px] md:text-[14px] font-[400]">
                      {activity.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
