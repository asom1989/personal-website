import ym from "../assets/Yarmouk_University_logo.png";
import Lexicon from "../assets/lexikon.png";
import kyh from "../assets/KYH.png";
import fängelse from "../assets/fängelsemuseum.png";
import lido from "../assets/Lido.png";
import brödBoden from "../assets/brödboden.jpg";

const eduData = [
  {
    id: 1,
    category: "education",
    img: ym,
    title: "Conservation and Management of Cultural Resources",
    univer: "yarmouk university",
    desc: " The department offers a bachelor's program in Conservation and Management of Cultural Resources, and three master's programs: the Management of Cultural Resources, the Conservation of Cultural Heritage and Archaeometry",
    moreLink: "https://archaeology.yu.edu.jo/index.php/bio-plan-2",
    year: "2007 - 2011",
  },
  {
    id: 2,
    category: "education",
    img: Lexicon,
    title: "IT-påbyggnadsutbildning",
    univer: "Lexicon Gävleborg",
    desc: " IT (Excel, GIT, Excel VBA,Access, Systemutveckling, Agila metoder, My SQL, C#, HTML/CSS och JavaScript)",
    moreLink: "https://www.lexicon.se/Utbildningar/IT/IT-anvandare/",
    year: "2021",
  },
  {
    id: 3,
    category: "education",
    img: kyh,
    title: "Front-end developer",
    univer: "KYH",
    desc: " IT (Excel, GIT, Excel VBA,Access, Systemutveckling, Agila metoder, My SQL, C#, HTML/CSS och JavaScript)",
    moreLink: "https://kyh.se/utbildningar/front-end-developer/anywhere/",
    year: "2023-2025",
  },

  {
    id: 4,
    category: "experience",
    img: fängelse,
    title: "",
    univer: "Fängelsemuseum",
    desc: " Jag arbetstränade i ett museum. Mina arbetsuppgifter var att vara värdskap, ta hand om utställningar, guidning och research",
    moreLink: "https://sverigesfangelsemuseum.se/om-museet/",
    year: 2020,
  },
  {
    id: 5,
    category: "experience",
    img: lido,
    title: "",
    univer: "Konditori Lido",
    desc: " Jag arbetade som en bagare, mina arbetsuppgifter bestod av att baka all sorts bröd och bullar. ",
    moreLink: "https://www.konditorilido.se/",
    year: 2018,
  },

  {
    id: 6,
    category: "experience",
    img: brödBoden,
    title: "",
    univer: "Brödboden Bagari",
    desc: "Jag arbetade som bagare och konditor. Mina arbetsuppgifter bestod av att baka all sorts bröd, bullar, tårtor och kondisbitar. ",
    moreLink: "https://marstacentrum.se/butik/brodboden/",
    year: "2014 - 2017",
  },
];
export default eduData;
