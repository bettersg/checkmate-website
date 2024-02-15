import React from "react";
import { arrowButtonRight, arrowButtonDown } from "../assets";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();

  const detailsRef = useRef({});
  const [isOpenMap, setIsOpenMap] = React.useState({});

  const toggleDetails = (questionNumber, isOpen) => {
    setIsOpenMap({ ...isOpenMap, [questionNumber]: isOpen });
  };

  return (
    <div id="faq" className={`flex flex-col items-center text-checkShadeDark`}>
      <h1 className="flex-1 font-poppins font-bold text-[36px] md:text-[48px] text-checkShadeDark w-full text-center">
        {t("faq.title")}
      </h1>

      <div className="flex flex-col px-0 sm:px-4 md:px-12 xl:max-w-[1080px] w-full items-center font-workSans">
        <details
          ref={(el) => (detailsRef.current["is-checkmate-free-to-us"] = el)}
          open={isOpenMap["is-checkmate-free-to-us"]}
          onToggle={(e) =>
            toggleDetails("is-checkmate-free-to-us", e.target.open)
          }
          className="w-full"
          id="is-checkmate-free-to-us"
        >
          <summary className="cursor-pointer px-4 py-6 font-bold list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="py-3 px-0 text-checkShadeDark text-xl font-medium">
                {t("faq.question_1")}
              </span>
              <img
                className={"h-5 w-5"}
                src={
                  isOpenMap["is-checkmate-free-to-us"]
                    ? arrowButtonDown
                    : arrowButtonRight
                }
              />
            </div>
          </summary>
          <p className="px-4 py-6 pt-0 mt-4 text-checkGrayModal text-base">
            <span className="font-bold">{t("faq.answer_1")}</span>{" "}
            {t("faq.answer_2")}
          </p>
        </details>
        <div className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] border-b border-gray-300 mt-0"></div>
        <details
          ref={(el) => (detailsRef.current["how-does-checkmate-work"] = el)}
          open={isOpenMap["how-does-checkmate-work"]}
          onToggle={(e) =>
            toggleDetails("how-does-checkmate-work", e.target.open)
          }
          className="w-full "
          id="how-does-checkmate-work"
        >
          <summary className="cursor-pointer px-4 py-6 font-bold list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="py-3 px-0 text-xl font-medium">
                {t("faq.question_2")}
              </span>
              <img
                className={"h-5 w-5"}
                src={
                  isOpenMap["how-does-checkmate-work"]
                    ? arrowButtonDown
                    : arrowButtonRight
                }
              />
            </div>
          </summary>
          <div className="px-4 py-6 pt-0 mt-4 text-checkGrayModal flex flex-col gap-y-2 text-base">
            <p>{t("faq.answer_2_pretext")}</p>
            <h3 className="font-bold underline">
              {t("faq.answer_2_heading_matching")}
            </h3>
            <p>{t("faq.answer_2_matching_text")}</p>
            <h3 className="font-bold underline">
              {t("faq.answer_2_heading_found_match")}
            </h3>
            <p>{t("faq.answer_2_found_match_text")}</p>
            <h3 className="font-bold underline">
              {t("faq.answer_2_heading_no_match")}
            </h3>
            <p>{t("faq.answer_2_no_match_text")}</p>
            <h3 className="font-bold underline">
              {t("faq.answer_2_heading_voting")}
            </h3>
            <p>{t("faq.answer_2_heading_voting_pretext")}</p>
            <ol className="list-decimal	pl-6 pb-2">
              <li>{t("faq.answer_2_heading_voting_list_1")}</li>
              <li>{t("faq.answer_2_heading_voting_list_2")}</li>
              <li>{t("faq.answer_2_heading_voting_list_3")}</li>
              <li>{t("faq.answer_2_heading_voting_list_4")}</li>
              <li>{t("faq.answer_2_heading_voting_list_5")}</li>
              <li>{t("faq.answer_2_heading_voting_list_6")}</li>
              <li>{t("faq.answer_2_heading_voting_list_7")}</li>
            </ol>
            <p>{t("faq.answer_2_heaidng_voting_footer")}</p>
            <h3 className="font-bold underline">
              {t("faq.answer_2_heading_outcome")}
            </h3>
            <p>{t("faq.answer_2_heading_outcome_pretext")}</p>
            <ol className="list-decimal pl-6">
              <li>{t("faq.answer_2_heading_outcome_list_1")}</li>
              <li>{t("faq.answer_2_heading_outcome_list_2")}</li>
              <li>{t("faq.answer_2_heading_outcome_list_3")}</li>
              <li>
                {t("faq.answer_2_heading_outcome_list_4")}
                <ol className="list-alpha pl-6">
                  <li>
                    {t("faq.answer_2_heading_outcome_list_4_1a")}{" "}
                    <strong>&gt;20%</strong>{" "}
                    {t("faq.answer_2_heading_outcome_list_4_1b")}
                    <ol className="list-roman pl-6">
                      <li>{t("faq.answer_2_heading_outcome_list_4_1_1")}</li>
                      <li>{t("faq.answer_2_heading_outcome_list_4_1_2")}</li>
                    </ol>
                  </li>
                  <li>
                    {t("faq.answer_2_heading_outcome_list_4_2a")}{" "}
                    <strong>&gt;80%</strong>{" "}
                    {t("faq.answer_2_heading_outcome_list_4_2b")}
                  </li>
                  <li>
                    {t("faq.answer_2_heading_outcome_list_4_3a")}{" "}
                    <strong>&gt;50%</strong>{" "}
                    {t("faq.answer_2_heading_outcome_list_4_3b")}
                    <ol className="list-roman pl-6">
                      <li>{t("faq.answer_2_heading_outcome_list_4_3_1")}</li>
                      <li>{t("faq.answer_2_heading_outcome_list_4_3_2")}</li>
                    </ol>
                  </li>
                </ol>
              </li>
              <li>
                {t("faq.answer_2_heading_outcome_list_5")}
                <ol className="list-alpha pl-6">
                  <li>{t("faq.answer_2_heading_outcome_list_5_1")}</li>
                  <li>{t("faq.answer_2_heading_outcome_list_5_2")}</li>
                </ol>
              </li>
            </ol>
          </div>
        </details>
        <div className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] border-b border-gray-300"></div>
        <details
          ref={(el) => (detailsRef.current["become-a-fact-checker"] = el)}
          open={isOpenMap["become-a-fact-checker"]}
          onToggle={(e) =>
            toggleDetails("become-a-fact-checker", e.target.open)
          }
          className="w-full "
          id="become-a-fact-checker"
        >
          <summary className="cursor-pointer px-4 py-6 font-bold list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="py-3 px-0 text-xl font-medium">
                {t("faq.question_3")}
              </span>
              <img
                className={"h-5 w-5"}
                src={
                  isOpenMap["become-a-fact-checker"]
                    ? arrowButtonDown
                    : arrowButtonRight
                }
              />
            </div>
          </summary>
          <div className="px-4 py-6 pt-0 mt-4 text-checkGrayModal flex flex-col gap-y-4 text-base">
            <p>{t("faq.answer_3")}</p>
            <p>
              {t("faq.answer_3_cta")}{" "}
              <a
                href="mailto:checkmate@better.sg"
                className="underline text-checkPurple"
              >
                {t("faq.answer_3_cta_email")}
              </a>{" "}
            </p>
            {/** hidden for now <img src={qrFc} className="self-center" />
            <span className="self-center">QR Code to CheckMate's fact-checker bot</span>*/}
          </div>
        </details>
        <div className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] border-b border-gray-300"></div>
        <details
          ref={(el) => (detailsRef.current["what-data-collected"] = el)}
          open={isOpenMap["what-data-collected"]}
          onToggle={(e) => toggleDetails("what-data-collected", e.target.open)}
          className="w-full "
          id="what-data-collected"
        >
          <summary className="cursor-pointer px-4 py-6 font-bold list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="py-3 px-0 text-xl font-medium">
                {t("faq.question_4")}
              </span>
              <img
                className={"h-5 w-5"}
                src={
                  isOpenMap["what-data-collected"]
                    ? arrowButtonDown
                    : arrowButtonRight
                }
              />
            </div>
          </summary>
          <div className="px-4 py-6 pt-0 mt-4 text-checkGrayModal text-base">
            <p>
              {t("faq.answer_4a")}{" "}
              <span className="underline font-bold">{t("faq.answer_4b")}</span>{" "}
              {t("faq.answer_4c")}{" "}
              <span className="underline font-bold">{t("faq.answer_4d")}.</span>
              .
            </p>
            <p>
              {t("faq.answer_4e")}{" "}
              <Link
                to="privacy-policy"
                className="font-bold text-checkPurple underline"
              >
                {t("faq.answer_4f")}
              </Link>
              .
            </p>
          </div>
        </details>
        <div className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] border-b border-gray-300"></div>
        <details
          ref={(el) =>
            (detailsRef.current["how-collaborate-with-scamshield"] = el)
          }
          open={isOpenMap["how-collaborate-with-scamshield"]}
          onToggle={(e) =>
            toggleDetails("how-collaborate-with-scamshield", e.target.open)
          }
          className="w-full "
          id="how-collaborate-with-scamshield"
        >
          <summary className="cursor-pointer px-4 py-6 font-bold list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="py-3 px-0 text-xl font-medium">
                {t("faq.question_5")}
              </span>
              <img
                className={"h-5 w-5"}
                src={
                  isOpenMap["how-collaborate-with-scamshield"]
                    ? arrowButtonDown
                    : arrowButtonRight
                }
              />
            </div>
          </summary>
          <div className="px-4 py-6 pt-0 mt-4 text-checkGrayModal space-y-4 text-base">
            <p>
              {t("faq.answer_5_1_1")}{" "}
              <a
                className="text-checkPrimary600 underline cursor-pointer"
                href="https://better.sg"
              >
                {t("faq.answer_5_1_bettersg")}.
              </a>
              {t("faq.answer_5_1_2")}{" "}
              <a
                className="text-checkPrimary600 underline cursor-pointer"
                href="https://www.scamshield.org.sg/"
              >
                {t("entity.scamshield")}
              </a>
              .
            </p>
            <p>
              {t("faq.answer_5_2_1")}{" "}
              <a
                className="text-checkPrimary600 underline cursor-pointer"
                href="https://scamshield.org.sg/"
              >
                {t("entity.scamshield")}
              </a>
              , {t("faq.answer_5_2_2")}{" "}
              <a
                className="text-checkPrimary600 underline cursor-pointer"
                href="https://scamshield.org.sg/"
              >
                {t("entity.scamshield")}
              </a>
              . {t("faq.answer_5_2_3")},{" "}
              <a
                className="text-checkPrimary600 underline cursor-pointer"
                href="https://scamshield.org.sg/"
              >
                {t("entity.scamshield")}
              </a>{" "}
              {t("faq.answer_5_2_4")}
            </p>
            <p>
              {t("faq.answer_5_3_1")}{" "}
              <a
                className="text-checkPrimary600 underline cursor-pointer"
                href="https://scamshield.org.sg/"
              >
                {t("entity.scamshield")}
              </a>
              , {t("faq.answer_5_3_2")}{" "}
            </p>
            <p>{t("faq.answer_5_4_1")} </p>
          </div>
        </details>
        <div className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] border-b border-gray-300"></div>
        <details
          ref={(el) => (detailsRef.current["what-is-scamshield"] = el)}
          open={isOpenMap["what-is-scamshield"]}
          onToggle={(e) => toggleDetails("what-is-scamshield", e.target.open)}
          className="w-full "
          id="what-is-scamshield"
        >
          <summary className="cursor-pointer px-4 py-6 font-bold list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="py-3 px-0 text-xl font-medium">
                {t("faq.question_6")} {t("entity.scamshield")}?
              </span>
              <img
                className={"h-5 w-5"}
                src={
                  isOpenMap["what-is-scamshield"]
                    ? arrowButtonDown
                    : arrowButtonRight
                }
              />
            </div>
          </summary>
          <div className="px-4 py-6 pt-0 mt-4 text-checkGrayModal space-y-4">
            <p>
              <a
                className="text-checkPrimary600 underline cursor-pointer"
                href="https://www.scamshield.org.sg/"
              >
                {t("entity.scamshield")}
              </a>{" "}
              {t("faq.answer_6_1")}
            </p>
          </div>
        </details>
        <div className="w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] border-b border-gray-300"></div>
        <details
          ref={(el) => (detailsRef.current["how-long-does-it-take"] = el)}
          open={isOpenMap["how-long-does-it-take"]}
          onToggle={(e) =>
            toggleDetails("how-long-does-it-take", e.target.open)
          }
          className="w-full "
          id="how-long-does-it-take"
        >
          <summary className="cursor-pointer px-4 py-6 font-bold list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="py-3 px-0 text-xl font-medium">
                {t("faq.question_7")}
              </span>
              <img
                className={"h-5 w-5"}
                src={
                  isOpenMap["how-long-does-it-take"]
                    ? arrowButtonDown
                    : arrowButtonRight
                }
              />
            </div>
          </summary>
          <div className="px-4 py-6 pt-0 mt-4 text-checkGrayModal space-y-4 text-base">
            <p>{t("faq.answer_7_1")} </p>
            <p>
              {t("faq.answer_7_2")}{" "}
              <a href="https://bit.ly/checkmate-feedback" className="underline">
                {t("faq.answer_7_2_link")}
              </a>
              .
            </p>
          </div>
        </details>
      </div>
    </div>
  );
};

export default Faq;
