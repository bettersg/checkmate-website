import { whatsapp } from "../assets";

const ButtonCTAWhatsapp = ({ styles }) => {
  return (
    <>
      <a
        href="https://bit.ly/add-checkmate"
        className="cursor-pointer flex flex-row items-center justify-center gap-x-4 bg-checkPrimary600 font-workSans rounded-[50px] px-5 py-4 text-center max-w-sm "
      >
        <img src={whatsapp} />
        <span className="text-checkWhite">Try it now</span>
      </a>
    </>
  );
};

export default ButtonCTAWhatsapp;
