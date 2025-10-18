import React from "react";

const About = () => {
  const profileImageUrl =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAe25ik_zAQTsRVW1w5iOia_kczZvcpEu4mH6Z-FswWVTh55nNqJVIGdLV_qwaVfX9ZTHDETvtWLGaDjYGACTzjgJe39EjHHcTWV8kzt1ipG6fnVntDFy-sF6FCluxP-RiQiLh1wANi1BTbI_7lwqIyHn0vVtqiWD6tydftIiB39oehPOc3c66wB_-GKQ2yWvp6wTGKLnkmYbp45iyjybC-Bw8HwUHGmNGvDSwfT8Nlp8mmjSIF43F5m7mi209ns3o_sSPYjJ5AlBsB";

  return (
    <section
      className="section-container"
      id="about"
      style={{ backgroundColor: "var(--background-light)" }}
    >
      <div className="section-content">
        <h2 className="section-title">About Us</h2>
        <div className="about-container">
          <div className="about-image">
            <div
              className="about-profile-image"
              style={{
                backgroundImage: `url("${profileImageUrl}")`,
              }}
            />
          </div>
          <div className="about-content">
            <h3 className="about-title">Meet Alex Johnson</h3>
            <p className="about-description">
              With over 15 years of experience, Alex Johnson is a licensed and
              insured plumbing professional dedicated to providing top-quality
              service and customer satisfaction. Alex's expertise covers a wide
              range of plumbing solutions, from routine maintenance to complex
              installations, ensuring your plumbing needs are met with precision
              and care.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
