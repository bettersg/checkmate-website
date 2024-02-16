import { useTranslation } from "react-i18next";
import { whatsapp } from "../assets";

const ButtonCTAWhatsapp = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <a
        href={props.link}
        className="cursor-pointer flex flex-row items-center justify-center gap-x-4 bg-checkPrimary600 font-workSans font-medium rounded-[50px] px-5 py-4 text-center max-w-sm  "
      >
        <img src={whatsapp} />
        <span className="text-['16px'] ss:text-[20px] text-checkWhite">
          {t("cta.button")}
        </span>
      </a>
    </>
  );
};

export default ButtonCTAWhatsapp;
