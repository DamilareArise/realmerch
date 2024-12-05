import mock from "./../../assets/mock.svg";
const TopSellingCard = () => {
  return (
    <div className="flex flex-col  w-[280px] shadow-2xl shadow-[#0000001A] rounded-[20px] py-[16px] px-[20px] bg-[#E3E3E3]">
      <div className="py-[15px] px-[15px] bg-[#FFFFFF] rounded-[12px] flex justify-center">
        <img src={mock} alt="" width={150} height={100}/>
      </div>

      <div className="pt-[14px] flex flex-col justify-start gap-[8px] rounded-b-[12px] bg-[#E3E3E3]">
        <span className="flex flex-col gap-[4px]">
          <p className="text-[#202224] font-[700] text-[16px]">Apple Watch Series 4 </p>

          <p className="text-[#845649] font-[700] text-[14px]">$120.00</p>
        </span>

        <button className="px-[40px] py-[10px] rounded-[17px] bg-[#845649] self-start text-[#FFFFFF] text-[14px] font-[700]">
          Edit Product
        </button>
      </div>
    </div>
  );
};

export default TopSellingCard;
