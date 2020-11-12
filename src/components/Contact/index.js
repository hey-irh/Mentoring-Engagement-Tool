import React from "react";
import "./Contact.css";

export default function Contact() {
  const aboutUs = {
    "Company Info":
      "School of Code Ltd is registered in England, Company No. 09793790",
    Address: "School of Code, Custard Factory, Gibb Street, Birmingham, B9 4AA",
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
      {Object.entries(followUs).map(([field, { href, imgSrc }]) => {
        return (
          <a href={href} className="ContactItem" key={field}>
            <img
              className="ContactItem-icon"
              src={"/static/images/" + imgSrc}
            />
            <span className="ContactItem-value">Find us on {field}</span>
          </a>
        );
      })}
      {Object.entries(aboutUs).map(([field, value]) => {
        return (
          <div className="ContactItem" key={field}>
            <span className="ContactItem-field">{field}:</span>
            <span className="ContactItem-value">{value}</span>
          </div>
        );
      })}
    </div>
  );
}
