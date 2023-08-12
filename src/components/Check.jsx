import styles from "../style";
import { team01, team02, team03, team04, team05, team06, arrowUp, arrowRight } from "../assets"

const members = [
  {name: "Bing Wen Tan", title: "Founder", image: team01},
  {name: "Amanda Goh", title: "New Gen AI", image: team02},
  {name: "Vincent Teyssier", title: "CTO", image: team03},
  {name: "Carlos Leyva-Salas", title: "Product Manager", image: team04},
  {name: "Wendy Po", title: "Ux Designer Lead", image: team05},
  {name: "Tasha Tan", title: "Ux Designer", image: team06},
]

const Member = ({name, title, image}) => (
  <div className="flex flex-col pb-24 pl-6 gap-y-2 text-left">
    <img  src={image} alt={name} />
    <div>
      <p className="font-semibold">{name}</p>
      <p>{title}</p>
    </div>
  </div>
)

const Check = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 max-w-[1280px]`}>
    <div className="flex flex-col justify-center text-center">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[64px] text-[48px] text-checkShadeDark text-center py-8">
        Check dubious <span className="text-checkPrimary600">messages</span>
      </h1>

      <div className="flex flex-row justify-between items-stretch pt-2">
        {members.map((member, index) => (
          <Member key={index} {...member} />
        ))}
      </div>

      {/** Text block */}
      <h2 className="text-checkPrimary600 mt-[-32px] ss:text-[64px] text-[48px] text-left font-bold leading-none tracking-tight">
        CheckMate is powered by a crew of multidisciplinary volunteers, who separate facts from fiction with the help of artificial intelligence.
      </h2>

      {/** CTA */}
      <div className="flex flex-row gap-x-6 pt-6">
        <a
          href="/about"
          className="cursor-pointer flex flex-row items-center justify-center gap-x-4 bg-checkWhite font-workSans rounded-[50px] px-5 py-4 text-center max-w-sm"
        >
          <span className="text-checkPrimary600">Learn more</span>
          <img src={arrowUp} className="fill-checkPrimary600" />
        </a>
        <a
          href="https://bit.ly/add-checkmate"
          className="cursor-pointer flex flex-row items-center justify-center gap-x-4 bg-checkPrimary600 font-workSans rounded-[50px] px-5 py-4 text-center max-w-sm"
        >
          <span className="text-checkWhite">Join as a fact checker</span>
          <img src={arrowRight} />
        </a>
      </div>


    </div>


  </section>
);

export default Check;
