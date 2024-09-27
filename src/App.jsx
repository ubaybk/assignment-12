import MyCarousel from "./Components/CaseStudies/Carousel";
import CaseStudies from "./Components/CaseStudies";
import HeroSection from "./Components/HeroSection";
import LabelRuning from "./Components/LabelRuning";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import OurWorkingProcess from "./Components/OurWorkingProcess";
import Team from "./Components/Team";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import ContactUs from "./Components/ContactUs";

// Start Menu
const menu = [
  {
    aboutUs: "About Us",
    services: "Services",
    useCase: "Use Case",
    process: "Process",
    team: "Team",
    testimonials: "Testimonials",
    contactUs: "Contact Us",
  }
]
// End Menu 
// Start Data Hero Section
const heroSection = [
  {
    title: "Navigating the digital landscape for success",
    desc: "Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.",
    img: "./img/hero-section.png",
  },
];
// End Data Hero Section

// Start Running Logo
const runningLogo = [
  {
    running1: [
      "/img/companyLogo/1.png",
      "/img/companyLogo/2.png",
      "/img/companyLogo/3.png",
    ],
    running2: [
      "/img/companyLogo/4.png",
      "/img/companyLogo/5.png",
      "/img/companyLogo/6.png",
    ],
  },
];
// End Running Logo

// Start Services
const titleServices = [
  {
    title: "Services",
    desc: "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:",
  },
];
const services = [
  {
    subtitle1: "Search engine",
    subtitle2: "optimization",
    textBgColor: "bg-primary",
    color: "bg-secondary",
    img: "./img/services/1.png",
  },
  {
    subtitle1: "Pay-per-click",
    subtitle2: "advertising",
    textBgColor: "bg-white",
    color: "bg-primary",
    img: "./img/services/2.png",
  },
  {
    subtitle1: "Social Media",
    subtitle2: "Marketing",
    textBgColor: "bg-white",
    color: "bg-black",
    img: "./img/services/3.png",
    hover: "text-white"
  },
  {
    subtitle1: "Email",
    subtitle2: "Marketing",
    textBgColor: "bg-primary",
    color: "bg-secondary",
    img: "./img/services/4.png",
  },
  {
    subtitle1: "Content",
    subtitle2: "Creation",
    textBgColor: "bg-white",
    color: "bg-primary",
    img: "./img/services/5.png",
  },
  {
    subtitle1: "Analytics and",
    subtitle2: "Tracking",
    textBgColor: "bg-white",
    color: "bg-black",
    img: "./img/services/6.png",
    hover: "text-white"
  },
];
// End Services

// Start Case Studies
const caseStudies = [
  {
    titleCaseStudies: [
      {
        title: "Case Studies",
        desc: "Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies",
      },
    ],
    carousel: [
      {
        konten1:
          "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
        color: "bg-black",
      },
      {
        konten1:
          "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
        color: "bg-black",
      },
      {
        konten1:
          "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
        color: "bg-black",
      },
    ],
  },
];

const ourWorkingProcess = [
  {
    id: "01",
    title: "Consultation",
    desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    id: "02",
    title: "Research and Strategy Development",
    desc: "Our team will conduct thorough research on your target audience, industry, and competitors to",
  },
  {
    id: "03",
    title: "Implementation",
    desc: "Once the strategy is in place, our team will implement the agreed-upon tactics",
  },
  {
    id: "04",
    title: "Monitoring and Optimization",
    desc: "We will continuously monitor the performance of your marketing efforts and make data-driven decisions to",
  },
  {
    id: "05",
    title: "Reporting and Communication",
    desc: "Regular reporting and communication will be provided to ensure you are informed and up-to-date",
  },
  {
    id: "06",
    title: "Continual Improvement",
    desc: "Our team will continually assess and improve our services to ensure we are meeting your evolving",
  },
];

const team = [
  {
    titleTeam: [
      {
        title: "Team",
        desc: "Meet the skilled and experienced team behind our successful digital marketing strategies",
      },
    ],
    dataTeam: [
      {
        photo: "./img/team/1.png",
        name: "John Smith",
        position: "Founder & CEO",
        desc: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
      },
      {
        photo: "./img/team/2.png",
        name: "Jane Doe",
        position: "Director of Operations",
        desc: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
      },
      {
        photo: "./img/team/3.png",
        name: "Michael Brown",
        position: "Senior SEO Specialist",
        desc: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
      },
      {
        photo: "./img/team/4.png",
        name: "Emily Johnson",
        position: "PPC Manager",
        desc: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
      },
    ],
  },
];

const testimonials = [
  {
    titleTestimoni: [
      {
        title: "Testimonials",
        desc: "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services",
      },
    ],
    dataTestimoni: [
      {
        desc: "The team is professional, responsive, and truly cares about the success of our business.",
        name: "Bayu",
        position: "Manager",
      },
      {
        desc: "Our website traffic and lead generation have significantly improved thanks to their expertise.",
        name: "Rizal",
        position: "Staff Manager",
      },
    ],
  },
];

const address =[
  {
    email: "Email: info@positivus.com",
    phone: "Phone: +62 21 12345678",
    address: "Address: Jl. Raya Pasar Minggu, Jakarta Selatan"
  }
]

function App() {
  return (
    <>
      <div
        className="px-8 flex flex-col gap-10"
        style={{ scrollBehavior: "smooth" }}
      >
        <Navbar propsMenu={menu} />
        <HeroSection propsHeroSection={heroSection} />
        <LabelRuning propsRunning={runningLogo} />
        <section id="services">
          <Services
            propsServices={services}
            propsTitleServices={titleServices}
          />{" "}
        </section>
        <section id="caseStudies">
          <CaseStudies propsCaseStudies={caseStudies} />
        </section>
        <section id="ourWorkingProcess">
          <OurWorkingProcess propsOurWork={ourWorkingProcess} />
        </section>
        <section id="team">
          <Team propsTeam={team} />
        </section>
        <section id="testimonials">
          <Testimonials propsTestimoni={testimonials} />
        </section>
        <section id="contactUs">
          <ContactUs />
        </section>
      </div>
      <Footer propsFooter={menu} propsAddress={address} />
    </>
  );
}

export default App;
