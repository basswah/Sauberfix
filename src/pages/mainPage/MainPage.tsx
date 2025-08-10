import AboutUsMainPage from "./AboutUsMainPage/AboutUsMainPage";
import ContactUs from "./ContactUs/ContactUs";
import { Hero } from "./Hero/Hero";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import "./MainPage.css";

const MainPage = () => {
  return (
    <div>
      <Hero />
      <AboutUsMainPage />
      <WhatWeDo />
      <ContactUs />
    </div>
  );
};

export default MainPage;
