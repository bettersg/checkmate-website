import React from "react"
import styles from "../style";
import { faqIcon, qrFc, arrowButtonRight, arrowButtonUp } from "../assets";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef } from 'react';

const FAQ = () => {

  const navigate = useNavigate();
  const detailsRef = useRef({});
  const location = useLocation();
  const [isOpenMap, setIsOpenMap] = React.useState({});
  const [isOpen, setIsOpen] = React.useState({});

  const toggleDetails = (questionNumber, isOpen) => {
    setIsOpenMap({ ...isOpenMap, [questionNumber]: isOpen });
    if (isOpen) {
      navigate(`/faq#${questionNumber}`);
    }
  };

  useEffect(() => {
    // Get the fragment from the current URL
    const fragment = location.hash;

    // If a fragment exists, try to open the corresponding details element
    if (fragment) {
      const questionNumber = fragment.substr(1);
      const details = detailsRef.current[questionNumber];
      if (details) {
        details.open = true;
      }
    }
  }, [location]);

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
        <details
          ref={(el) => (detailsRef.current['is-checkmate-free-to-us'] = el)}
          open={isOpen['is-checkmate-free-to-us']}
          onToggle={(e) => toggleDetails('is-checkmate-free-to-us', e.target.open)}
          className="w-full ring-1 ring-checkGray" id="is-checkmate-free-to-us"
        >
          <summary className="cursor-pointer px-4 py-6 font-bold list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="p-3">Is CheckMate free to use?</span>
              <img
                className={isOpen['is-checkmate-free-to-us'] ? "bg-checkPurple rounded-full p-3 mr-4" : "bg-checkWhite rounded-full p-3 shadow-md border-checkGray border mr-4"}
                src={isOpen['is-checkmate-free-to-us'] ? arrowButtonUp : arrowButtonRight}
              />
            </div>
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
            <span className="font-bold">Absolutely!</span> CheckMate is free to use and free for life.
          </p>
        </details>
        <details
          ref={(el) => (detailsRef.current['how-does-checkmate-work'] = el)}
          open={isOpen['how-does-checkmate-work']}
          onToggle={(e) => toggleDetails('how-does-checkmate-work', e.target.open)}
          className="w-full ring-1 ring-checkGray" id="how-does-checkmate-work"
        >
          <summary className="cursor-pointer px-4 py-6 font-bold list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="p-3">How does CheckMate work?</span>
              <img
                className={isOpen['how-does-checkmate-work'] ? "bg-checkPurple rounded-full p-3 mr-4" : "bg-checkWhite rounded-full p-3 shadow-md border-checkGray border mr-4"}
                src={isOpen['how-does-checkmate-work'] ? arrowButtonUp : arrowButtonRight}
              />
            </div>
          </summary>
          <div className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 flex flex-col gap-y-2">
            <p>When you send a message to CheckMate for checking, the following happens:</p>
            <h3 className="font-bold underline">Matching</h3>
            <p>We check if this message has been received before, after ignoring any phone numbers mentioned in the message</p>
            <h3 className="font-bold underline">If there is a match</h3>
            <p>CheckMate will reply based on the previously-voted classification of the message (see section on Voting Options below)</p>
            <h3 className="font-bold underline">If there is no match</h3>
            <p>Our CheckMates will be triggered to vote on your message. CheckMates will vote as such:</p>
            <h3 className="font-bold underline">Voting Options</h3>
            <p>First, CheckMates decide if the message comes under either of these categories</p>
            <ol className="list-decimal	pl-6 pb-2">
              <li>Scams (Messages intended to obtain money/personal information via deception)</li>
              <li>Suspicious Activity (Messages representing potential illicit activity, e.g. moneylending/prostitution)</li>
              <li>News/Information/Opinion (Messages intended to inform/convince a broad base of people)</li>
              <li>Spam (Unsolicited spam, such as marketing messages)</li>
              <li>Trivial (Trivial/banal messages with nothing to assess)</li>
              <li>Legitimate (Message has a legitimate source but doesn't contain claims that can be assessed, e.g. transactional messages)</li>
              <li>Unsure (Our checkers are unsure how to categorise this message)</li>
            </ol>
            <p>If a CheckMate decide that the message falls under the third category (“News/Information/Opinion”), they then choose a number from 0-5 to reflect how true they think the message is.</p>
            <h3 className="font-bold underline">How Voting Determines the Outcome</h3>
            <p>Every time a vote comes in, the system does the following:</p>
            <ol className="list-decimal pl-6">
              <li>If more than 50% of all votes cast so far are on any one category, it is assigned that category</li>
              <li>If the votes on scams and suspicious activity combined are greater than 50%, we assign it whichever of the two categories has more votes</li>
              <li>If none of these thresholds are exceeded, that means there is little agreement among checkers. It is automatically categorised as "unsure"</li>
              <li>Determine whether message should be considered assessed. There are three different thresholds for this
                <ol className="list-alpha pl-6">
                  <li>If the message has been categorised either as scam or as suspicious, it is considered assessed if <strong>&gt;20%</strong> of CheckMates have voted. This lower threshold is because:
                    <ol className="list-roman pl-6">
                      <li>It enables a fast response to counter scams</li>
                      <li>Scams are relative easy to assess, so we're more confident in our CheckMates getting this assessment right</li>
                    </ol>
                  </li>
                  <li>If our CheckMates are unsure of the message, we only consider it assessed if <strong>&gt;80%</strong> of CheckMates have voted. This high threshold is because we want to give our checkers more time to reach a consensus.</li>
                  <li>Otherwise the message is considered assessed if <strong>&gt;50%</strong> of fact checkers have voted. This threshold is higher than scams because
                    <ol className="list-roman pl-6">
                      <li>While the other categories can also be problematic, it's less urgent</li>
                      <li>Misinformation is typically more subjective. Gathering more votes allows us to be more confident of the final outcome.</li>
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
          </div>
        </details>
        <details
          ref={(el) => (detailsRef.current['become-a-fact-checker'] = el)}
          open={isOpen['become-a-fact-checker']}
          onToggle={(e) => toggleDetails('become-a-fact-checker', e.target.open)}
          className="w-full ring-1 ring-checkGray" id="become-a-fact-checker"
        >
          <summary className="cursor-pointer px-4 py-6 font-bold list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="p-3">How can I help and become a fact-checker?</span>
              <img
                className={isOpen['become-a-fact-checker'] ? "bg-checkPurple rounded-full p-3 mr-4" : "bg-checkWhite rounded-full p-3 shadow-md border-checkGray border mr-4"}
                src={isOpen['become-a-fact-checker'] ? arrowButtonUp : arrowButtonRight}
              />
            </div>
          </summary>
          <div className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 flex flex-col gap-y-4">
            <p>We're glad to hear that you're interested in helping to combat fake news and scams! </p>
            <p>To get started, please reach out to us @ <a href="mailto:checkmate@better.sg" className="underline text-checkPurple">checkmate@better.sg</a> </p>
            {/** hidden for now <img src={qrFc} className="self-center" />
            <span className="self-center">QR Code to CheckMate's fact-checker bot</span>*/}
          </div>
        </details>

        <details
          ref={(el) => (detailsRef.current['what-data-collected'] = el)}
          open={isOpen['what-data-collected']} onToggle={(e) => toggleDetails('what-data-collected', e.target.open)}
          className="w-full ring-1 ring-checkGray" id="what-data-collected"
        >
          <summary className="cursor-pointer px-4 py-6 font-bold list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="p-3">What kind of data can CheckMate see and collect from me?</span>
              <img
                className={isOpen['what-data-collected'] ? "bg-checkPurple rounded-full p-3 mr-4" : "bg-checkWhite rounded-full p-3 shadow-md border-checkGray border mr-4"}
                src={isOpen['what-data-collected'] ? arrowButtonUp : arrowButtonRight}
              />
            </div>
          </summary>
          <div className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
            <p>Messaging the CheckMate bot is like messaging someone in Whatsapp. CheckMate will only receive <span className="underline font-bold">your number</span> and the <span className="underline font-bold">message you are sending</span>.</p>
            <p>For more information, you can view our <Link to="privacy-policy" className="font-bold text-checkPurple underline">Privacy Policy</Link>.</p>
          </div>
        </details>

        <details
          ref={(el) => (detailsRef.current['how-collaborate-with-scamshield'] = el)}
          open={isOpen['how-collaborate-with-scamshield']}
          onToggle={(e) => toggleDetails('how-collaborate-with-scamshield', e.target.open)}
          className="w-full ring-1 ring-checkGray" id="how-collaborate-with-scamshield"
        >
          <summary className="cursor-pointer px-4 py-6 font-bold list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="p-3">How does CheckMate collaborate with ScamShield?</span>
              <img
                className={isOpen['how-collaborate-with-scamshield'] ? "bg-checkPurple rounded-full p-3 mr-4" : "bg-checkWhite rounded-full p-3 shadow-md border-checkGray border mr-4"}
                src={isOpen['how-collaborate-with-scamshield'] ? arrowButtonUp : arrowButtonRight}
              />
            </div>
          </summary>
          <div className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 space-y-4">
            <p>CheckMate is an independent, non-government initiative by the non-profit organization <a href="https://better.sg">better.sg</a>. We understand that combatting scams and dubious messages requires a collaborative approach to safeguard everyone. That's why we've currently exploring a partnership with <a href="https://www.scamshield.org.sg/">ScamShield</a>.</p>
            <p>Once we have linked up with ScamShield, when you send in a message, and our CheckMates identify it as a scam, we will ask for your consent to share that specific message anonymously with ScamShield. If you agree, ScamShield will include the message in the national scams database in order to help fight scams in Singapore.</p>
            <p>Your consent is sought for each individual message. You may choose to share some messages with ScamShield, while deciding not to share others. We will seek your consent for every message separately.</p>
            <p>As for your privacy, rest assured that no other information CheckMate has access to will be shared. Your phone number and identity will remain anonymous.</p>
          </div>
        </details>

        <details
          ref={(el) => (detailsRef.current['what-is-scamshield'] = el)}
          open={isOpen['what-is-scamshield']}
          onToggle={(e) => toggleDetails('what-is-scamshield', e.target.open)}
          className="w-full ring-1 ring-checkGray" id="what-is-scamshield"
        >
          <summary className="cursor-pointer px-4 py-6 font-bold list-none">
            <Link to="/faq#what-is-scamshield">
              <div className="flex flex-row justify-between items-center">
                <span className="p-3">What is ScamShield?</span>
                <img
                  className={isOpen['what-is-scamshield'] ? "bg-checkPurple rounded-full p-3 mr-4" : "bg-checkWhite rounded-full p-3 shadow-md border-checkGray border mr-4"}
                  src={isOpen['what-is-scamshield'] ? arrowButtonUp : arrowButtonRight}
                />
              </div>
            </Link>
          </summary>
          <div className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 space-y-4">
            <p><a href="https://www.scamshield.org.sg/">ScamShield</a> is an anti-scam product developed by the National Crime Prevention Council and Open Government Products.</p>
          </div>
        </details>
      </div>

    </div>
  );
};

export default FAQ;
