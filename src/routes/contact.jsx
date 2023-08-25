import React from "react"

const Contact = () => {

  return (
    <div id="privacy-policy" className={`flex flex-col items-start font-poppins`}>
      
      <div className="xl:max-w-[1280px] mx-auto w-full flex flex-col items-start px-12 text-checkBlack">
        <h1 className="flex-1 font-bold ss:text-[64px] text-[48px] ">
          Contact Us
        </h1>
      </div>
      
      <div className="flex flex-col gap-y-6 text-xl text-checkBlack xl:max-w-[1280px] w-full p-12 items-start mx-auto">
        <p className="">We value your feedback and welcome opportunities for collaboration. Don't hesitate to reach out to us - we're excited to hear from you! You can also write to us at checkmate@better.sg.</p>
      </div>
      <div className="w-full mx-auto max-w-[1280px] flex justify-center h-[100vh]">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScd3pL2uZ4CZOJpEj7QDE-zj35i4QrIKr0KUukSQjz5-v538A/viewform?embedded=true" width="640" height="500" >Loading…</iframe>
      </div>
    </div>
  );
};

export default Contact;
