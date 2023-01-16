import { features } from "../constants"
import styles,{layout } from "../style"
import Button from './Button';
import GetStarted from "./Getstarted";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[10px] ${index !== features.length - 1 ? "mb-6" : "mb-0"}
   feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-5">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
      
    </div>
  </div>
);




const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
          You do the Business,<br className="sm:block-hidden"/> we'll handle the  wallet
      </h2>
<p className={`${styles.paragraph} max-w-[480px] mt-5`}>
  Your wallet is our responsibility, make Payment happily Stay focused on building your wallet 
</p>
 <Button styles="mt-12"/>
 

    </div>
  
      
    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
    

  </section>
  
  )


export default Business