import React from "react";

const Hero = () => {
  const heroBackgroundImage =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAuNt9z83qohiLg8kRhDGDSQcS-UQnJHoIcyM80JupxcaxIG6UoclmHVXCmr7wFYtz2ee0_kR4eKFk5ilzvpoYg-BJM3AKOovfsRjG3-oUmE8G5qeU6DJKH7K7jGqB0BEIRLH-fBMc08lWr0Elfcw6DA3N-bkQsdEfmITeLGNALC9a_ZUpX5o-_Le4HUA5tnacGdf87Qci_f5xJjGWmWyirwXlLOEUJh2NS5Yi62igSNkFjfkcOZzIsI_WfwckUJet4fkwkm-hsP5_l";

  const handleGetQuote = () => {
    // Scroll to terms section
    const termsSection = document.getElementById("terms");
    if (termsSection) {
      termsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="hero-section bg-hero-gradient"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("${heroBackgroundImage}")`,
      }}
    >
      <div className="hero-overlay">
        <div className="hero-container">
          <h1 className="hero-title">
            Expertos en Plomería: Su Opción de Confianza
          </h1>
          <p className="hero-description">
            Ofrecemos servicios de plomería confiables y eficientes para
            clientes residenciales y comerciales. Contáctenos hoy para una
            consulta gratuita.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={handleGetQuote}>
              <span className="truncate">Solicitar Cotización</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
