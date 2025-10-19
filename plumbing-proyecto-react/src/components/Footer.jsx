import React from "react";

const SocialIcon = ({ children, href = "#" }) => (
  <a className="footer-social-link" href={href}>
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-contact">
            <h3 className="footer-section-title">Contacto</h3>
            <ul className="footer-list">
              <li>
                <strong>Nombre:</strong> Ruben Torres Zavala
              </li>
              <li>
                <strong>Teléfono:</strong> +523378456754
              </li>
              <li>
                <strong>Email:</strong> ruben.torres@plumbingsolutions.com
              </li>
              <li>
                <strong>Área de Servicio:</strong> Guadalajara, Jalisco
              </li>
            </ul>

            {/* Mapa del área de servicio */}
            <div className="service-area-map">
              <h4 className="map-title">Nuestra Zona de Servicio</h4>
              <div className="map-container">
                <div className="map-overlay" id="map-overlay">
                  <div className="map-controls">
                    <button
                      className="map-control-btn"
                      onClick={() => {
                        const overlay = document.getElementById("map-overlay");
                        const iframe = document.querySelector(
                          ".map-container iframe"
                        );
                        overlay.style.display = "none";
                        iframe.style.pointerEvents = "auto";
                      }}
                      title="Activar controles del mapa"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                      Activar Mapa
                    </button>
                    <a
                      href="https://www.google.com/maps/search/plomeria+guadalajara+jalisco/@20.6756096,-103.3565029,12z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="map-control-btn map-external-btn"
                      title="Abrir en Google Maps"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                      </svg>
                      Abrir en Google Maps
                    </a>
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21116.19827770928!2d-103.35650295012897!3d20.675609584590863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1760811010378!5m2!1ses-419!2smx"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Área de servicio - Guadalajara, Jalisco"
                />
              </div>
            </div>
          </div>

          <div className="footer-policies">
            <div>
              <h3 className="footer-section-title">Política de Privacidad</h3>
              <p className="footer-text">
                En Plumbing Solutions, nos comprometemos a proteger su
                privacidad. Esta política de privacidad explica cómo
                recopilamos, usamos, divulgamos y salvaguardamos su información
                cuando visita nuestro sitio web. La información que recopilamos
                puede incluir su nombre, dirección de correo electrónico, número
                de teléfono y cualquier otro detalle que nos proporcione cuando
                se comunique con nosotros. Utilizamos esta información para
                responder a sus consultas, proporcionar estimaciones y prestar
                nuestros servicios de plomería. No compartiremos su información
                personal con terceros, excepto cuando sea necesario para cumplir
                con la ley.
              </p>
            </div>

            <div>
              <h3 className="footer-section-title">
                Términos y Condiciones del Servicio
              </h3>
              <p className="footer-text">
                Al utilizar nuestro sitio web y solicitar nuestros servicios,
                usted acepta estar sujeto a los siguientes términos y
                condiciones. Todos los servicios están sujetos a disponibilidad
                y se proporcionará una estimación antes de que comience
                cualquier trabajo. El pago de los servicios se debe realizar a
                la finalización del trabajo, a menos que se acuerde lo contrario
                por escrito. Ofrecemos una garantía sobre la mano de obra, cuyos
                detalles se proporcionarán con su estimación. No somos
                responsables de ningún daño preexistente o problemas no
                relacionados con el trabajo realizado. Estos términos se rigen
                por las leyes de nuestra jurisdicción.
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © 2025 Ruben Torres Zavala. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
