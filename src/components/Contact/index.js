import React from "react";
import "./Contact.css";

export default function Contact() {
  const aboutUs = {
    Address: {
      imgSrc: "contact_address.png",
      text: "School of Code, Custard Factory, Gibb Street, Birmingham, B9 4AA",
    },
    Company: {
      imgSrc: "contact_records.png",
      text: "School of Code Ltd is registered in England, Company No. 09793790",
    },
  };

  const followUs = {
    "the Official SoC website": {
      href: "https://schoolofcode.io/",
      imgSrc: "contact_soc.png",
    },
    Twitter: {
      href: "https://twitter.com/theschoolofcode?lang=en",
      imgSrc: "contact_twitter.svg",
    },
    Facebook: {
      href: "https://www.facebook.com/schoolofcode",
      imgSrc: "contact_facebook.png",
    },
    YouTube: {
      href: "https://www.youtube.com/channel/UCKBzheEKcrqsaJhMV0f_Dmg",
      imgSrc: "contact_youtube.png",
    },
    LinkedIn: {
      href: "https://www.linkedin.com/company/school-of-code",
      imgSrc: "contact_linkedin.png",
    },
    Medium: {
      href: "https://blog.schoolofcode.co.uk/",
      imgSrc: "contact_medium.png",
    },
  };

  return (
    <div className="ContactContainer">
      <h1 className="h1">Contact us</h1>
      <div className="contact-links-container">
        {Object.entries(followUs).map(([field, { href, imgSrc }]) => {
          return (
            <a href={href} target="_blank" className="ContactItem" key={field}>
              <img
                className="ContactItem-icon"
                src={"/static/images/" + imgSrc}
              />
              <span className="ContactItem-value">Find us on {field}</span>
            </a>
          );
        })}

        {/* <div className="ContactItem">
          <img
            className="ContactItem-icon"
            src="/static/images/contact_address.png"
          />
          <span className="ContactItem-value">
            School of Code, Custard Factory, Gibb Street, Birmingham, B9 4AA
          </span>
        </div> */}

        {Object.entries(aboutUs).map(([field, { imgSrc, text }]) => {
          return (
            <div className="ContactItem" key={field}>
              <img
                className="ContactItem-icon"
                src={"/static/images/" + imgSrc}
              />
              <span className="ContactItem-value">{text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
