import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px]   h-[140px] rounded-full bg-blue-gradient p-[8px] cursor-pointer`}>
  <div className={`${styles.flexCenter}   bg-gradient-to-r from-gray-600 to-gray-700 hover:from-violet-400 hover:to-pink-00 ... flex-col bg-primary  w-[100%] h-[100%] rounded-full`}>
    <div className={`${styles.flexStart} flex-row`}>
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Get</span>
      </p>
      <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
    </div>
    
    <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
      <span className="text-gradient">Started</span>
    </p>
  </div>
</div>
);


export default GetStarted