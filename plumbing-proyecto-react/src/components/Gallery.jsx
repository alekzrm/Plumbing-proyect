import React from "react";

// Importar las imágenes
import boilerantes from "../assets/images/boilerantes.png";
import boilerdespues from "../assets/images/boilerdespues.png";
import fugaantes from "../assets/images/fugaantes.png";
import fugadepsues from "../assets/images/fugadepsues.png";
import desagueantes from "../assets/images/desagueantes.png";
import desaguedepsues from "../assets/images/desaguedepsues.png";
import grifoantes from "../assets/images/grifoantes.png";
import grifodespues from "../assets/images/grifodespues.png";

const GalleryCard = ({ beforeImage, afterImage, title, description }) => (
  <div className="gallery-card">
    <div className="gallery-images">
      <div className="gallery-image-container">
        <img
          alt={`Before - ${title}`}
          className="gallery-image"
          src={beforeImage}
        />
        <div className="gallery-badge gallery-badge-before">ANTES</div>
      </div>
      <div className="gallery-image-container">
        <img
          alt={`After - ${title}`}
          className="gallery-image"
          src={afterImage}
        />
        <div className="gallery-badge gallery-badge-after">DESPUÉS</div>
      </div>
    </div>
    <div className="gallery-content">
      <h3 className="gallery-title">{title}</h3>
      <p className="gallery-card-description">{description}</p>
    </div>
  </div>
);

const Gallery = () => {
  const projects = [
    {
      title: "Reparación de Boiler",
      description:
        "Instalación completa de boiler de gas con todas las conexiones de seguridad.",
      beforeImage: boilerantes,
      afterImage: boilerdespues,
    },
    {
      title: "Reparación de Fuga",
      description:
        "Reparación de fuga en tubería principal, evitando así daños por agua.",
      beforeImage: fugaantes,
      afterImage: fugadepsues,
    },
    {
      title: "Destape de Drenaje",
      description:
        "Limpieza y destape de sistema de drenaje severamente obstruido.",
      beforeImage: desagueantes,
      afterImage: desaguedepsues,
    },
    {
      title: "Instalación de Grifo",
      description:
        "Se reemplazó un grifo antiguo por uno nuevo, elegante y funcional.",
      beforeImage: grifoantes,
      afterImage: grifodespues,
    },
  ];

  return (
    <section className="gallery-section" id="gallery">
      <div className="section-content">
        <h2 className="section-title">Trabajos Realizados</h2>
        <p className="gallery-description">
          A continuación, una muestra de la calidad de nuestro trabajo. Nos
          enorgullecemos de transformar los problemas de plomería en soluciones
          confiables y duraderas.
        </p>
        <div className="gallery-grid">
          {projects.map((project, index) => (
            <GalleryCard
              key={index}
              beforeImage={project.beforeImage}
              afterImage={project.afterImage}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
