import { whatsapp } from "../assets"

const ButtonCTAWhatsapp = ({ styles }) => {

  return (
    <>
      <a href="https://bit.ly/add-checkmate" className="cursor-pointer flex flex-row items-center justify-center gap-x-4 bg-checkGreen font-poppins rounded-[10px] px-5 py-4 text-center w-96">
        <img src={whatsapp} />
        <span className="text-bold text-checkWhite">WhatsApp our bot now</span>
      </a>
    </>
  )
};

export default ButtonCTAWhatsapp;
