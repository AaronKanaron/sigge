import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../components/molecules/topbar";
import Footer from "../components/molecules/footer";
import "./index.scss"
import ContactLink from "../components/atoms/contact-link";
import Cube from "../components/atoms/cube";


const Index = () => {
  return (
    <div className="App">
      <Topbar />
      <section className="section hero">
        <div className="links">
          <h1>SCROLL</h1>
          <span>or contact me on</span>
          <ul className="contact-list">
            <ContactLink link="/soundcloud" text="Soundcloud"/>
            <ContactLink link="/instagram" text="Instagram"/>
            {/* <ContactLink link="/twitter" text="Twitter"/> */}
            <ContactLink link="/email" text="Email"/>
            <ContactLink link="/linkin" text="Linkdin"/>
            
          </ul>
        </div>
        {/* <h1>yello</h1> */}
        <div className="logo-wrapper">
          {/* <h1>jello</h1> */}
          <Cube />
          {/* <img className="logo" src={process.env.PUBLIC_URL + "/logo-dot-trans.png"} alt="logo" /> */}
        </div>
      </section>
      <section className="section music">

      </section>
      <section className="section music">

      </section>
      <section className="section music">

      </section>
      <section className="section music">

      </section>
      <Footer />
      {/* <Incrementer /> */}
    </div>
  );
}

export default Index