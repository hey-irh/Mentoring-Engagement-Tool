import React from "react";

export default function Contact() {
  const aboutUs = {
    "Company Info":
      "School of Code Ltd is registered in England, Company No. 09793790",
    Address: "School of Code, Custard Factory, Gibb Street, Birmingham, B9 4AA",
  };

  const followUs = {
    Website: "https://schoolofcode.io/",
    Twitter: "https://twitter.com/theschoolofcode?lang=en",
    Facebook: "https://www.facebook.com/schoolofcode",
    YouTube: "https://www.youtube.com/channel/UCKBzheEKcrqsaJhMV0f_Dmg",
    LinkedIn: "https://www.linkedin.com/company/school-of-code",
    Medium: "https://blog.schoolofcode.co.uk/",
  };

  return (
    <div className="ContactContainer">
      {Object.entries(aboutUs).map(([field, value]) => {
        return (
          <p className="ContactItem" key={field}>
            <span className="ContactItem-field">{field}:</span>
            <span className="ContactItem-value">{value}</span>
          </p>
        );
      })}
      {Object.entries(followUs).map(([field, value]) => {
        return (
          <p className="ContactItem" key={field}>
            <span className="ContactItem-field">{field}:</span>
            <span className="ContactItem-value">{value}</span>
          </p>
        );
      })}
    </div>
  );
}
