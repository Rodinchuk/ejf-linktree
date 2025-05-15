import styles from "@/app/components/HeroSection.module.css";
import Emoji from "@/app/components/Emoji";
import Link from "next/link";

export default function CareerFairBanner() {
return (
<section id="home" className={styles.careerBanner}>
    <div className={styles.backgroundImage}>
        <img src="./images/bg-loop-element.png" alt="Background" /></div>
    <div className={styles.content}>
        <h1 className={styles.title}>Інженерний Ярмарок Кар'єри</h1>
        <div className={styles.treebuttons}>
            <div className={styles.button1}>
                <a href="https://ejf.best-lviv.org.ua/" target="_blank" rel="noopener noreferrer">
                    Сайт <Emoji symbol="🔗" />
                </a>
            </div>
            <div className={styles.button2}>
                <a href="https://t.me/ejf_2025_bot" target="_blank" rel="noopener noreferrer">
                    Телеграм-бот <Emoji symbol="🤖" />
                </a>
            </div>
        </div>
        <div className={styles.title}>
            <h1 className={styles.title}>BEST Lviv</h1>
        </div>
        <div className={styles.treebuttons}>
            <a href="https://best-lviv.org.ua" target="_blank" rel="noopener noreferrer">
                Сайт <Emoji symbol="🔗" />

            </a>
            {/* <div className={styles.sm}>
                <Link href="https://www.instagram.com/best_lviv/" className="link"><div className={styles.buttonsm} href="https://www.instagram.com/best_lviv/">
                <img
                className={styles.tiktok} 
                src="./images/instagram.svg"/></div></Link>
                <Link href="https://www.tiktok.com/@best__lviv/" className="link"> <div className={styles.buttonsm} href="https://www.tiktok.com/@best__lviv">
                <img 
                className={styles.tiktok} 
                src="./images/tik_tok.svg"/></div></Link>
            </div> */}
<div className={styles.sm}>
  <Link href="https://www.instagram.com/best_lviv/" className={styles.link}>
    <div className={styles.buttonsm}>
      <img className={styles.instagram} src="./images/instagram.svg" alt="Instagram" />
    </div>
  </Link>

  <Link href="https://www.tiktok.com/@best__lviv/" className={styles.link}>
    <div className={styles.buttonsm}>
      <img className={styles.tiktok} src="./images/tik_tok.svg" alt="TikTok" />
    </div>
  </Link>
</div>

        </div>
        <div className={styles.microImages}>
          
          <img src="./images/microball1.png" className={styles.microball1} />
          <img src="./images/microball2.png" className={styles.microball2} />
          <img src="./images/microball3.png" className={styles.microball3} />
          <img src="./images/microball4.png" className={styles.microball4} />
          <img src="./images/microball2.png" className={styles.microball5} />
          <img src="./images/microball4.png" className={styles.microball6} />


          </div>
    </div>
</section>
);
}