import styles from "../style";

const Check = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 max-w-[1280px]`}>
      <div className="flex flex-col justify-center text-center">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[64px] text-[48px] text-checkShadeDark text-center py-8">
          Check dubious <span className="text-checkPrimary600">messages</span>
        </h1>
      </div>
    </section>
  )
};

export default Check;
