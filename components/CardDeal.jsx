import { card} from "../assets"
import styles,{layout} from "../style"
import Button from "./Button"
const CardDeal = () => (
 
    <section className={layout.section}>
<div className={layout.sectionInfo}>
<h2 className={styles.heading2}>
  Find a better deal <br className="sm:block hidden"/>in a easy step
</h2>
<p className={`${styles.paragraph} max-w-[470px] mt-5`} >
There is great potential for your business to grow exponentially if you take advantage of digital advertising. With an online presence, your products will be visible to a wider audience. You’ll be able to take your product to where your target customers are.

</p>
<Button styles="mt-10 rounded-[20px]"/>
</div>
<div className={layout.sectionImg}>
<img src={card} alt="card" className="w-[100%] h-[100%] "/>
</div>

    </section>
  )


export default CardDeal