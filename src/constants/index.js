import { facebook, whatsapp, telegram, team01, team02, team03, team04, team05, team06, team08, team09, team10} from "../assets";

export const navLinks = [
  {
  id: "",
  title: "Home"
  },
  {
    id: "about",
    title: "About Us",
  },
  //{
  //  id: "message-database",
  //  title: "Message Database"
  //},
  {
    id: "privacy-policy",
    title: "Privacy Policy",
  },
  {
    id:"contact",
    title: "Contact Us"
  }
];


export const teamMembers = [
  {
    id: 1,
    name: "Bing Wen Tan",
    picture: team01,
    linkedin: 'https://www.linkedin.com/in/tbw89',
    title: "Founder"
  },
  {
    id: 2,
    name: "Carlos Leyva-Salas",
    picture: team04,
    linkedin: 'https://www.linkedin.com/in/leyvacarlos',
    title: "Head of Growth"
  },
  {
    id: 3,
    name: "Vincent Teyssier",
    picture: team03,
    linkedin: "https://www.linkedin.com/in/vincent-teyssier/",
    title: "CTO"
  },
  {
    id: 4,
    name: "Su Yuen Chin",
    picture: team04,
    linkedin: "https://www.linkedin.com/in/suyuen",
    title: "Advisor"
  },
  {
    id: 5,
    name: "Wendy Po",
    picture: team05,
    linkedin: "https://www.linkedin.com/in/wendypowl",
    title: "UX Team Lead"
  },
  {
    id: 6,
    name: "Tasha Tan",
    picture: team06,
    linkedin: "https://www.linkedin.com/in/tasha-tan-mx",
    title: "UX Designer"
  },
  {
    id: 7,
    name: "Amanda Goh",
    picture: team02,
    linkedin: "https://www.linkedin.com/in/amandagohyl",
    title: "New Gen AI"
  },
  {
    id: 8,
    name: "Elston",
    picture: team08,
    linkedin: "",
    title: ""
  },
  {
    id: 9,
    name: "Yong En",
    picture: team09,
    linkedin: "",
    title: ""
  },
  {
    id: 10,
    name: "Zhi Hong",
    picture: team10,
    linkedin: "",
    title: ""
  },
  {
    id: 11,
    name: "Claire Pan",
    picture: team09,
    linkedin: "",
    title: "UX Designer"
  },  
  {
    id: 12,
    name: "Qin",
    picture: team09,
    linkedin: "",
    title: "UX Designer"
  },  
  {
    id: 13,
    name: "Hui Wen Ow",
    picture: team09,
    linkedin: "",
    title: "Product Manager"
  },  
  {
    id: 14,
    name: "Velen",
    picture: team09,
    linkedin: "",
    title: "UX Designer"
  },  
]


export const socialMedia = [

  {
    id: "social-media-0",
    icon: facebook,
    link: "https://www.facebook.com/CheckMateFactcheck",
    text: "checkmatesg"
  },
  {
    id: "social-media-1",
    icon: telegram,
    link: "t.me/checkmatesg",
    text: "checkmatesg"
  },
  {
    id: "social-media-2",
    icon: whatsapp,
    link: "https://bit.ly/add-checkmate",
    text: "+65 8043 2188"
  }
];

{/**  { 
    id: "social-media-0",
    icon: youtube,
    link: "https://youtu.be/Nw0Q-kzDNxs"
  }, */}


export const categories = [
    { id: "checkbox-item-1", text: "illicit" },
    { id: "checkbox-item-2", text: "legitimate" },
    { id: "checkbox-item-3", text: "misinformation" },
    { id: "checkbox-item-4", text: "scam" },
    { id: "checkbox-item-5", text: "spam" },
    { id: "checkbox-item-6", text: "trivial" },
    { id: "checkbox-item-7", text: "unsure" },
  ];
  
export const statusValues = [
      {id: "status_all", text: "All"},
      {id: "status_reviewing", text: "Reviewing"},
      {id: "status_reviewed", text: "Reviewed"},
  ];
  
export const reportedValues = [
      {id: "reported_1", text: "1 - 5 Times", value: 1},
      {id: "reported_6", text: "6 - 10 Times", value: 6},
      {id: "reported_11", text: "11 - 20 Times", value: 11},
      {id: "reported_20", text: "> 20 Times", value: 20},
  ];


export const cards_content = [
    {
        index: 0,
        text: "Got a text message from “Alice the recruiter” at JobsDB?",
        buttonText: "Forward it in",
        link: "https://ref.checkmate.sg/add?utm_source=website&utm_medium=shufflecomponent",
        color: "#ff7557"
    },
    {
        index: 1,
        text: "Find out if the deal is Too Good To Be True.",
        buttonText: "Forward it to CheckMate",
        link: "https://ref.checkmate.sg/add?utm_source=website&utm_medium=shufflecomponent",
        color: "#ff5833"
    },
    {
        index: 2,
        text: "Came across a strange website claiming to be Singtel?",
        buttonText: "Forward us the URL",
        link: "https://ref.checkmate.sg/add?utm_source=website&utm_medium=shufflecomponent",
        color: "#ff431a"
    },
    {
        index: 3,
        text: "Received an image in group chats  claiming vaccines don't work?",
        buttonText: "Forward it in",
        link: "https://ref.checkmate.sg/add?utm_source=website&utm_medium=shufflecomponent",
        color: "#ff431a"
    },
    {
        index: 4,
        text: "Got an email saying your bank account has “security issues”?",
        buttonText: "Forward us a screenshot",
        link: "https://ref.checkmate.sg/add?utm_source=website&utm_medium=shufflecomponent",
        color: "#ff2e00"
    }
];

export const MESSAGE_DATABASE_API_ENDPOINT = "https://checkmate.sg/api/publicmessages";