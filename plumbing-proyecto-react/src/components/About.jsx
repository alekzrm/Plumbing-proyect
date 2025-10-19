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
        <h2 className="section-title">Acerca de Nosotros</h2>
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
            <h3 className="about-title">Conozca a Ruben Torres Zavala</h3>
            <p className="about-description">
              Con más de 15 años de experiencia, Ruben Torres Zavala es un
              profesional de la plomería certificado y asegurado, dedicado a
              proporcionar un servicio de la más alta calidad y a garantizar la
              satisfacción del cliente. La pericia de Ruben abarca una amplia
              gama de soluciones de plomería, desde el mantenimiento de rutina
              hasta instalaciones complejas, asegurando que sus necesidades sean
              atendidas con precisión y esmero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
