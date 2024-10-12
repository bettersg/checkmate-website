import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const scrollDelay = 100;

    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, scrollDelay);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      id="privacy-policy"
      className={`flex flex-col items-start font-workSans font-medium`}
    >
      <div className="xl:max-w-[1280px] mx-auto w-full flex flex-col items-start px-6 md:px-12 pt-10 md:pt-20 text-checkBlack">
        <h1 className="flex-1 font-bold text-[48px] md:text-[64px] font-poppins pb-6">
          Contact Us
        </h1>
        <div>
          <p className="gap-y-6 text-[16px] md:text-[20px] pb-6">
            If you're interested to join us as a volunteer fact-checker and help
            fight misinformation and scams, please sign up below, or write to us
            at{" "}
            <a
              href="mailto:checkmate@better.sg"
              className="underline text-checkPurple"
            >
              checkmate@better.sg
            </a>
          </p>

          <div className="w-full mx-auto max-w-[1280px] flex justify-center mb-2">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdHvf7wPEj7iQinHdQZPUk-7QJhtFPc-GSHlAbZ0C0hOP3jRQ/viewform?embedded=true&usp=pp_url&entry.879438036=checkmate.sg+website"
              width="640"
              height="800"
            >
              Loading…
            </iframe>
          </div>
        </div>

        <div>
          <p className="gap-y-6 text-[16px] md:text-[20px] pb-6">
            Additional, we value your feedback and welcome any opportunities for
            collaboration. Don't hesitate to reach out to us - we're excited to
            hear from you! You can also write to us at{" "}
            <a
              href="mailto:checkmate@better.sg"
              className="underline text-checkPurple"
            >
              checkmate@better.sg
            </a>
          </p>
          <div className="w-full mx-auto max-w-[1280px] flex justify-center mb-16">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScd3pL2uZ4CZOJpEj7QDE-zj35i4QrIKr0KUukSQjz5-v538A/viewform?embedded=true"
              width="640"
              height="640"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
