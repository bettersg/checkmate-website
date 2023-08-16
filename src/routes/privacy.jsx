import React from "react"
import { arrowButtonRight, arrowButtonDown } from "../assets";
import { useRef } from 'react';

const Privacy = () => {

  const detailsRef = useRef({});
  const [isOpenMap, setIsOpenMap] = React.useState({});

  const toggleDetails = (questionNumber, isOpen) => {
    setIsOpenMap({ ...isOpenMap, [questionNumber]: isOpen });
  };

  return (
    <div id="privacy" className={`flex flex-col items-start font-poppins`}>
      
      <div className="xl:max-w-[1280px] mx-auto w-full flex flex-col items-start px-12 pt-20 text-checkBlack">
        <h1 className="flex-1 font-bold ss:text-[48px] text-[36px] ">
          Privacy Policy
        </h1>
        <p className="font-poppins text-md">Last Updated: February 2023</p>
      </div>
      
      <div className="flex flex-col gap-y-6 text-xl text-checkBlack xl:max-w-[1280px] w-full p-12 items-start mx-auto">
        <p className="">This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
          We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy and Whatsapp’s privacy policy: 
          <br/><a className="underline text-checkPrimary600" href="https://www.whatsapp.com/legal/privacy-policy/">https://www.whatsapp.com/legal/privacy-policy/</a>
        </p>

        <details
          ref={(el) => (detailsRef.current['toggle1'] = el)}
          open={isOpenMap['toggle1']}
          onToggle={(e) => toggleDetails('toggle1', e.target.open)}
          className="w-full bg-checkWhite border border-checkPrimary600 px-12 py-4 rounded-[32px]" id="toggle1"
        >
          <summary className="cursor-pointer px-4 py-6 list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="p-3 ss:text-[36px] text-checkPrimary600 text-[24px]">Interpretation and Definitions</span>
              <img
                className={"h-5 w-5 fill-checkPrimary600 text-checkPrimary600"}
                src={isOpenMap['toggle1'] ? arrowButtonDown : arrowButtonRight}
              />
            </div>
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 mt-4">
            <h2 className="flex-1 ss:text-[28px] text-[20px] pt-12 pb-4">Interpretation</h2>
            <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
            <h2 className="flex-1 ss:text-[28px] text-[20px] pt-8 pb-4">Definitions</h2>
            <p>For the purposes of this Privacy Policy:</p>
            <p><span className=" text-checkPrimary600">Account</span> means a unique account created for You to access our Service or parts of our Service.</p>
            <p><span className=" text-checkPrimary600">Affiliate</span> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>
            <p><span className=" text-checkPrimary600">Application</span> refers to the CheckMate bot, the whatsapp bot as provided by the Organisation.</p>
            <p><span className=" text-checkPrimary600">Organisation</span> (referred to as either “<span className="underline">Better.sg</span>”, "the Organisation", "We", "Us" or "Our" in this Agreement) refers to <span className="underline">BETTER.SG</span> LIMITED, 258F LORONG CHUAN, BOUNDARY GARDENS, 556755.</p>
            <p><span className=" text-checkPrimary600">Country</span> refers to The Republic of Singapore</p>
            <p><span className=" text-checkPrimary600">Device</span> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>
            <p><span className=" text-checkPrimary600">Personal Data</span> is any information that relates to an identified or identifiable individual.</p>
            <p><span className=" text-checkPrimary600">Service</span> refers to the Application.</p>
            <p><span className=" text-checkPrimary600">Service Provider</span> means any natural or legal person who processes the data on behalf of the Organisation. It refers to third-party companies or individuals employed by the Organisation or volunteers to the Organisation to facilitate the Service, to provide the Service on behalf of the Organisation, to perform services related to the Service or to assist the Organisation in analyzing how the Service is used.</p>
            <p><span className=" text-checkPrimary600">Third-party Social Media Service</span> refers to any website or any social network website through which a User can log in or create an account to use the Service, for example Whatsapp.</p>
            <p><span className=" text-checkPrimary600">Usage Data</span> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>
            <p><span className=" text-checkPrimary600">You</span> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>            
          </p>
        </details>

        <details
          ref={(el) => (detailsRef.current['toggle2'] = el)}
          open={isOpenMap['toggle2']}
          onToggle={(e) => toggleDetails('toggle2', e.target.open)}
          className="w-full bg-checkWhite border border-checkPrimary600 px-12 py-4 rounded-[32px]" id="toggle2"
        >
          <summary className="cursor-pointer px-4 py-6 list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="p-3 ss:text-[36px] text-checkPrimary600 text-[24px]">Collecting and Using Your Personal Data</span>
              <img
                className={"h-5 w-5 fill-checkPrimary600 text-checkPrimary600"}
                src={isOpenMap['toggle2'] ? arrowButtonDown : arrowButtonRight}
              />
            </div>
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 mt-4">
            <h2 className="flex-1  ss:text-[36px] text-[24px]  pt-8">Types of Data Collected</h2>
            <h3 className="flex-1  ss:text-[24px] text-[18px]  pt-8">Personal Data</h3>
            <div>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
              <ul className="list-disc pl-8 pt-2">
                <li>Your Phone number</li>
                <li>Your Usage Data</li>
                <li>Messages sent to CheckMate’s bot</li>
                <li>Messages Forwarded to CheckMate’s bot</li>
                <li>Whatsapp’s publicly available account information</li>
              </ul>
            </div>
            <h3 className="flex-1  ss:text-[24px] text-[18px]  pt-8">Usage Data</h3>
            <p>Usage Data is collected automatically when using the Service.</p>
            <p>Usage Data will include data shared in interactions with the CheckMate Bot phone number, like exchanged or forwarded messages.</p>
            <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
            <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
            <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
            <h3 className="flex-1  ss:text-[24px] text-[18px]  pt-8">Information from Third-Party Social Media Services</h3>
            <div>The Organisation allows You to engage and use the Service through the following Third-party Social Media Services:<br/>
              <ul className="list-disc	pl-8"><li>Whatsapp</li></ul>
            </div>
            <p>If You decide to register through or otherwise grant us access to a Third-Party Social Media Service , We may collect Personal data that is already associated with Your Third-Party Social Media Service's account that is publicly available, such as Your name, Phone Number, or Your activities associated with that account.</p>
            <p>You may also have the option of sharing additional information with the Organisation through Your Third-Party Social Media Service's account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Organisation permission to use, share, and store it in a manner consistent with this Privacy Policy.</p>
            <h2 className="flex-1  ss:text-[28px] text-[20px] pt-8 pb-6">Use of Your Personal Data</h2>
            <p>The Organisation may use Personal Data for the following purposes:</p>
            <p><span className=" text-checkPrimary600">To provide and maintain our Service</span>, including to monitor the usage of our Service or messages forwarded or replied to the CheckMate bot for the purposes of providing our Service.</p>
            <p><span className=" text-checkPrimary600">To manage Your Account</span>: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>
            <p><span className=" text-checkPrimary600">For the performance of a contract</span>: the development, compliance and undertaking of the provision of the services, items or services You have purchased or of any other contract with Us through the Service.</p>
            <p><span className=" text-checkPrimary600">To contact You</span>: To contact You by telephone calls, SMS, or other equivalent forms of electronic communication, such as a messaging you via Whatsapp or the Social Media services you have engaged with us regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>
            <p><span className=" text-checkPrimary600">To provide You with news</span>, special offers and general information about other goods, services and events which we offer that are similar to those that you have already engaged with or enquired about unless You have opted not to receive such information.</p>
            <p><span className=" text-checkPrimary600">To manage Your requests</span>: To attend and manage Your requests to Us.</p>
            <p><span className=" text-checkPrimary600">For security purposes</span>: For security purposes or as per request of law enforcement agencies we may share data such as messages sent or forwarded to the CheckMate with government led organisations for the purpose of avoiding harmful messages reaching other users or for the purposes of investigations.</p>
            <p><span className=" text-checkPrimary600">For other purposes</span>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>
            <div>We may share Your personal information in the following situations:<br/>
              <ul className="list-disc	pl-8 flex flex-col gap-y-2">
                <li><span className=" text-checkPrimary600">With Service Providers</span>: We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
                <li><span className=" text-checkPrimary600">For business transfers</span>: We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Organisation assets, financing, or acquisition of all or a portion of Our business to another company.</li>
                <li><span className=" text-checkPrimary600">With Affiliates</span>: We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
                <li><span className=" text-checkPrimary600">With business partners</span>: We may share Your information with Our business partners to offer You certain products or services.</li>
                <li><span className=" text-checkPrimary600">With other users</span>: when You share messages with the CheckMate bot we will be sharing these messages with volunteers, other members of Our Organisation or other users of Whatsapp in order to provide you with the Service and determine whether these messages are harmful to you. Remember that if You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.</li>
                <li><span className=" text-checkPrimary600">With Your consent</span>: We may disclose Your personal information for any other purpose with Your consent.</li>
              </ul>
            </div>
            <h2 className="flex-1  ss:text-[28px] text-[20px]  pt-8 pb-6">Retention of Your Personal Data</h2>
            <p>The Organisation will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
            <p>The Organisation will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
            <h2 className="flex-1  ss:text-[28px] text-[20px]  pt-8 pb-6">Transfer of Your Personal Data</h2>
            <p>Your information, including Personal Data, is processed at the Organisation's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
            <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
            <p>The Organisation will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization, company, or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
            <h2 className="flex-1  ss:text-[28px] text-[20px]  pt-8 pb-6">Delete Your Personal Data</h2>
            <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
            <p>Our Service may give You the ability to delete certain information about You from within the Service.</p>
            <p>You may update, amend, or delete Your information at any time by contacting Us to request access to, correct, or delete any personal information that You have provided to Us.</p>
            <p>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>
            <h2 className="flex-1  ss:text-[28px] text-[20px]  pt-8 pb-6">Disclosure of Your Personal Data</h2>
            <h3 className="flex-1  ss:text-[24px] text-[18px]  pt-8 pb-6">Business Transactions</h3>
            <p>If the Organisation is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
            <h3 className="flex-1  ss:text-[24px] text-[18px]  pt-8 pb-6">Law enforcement</h3>
            <p>Under certain circumstances, the Organisation may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
            <h3 className="flex-1  ss:text-[24px] text-[18px]  pt-8 pb-6">Other legal requirements</h3>
            <p>The Organisation may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
            <ul className="list-disc	pl-8">
              <li>Comply with a legal obligation</li>  
              <li>Protect and defend the rights or property of the Organisation</li>
              <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
              <li>Protect the personal safety of Users of the Service or the public</li>
              <li>Protect against legal liability</li>
            </ul>
            <h2 className="flex-1  ss:text-[28px] text-[20px]  pt-8 pb-6">Security of Your Personal Data</h2>
            <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>  
          </p>
        </details>

        <details
          ref={(el) => (detailsRef.current['toggle3'] = el)}
          open={isOpenMap['toggle3']}
          onToggle={(e) => toggleDetails('toggle3', e.target.open)}
          className="w-full bg-checkWhite border border-checkPrimary600 px-12 py-4 rounded-[32px]" id="toggle3"
        >
          <summary className="cursor-pointer px-4 py-6 list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="p-3 ss:text-[36px] text-checkPrimary600 text-[24px]">Children's Privacy</span>
              <img
                className={"h-5 w-5 fill-checkPrimary600 text-checkPrimary600"}
                src={isOpenMap['toggle3'] ? arrowButtonDown : arrowButtonRight}
              />
            </div>
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 mt-4">
            <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
            <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>
          </p>
        </details>
        
        <details
          ref={(el) => (detailsRef.current['toggle4'] = el)}
          open={isOpenMap['toggle4']}
          onToggle={(e) => toggleDetails('toggle4', e.target.open)}
          className="w-full bg-checkWhite border border-checkPrimary600 px-12 py-4 rounded-[32px]" id="toggle4"
        >
          <summary className="cursor-pointer px-4 py-6 list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="p-3 ss:text-[36px] text-checkPrimary600 text-[24px]">Links to Other Websites</span>
              <img
                className={"h-5 w-5 fill-checkPrimary600 text-checkPrimary600"}
                src={isOpenMap['toggle4'] ? arrowButtonDown : arrowButtonRight}
              />
            </div>
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 mt-4">
            <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
            <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
          </p>
        </details>

        <details
          ref={(el) => (detailsRef.current['toggle5'] = el)}
          open={isOpenMap['toggle5']}
          onToggle={(e) => toggleDetails('toggle5', e.target.open)}
          className="w-full bg-checkWhite border border-checkPrimary600 px-12 py-4 rounded-[32px]" id="toggle5"
        >
          <summary className="cursor-pointer px-4 py-6 list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="p-3 ss:text-[36px] text-checkPrimary600 text-[24px]">Changes to this Privacy Policy</span>
              <img
                className={"h-5 w-5 fill-checkPrimary600 text-checkPrimary600"}
                src={isOpenMap['toggle5'] ? arrowButtonDown : arrowButtonRight}
              />
            </div>
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 mt-4">
            <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
            <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>
            <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
          </p>
        </details>

        <details
          ref={(el) => (detailsRef.current['toggle6'] = el)}
          open={isOpenMap['toggle6']}
          onToggle={(e) => toggleDetails('toggle6', e.target.open)}
          className="w-full bg-checkWhite border border-checkPrimary600 px-12 py-4 rounded-[32px]" id="toggle6"
        >
          <summary className="cursor-pointer px-4 py-6 list-none">
            <div className="flex flex-row justify-between items-center">
              <span className="p-3 ss:text-[36px] text-checkPrimary600 text-[24px]">Contact Us</span>
              <img
                className={"h-5 w-5 fill-checkPrimary600 text-checkPrimary600"}
                src={isOpenMap['toggle6'] ? arrowButtonDown : arrowButtonRight}
              />
            </div>
          </summary>
          <p className="px-4 py-6 pt-0 ml-4 mt-4">
            <p>If you have any questions about this Privacy Policy, You can contact us:</p>
            <ul><li>By email: <a className="underline text-checkPrimary600" href="mailto:checkmate@better.sg">checkmate@better.sg</a></li></ul>
          </p>
        </details>

      </div>

    </div>
  );
};

export default Privacy;
