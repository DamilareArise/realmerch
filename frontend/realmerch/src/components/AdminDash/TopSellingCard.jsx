import mock from "./../../assets/mock.svg";
const TopSellingCard = () => {
  return (
    <div className="flex flex-col  w-[340px] shadow-2xl shadow-[#0000001A] rounded-[20px] py-[20px] px-[20px] bg-[#E3E3E3]">
      <div className="py-[15px] px-[30px] bg-[#FFFFFF] rounded-[12px] flex justify-center">
        <img src={mock} alt="" width={200} />
      </div>

      <div className="p-[14px] flex flex-col justify-start gap-[8px] rounded-b-[12px] bg-[#E3E3E3]">
        <span className="flex flex-col gap-[8px]">
          <p>Apple Watch Series 4 </p>

          <p>$120.00</p>
        </span>

        <button className="px-[40px] py-[10px] rounded-[17px] bg-[#845649] self-start text-[#FFFFFF]">
          Edit Product
        </button>
      </div>
    </div>
  );
};

export default TopSellingCard;
