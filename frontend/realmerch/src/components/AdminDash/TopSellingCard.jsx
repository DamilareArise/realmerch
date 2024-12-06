import StarRating from "../StarRating";
import mock from "./../../assets/mock.svg";
const TopSellingCard = () => {
  const handleRatingChange = (rating) => {
    console.log("Selected Rating:", rating);
  };
  return (
    <div className="flex flex-col  w-[180px] md:w-[280px] shadow-2xl shadow-[#0000001A] rounded-[20px] py-[12px] md:py-[16px] px-[14px] md:px-[20px] bg-[#E3E3E3]">
      <div className="py-[15px] px-[15px] bg-[#FFFFFF] rounded-[12px] flex justify-center">
        <img src={mock} alt="" width={150} height={100} className="w-[100px] md:w-[150px] md:h-[100px]"/>
      </div>

      <div className="pt-[14px] flex flex-col justify-start gap-[8px] rounded-b-[12px] bg-[#E3E3E3]">
        <span className="flex flex-col gap-[4px]">
          <p className="text-[#202224] font-[700] text-[12px] md:text-[16px]">Apple Watch Series 4 </p>

          <p className="text-[#845649] font-[700] text-[14px]">$120.00</p>
        </span>

        <div className="flex">
        <StarRating totalStars={5} onRatingChange={handleRatingChange} />
        <p className="font-[600] text-[12px] text-gray-400">(131)</p>
        </div>

        <button className="px-[28px] md:px-[40px] py-[8px] md:py-[10px] rounded-[17px] bg-[#845649] self-start text-[#FFFFFF] text-[10px] md:text-[14px] font-[700]">
          Edit Product
        </button>
      </div>
    </div>
  );
};

export default TopSellingCard;
