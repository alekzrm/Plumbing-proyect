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
                <strong>Teléfono:</strong> 8181254900
              </li>
              <li>
                <strong>Ubicación:</strong> Calle: C SAN CRISTOBAL ECATEPEC 59
                <br /> Colonia: COL TENENCIA MORELOS <br /> Código Postal: 58341
                <br /> Municipio: Morelia
              </li>
            </ul>
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
