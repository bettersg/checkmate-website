import styles from "../style";
import ButtonCTAWhatsapp from "./ButtonCTAWhatsapp";
import { qr } from "../assets"

const Stats = () => (
  <section className={`${styles.flexCenter} flex-col gap-y-4 flex-wrap sm:mb-20 mb-6`}>
    <ButtonCTAWhatsapp />
    <p className="text-checkBlack text-xl font-semibold mt-2">Or scan to chat</p>
    <img src={qr} />
  </section>
);

export default Stats;
