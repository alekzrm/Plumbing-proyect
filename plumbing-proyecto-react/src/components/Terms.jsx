import React from "react";

const Terms = () => {
  return (
    <section
      className="section-container"
      id="terms"
      style={{ backgroundColor: "#f9fafb" }}
    >
      <div className="section-content">
        <h2 className="section-title">Términos y Condiciones</h2>
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
          <div style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "700",
                marginBottom: "1rem",
                color: "#111827",
              }}
            >
              1. Servicios Ofrecidos
            </h3>
            <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
              Plumbing Solutions ofrece servicios profesionales de plomería que
              incluyen reparaciones, instalaciones, mantenimiento, calefacción,
              drenaje y servicios de emergencia. Todos los servicios están
              sujetos a disponibilidad y se proporcionará una estimación antes
              del inicio.
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "700",
                marginBottom: "1rem",
                color: "#111827",
              }}
            >
              2. Presupuestos y Pagos
            </h3>
            <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
              Todos los trabajos incluyen un presupuesto gratuito. El pago se
              debe realizar al completar el trabajo, a menos que se acuerde lo
              contrario por escrito. Aceptamos efectivo, tarjetas de crédito y
              transferencias bancarias.
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "700",
                marginBottom: "1rem",
                color: "#111827",
              }}
            >
              3. Garantía
            </h3>
            <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
              Ofrecemos garantía en la mano de obra realizada. Los detalles
              específicos de la garantía se proporcionarán con cada estimación y
              varían según el tipo de trabajo realizado.
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "700",
                marginBottom: "1rem",
                color: "#111827",
              }}
            >
              4. Limitaciones de Responsabilidad
            </h3>
            <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
              No somos responsables de daños preexistentes o problemas no
              relacionados con el trabajo realizado. Cualquier trabajo adicional
              requerido será discutido y aprobado antes de proceder.
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "700",
                marginBottom: "1rem",
                color: "#111827",
              }}
            >
              5. Servicios de Emergencia
            </h3>
            <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
              Los servicios de emergencia están disponibles las 24 horas. Se
              aplicarán tarifas adicionales para servicios fuera del horario
              comercial normal, fines de semana y días festivos.
            </p>
          </div>

          <div>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "700",
                marginBottom: "1rem",
                color: "#111827",
              }}
            >
              6. Contacto
            </h3>
            <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
              Para cualquier pregunta sobre estos términos y condiciones, por
              favor contáctenos al 8181254900.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
