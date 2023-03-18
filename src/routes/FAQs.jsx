import React from "react"
import styles from "../style";
import { faqIcon, qrFc, arrowButtonRight, arrowButtonUp } from "../assets";

const FAQ = () => {
  const [isOpenQ1, setIsOpenQ1] = React.useState(false); 
  const [isOpenQ2, setIsOpenQ2] = React.useState(false); 
  const [isOpenQ3, setIsOpenQ3] = React.useState(false); 
  const [isOpenQ4, setIsOpenQ4] = React.useState(false); 
  const [isOpenQ5, setIsOpenQ5] = React.useState(false); 

  return (
    <div id="faq" className={`flex flex-col items-center`}>
      <div className="bg-checkPurple text-checkWhite w-full flex flex-col items-start px-12 py-8">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[48px] text-[36px] text-center">
        Frequently Asked Questions
        </h1>
      </div>

      <div className="bg-checkWhite flex flex-col items-center pt-20 pb-12">
        <img src={faqIcon} />
      </div>

      <div className="flex flex-col space-y-6 px-12 pb-24 font-poppins xl:max-w-[1280px] w-full items-center">
        <details open={isOpenQ1} onToggle={() => setIsOpenQ1(!isOpenQ1)} className="w-full ring-1 ring-checkGray">
            <summary className="cursor-pointer px-4 py-6 font-bold list-none">
              <div className="flex flex-row justify-between items-center">
                <span className="p-3">Is CheckMate free to use?</span>
                <img 
                  className={isOpenQ1 ? "bg-checkPurple rounded-full p-3 mr-4" : "bg-checkWhite rounded-full p-3 shadow-md border-checkGray border mr-4"} 
                  src={isOpenQ1 ? arrowButtonUp : arrowButtonRight} 
                />
              </div>
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
              <span className="font-bold">Absolutely!</span> CheckMate is free to use and free for life.
            </p>
        </details>
        <details open={isOpenQ2} onToggle={() => setIsOpenQ2(!isOpenQ2)} className="w-full ring-1 ring-checkGray">
            <summary className="cursor-pointer px-4 py-6 font-bold list-none">
              <div className="flex flex-row justify-between items-center">
                <span className="p-3">How does CheckMate works?</span>
                <img 
                  className={isOpenQ2 ? "bg-checkPurple rounded-full p-3 mr-4" : "bg-checkWhite rounded-full p-3 shadow-md border-checkGray border mr-4"} 
                  src={isOpenQ2 ? arrowButtonUp : arrowButtonRight} 
                />
              </div>
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 flex flex-col gap-y-2">
              <p>When you send a message to CheckMate for checking, the following happens:</p>
              <h3 className="font-bold underline">Matching</h3>
              <p>First, we match your message against existing messages in our database, to see if there is a match. We consider matches after stripping away phone numbers from the messages.</p>
              <h3 className="font-bold underline">If there is a match</h3>
              <p>CheckMate will issue a reply based on the classification of the message as determined collectively by our CheckMates through voting (see below).</p>
              <h3 className="font-bold underline">If there is no match</h3>
              <p>Our CheckMates will be triggered to vote on your message. CheckMates will vote as such:</p>
              <h3 className="font-bold underline">Voting Options</h3>
              <p>First, our CheckMates decide if the message comes under either of these categories</p>
              <ol className="list-decimal	pl-6 pb-2">
                <li>Scams</li>
                <li>Suspicious Activity</li>
                <li>Misinformation/Others</li>
              </ol>
              <p>If a CheckMate decide that the message falls under the third category (“Misinformation/Others”), they are asked to choose a number from 0-5 to reflect how true they think the message is. They also have the option to tag the message as irrelevant.</p>
              <h3 className="font-bold underline">How Voting Determines the Outcome</h3>
              <p>Every time a vote comes in, the system does the following:</p>
              <ol className="list-decimal pl-6">
                <li>Tags the message as scam (if <strong>70%</strong> of all votes cast thus far are from either the scam or suspicious category, and votes for the scam category outnumber those from the suspicious category)</li>
                <li>Tags the message as suspicious (if <strong>70%</strong> of all votes cast thus far are from either the scam or suspicious category, and votes for the suspicious category outnumber those from the scam category)</li>
                <li>Tags the message as irrelevant (currently tagged as such if <strong>50%</strong> of all votes cast thus far are from this category)</li>
                <li>Determine whether message should be considered assessed. There are two thresholds for this
                  <ol className="list-alpha pl-6"> 
                    <li>If the message has been tagged either as scam or as suspicious, it is considered assessed if <strong>&gt;20%</strong> of CheckMates have voted. This lower threshold is because:
                        <ol className="list-roman pl-6">
                          <li>It’s important to provide a fast response in such cases, which could be urgent.</li>
                          <li>We’re more confident in our CheckMates getting this assessment right</li>
                        </ol>
                    </li>
                    <li>Otherwise the, message is considered assessed if <strong>&gt;50%</strong> of fact checkers have voted. This higher threshold is because
                      <ol className="list-roman pl-6">
                        <li>While misinformation can also be problematic, it’s less urgent</li>
                        <li>Misinformation is typically more subjective to assess. Thus, we want to gather more votes before replying to be more confident of the final outcome.</li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>Once the message is determined to be assessed, two things happen
                  <ol className="list-alpha pl-6">
                    <li>All users that have sent in this message and have not received a reply, will receive a reply based on its tag, or the mean truth score given by our CheckMates, (if message is neither tagged as scam, suspicious, or irrelevant).</li>
                    <li>From now on, users who send in this message will receive an immediate reply based on the prevailing tag / mean truth score of the message. </li>
                  </ol>                
                </li>
              </ol>
            </p>
        </details>
        <details open={isOpenQ3} onToggle={() => setIsOpenQ3(!isOpenQ3)} className="w-full ring-1 ring-checkGray">
            <summary className="cursor-pointer px-4 py-6 font-bold list-none">
              <div className="flex flex-row justify-between items-center">
                <span className="p-3">How can I help and become a fact-checker?</span>
                <img 
                  className={isOpenQ3 ? "bg-checkPurple rounded-full p-3 mr-4" : "bg-checkWhite rounded-full p-3 shadow-md border-checkGray border mr-4"} 
                  src={isOpenQ3 ? arrowButtonUp : arrowButtonRight} 
                />
              </div>
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 flex flex-col gap-y-4">
              <p>We're glad to hear that you're interested in helping to combat fake news and scams! </p>
              <p>To get started, you can scan the QR code (as shown below) and follow the onboard instructions provided by our CheckMate bot. The bot will guide you through the process of becoming a fact-checker. </p>
              <p>We appreciate you helping us in this effort and look forward to working with you.</p>
              <img src={qrFc} className="self-center" />
              <span className="self-center">QR Code to CheckMate’s fact-checker bot</span>
            </p>
        </details>
        <details open={isOpenQ4} onToggle={() => setIsOpenQ4(!isOpenQ4)} className="w-full ring-1 ring-checkGray">
            <summary className="cursor-pointer px-4 py-6 font-bold list-none">
              <div className="flex flex-row justify-between items-center">
                <span className="p-3">What kind of data can CheckMate sees and collect from me?</span>
                <img 
                  className={isOpenQ4 ? "bg-checkPurple rounded-full p-3 mr-4" : "bg-checkWhite rounded-full p-3 shadow-md border-checkGray border mr-4"} 
                  src={isOpenQ4 ? arrowButtonUp : arrowButtonRight} 
                />
              </div>
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
              <p>CheckMate is like messaging someone in Whatsapp. It can only see <span className="underline font-bold">your number</span> and the <span className="underline font-bold">messages you have shared with it</span>, including any other publicly available information.</p>
              <p>For more information you can see our Privacy Policy.</p>
            </p>
        </details>
        <details open={isOpenQ5} onToggle={() => setIsOpenQ5(!isOpenQ5)} className="w-full ring-1 ring-checkGray">
          <summary className="cursor-pointer px-4 py-6 font-bold list-none">
            <div className="flex flex-row justify-between items-center">
                <span className="p-3">How does CheckMate collaborates with ScamShield?</span>
                <img 
                  className={isOpenQ5 ? "bg-checkPurple rounded-full p-3 mr-4" : "bg-checkWhite rounded-full p-3 shadow-md border-checkGray border mr-4"} 
                  src={isOpenQ5 ? arrowButtonUp : arrowButtonRight} 
                />
              </div>
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 space-y-4">
            <p>CheckMate is an independent and non-government initiative by the non-for-profit <u>better.sg</u>. Yet we recognise that fighting scams and dubious messages requires a team effort to protect everyone, this is why we partner with Scam Shield.</p>
            <p>You will notice that we ask for your consent whenever our CheckMates have identified a message that is a scam. When you provide your consent for <u>that specific message</u>, this message will be shared anonymously with them then. ScamShield includes the messages in the national scams database in order to help fight scams in Singapore.</p>
            <p>Your consent is provided <u>per individual message</u>, some messages you may want to share with ScamShield, but some others you may decide not to. We will seek for your consent for every message separately.</p>
            <p>What about other information? No other information that CheckMate has access to will be shared (your phone number will remain anonymous).</p>
          </p>
      </details>
    </div>

    </div>
  );
};

export default FAQ;
