import React from 'react';

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
      title: "Reparación de Tubería",
      description: "Fixed a major leak under the sink, preventing water damage.",
      beforeImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA83xzn356PAVA7cstXu-XtJols9bgR_3al4FcYtc2J6-gub9AZs8LW2CYcnk1sXbGU6lYiRtqPXGjSAjDlEnL1ggEaSDY5fykxTY_XYYoBRNMsvyKPegmStuq4NA4UFpy61igiZo6fpbGPgIlTpM6neoEu7JL-wBJyK7w6fKhEbaGXhk04zBnL6K5JobIk9wWrSDM4CN14I0JKh52kWreXp8MFW2LMvYsK45ylSVvDSpU7ms0uBoqm7xaI3hYjvqORBzqb1-pJepRs",
      afterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBG8e8oeBjPa9epY-3oCErrIT8fK8SUFfq6xDNBP0J2k9gNHYTlodeL1PX2_qppraww4Tu7IwcphRBEVWSjeKWXymrpTfJSpv-ybxm23YU7cjYgCpgMJ466vJ7PW-QEMbCxJNETa8n-6XzrJm2xPQeDEtyqFNkaIKFYHhknq3le9qZ_Ro470QFPqWIuqlZblCMxocHB85pMMJtflCC7rboCgRRG4atOud6kAlyTFmiywUWCX0rvlKrd4B6iIUITvx95kRfKZ_71mf9q"
    },
    {
      title: "Instalación de Calentador",
      description: "Upgraded an old unit to a new, energy-efficient model.",
      beforeImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-xuOtlBx-Q8oREuDUTW4W75nmXFisqsqtw3XnRiIXRFi3FHvskdgxSAwG1N_98Id5p15bk-GhUNyzJj2Mesea0vBs1yVLJHGaRb1Kg4foKOtWxsIjzRG64NeCd_Kron8AQ9afmDpViiaLom7oe3b5LM8-wX7vSn08EWDO37xfuxGO5geZk4cagSNNjagl9itbIvB0tin9Sfd0dTJvtLnvslfMUStJYwFaTzRHB5t4Rg6ooAMKmRJPdsxZauKVQf8cltzv2CHPQhpz",
      afterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfgMewF_IwoT3nGxSKZrHQRYzTS4Jje-iCHziKPKHoKEPMK873jTQeiOtq9pl6l0AH3RA8NLxt13IHclPS3UIwP1lzhR-Q7shiHbTDmbgR7OZc7vi0ayMAQP3L358Isu4Y0FFVSEBCK-gqTCHtXUqsLySdeqidnnhsmYYJUmTylWs8QfoZEgIzbRRwY_FrPX4xRGgxjlxQEFL8NtxGgeLQ0Gr2xv-mKS7QewbPfFACYvl_ddsYauj0RN9saTIT0zJRCaMNfqVshher"
    },
    {
      title: "Limpieza de Drenaje",
      description: "Cleared a severely clogged shower drain, restoring full flow.",
      beforeImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDR9sfhAOaU6l6PodUjd8vkKGkSLNlksiOWn4JTusrE34SW9ffruZHAL7C0Zk1gp_E3bn38ezLExZXWZlUbNAv0ypq1b5tQR7inrroBs8UwnAVB1hja3gv61wME074srowj0jKwhu5kBgPPRlpsqed8GABo6EeBizF95w-NLe8tnAwnecF6w7bP8uUHxUxEALKu_x4elcmAo83pd_AlYzUS9lvhvPtlXgp_e3B-y_gMTdCOgiB7dCg5l1Ryx-MxG0_XVTbYskIC51nn",
      afterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDvKEMqGPAduvro7kcBzAy_PsGwfpmp2whJO4AC3quOPlurEpHU16KQnmYuvIlWAPkpLgnrtL1Y9ZOGOiIKN2y8Sl09gRgjDE-xEOOwmDb4SMJm2-byXFJeX9W2xdnrBflWAt2LYU7yWyOv7-p86xzZLC36pmqrD8mUHTFGQlqTZzb0iHdSbDjoy_A-ZjLKY8imMccvaEbquw1UO24Rtu-9yq6M16ergk9xt2jFNv230xJFzxwd0u_iCAYS85-wo_Qhnj8DOZ3qG_7"
    },
    {
      title: "Instalación de Grifo",
      description: "Replaced an old faucet with a stylish and functional new one.",
      beforeImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoJ0tILErOu3xwCiXc1evQIlTyozVI4ndWC4nzTHpY_ySL3Qszwdtm75K0Fx4RF4j8jYNXS13cR4AwnI-rdT2GXkREi19_YFZwAlnsGM5QsCSuo8kj9j4Dv5ySCLZGhqQQLERhN1a-gAbVCUSI1zCfP6s6ihBOABozeJUxURbkT1Elc7LvKvOdFGLLEdPnsV5bbqGn1tu67Y98uRmiJJtlKnvcEbWqhyjr2nfKbDAV_QiIDQ7g_PcBQiD4wZFxXIciEVRANK0KSKMC",
      afterImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBterXqkER3gRBUW5-pGOPSJQ2yUUrzEwT5dIL0B8fceNT3perfwLyWjL-15UXGteXJcsSkZVkBBtyGAQvp2Rwv2K8MbLmVI6XRr8vPLM3rLLHtWLiCUIilzwhUdyVATl70dm0SssxIsnHtZypi7m9u3c5uQ4HTFf6Dxb3AwN4ARv_EZHHXydW4Qi133HyPT1tQOVa5buRVlLcnb_xa_klpR4_d7qxXl6oMbM7I5F73gxBsZ1s9smNC6kuK9wuia8TgHcH3nPz2v7MI"
    }
  ];

  return (
    <section className="gallery-section" id="gallery">
      <div className="section-content">
        <h2 className="section-title">Trabajos Realizados</h2>
        <p className="gallery-description">
          Here's a glimpse of our quality workmanship. We take pride in transforming 
          plumbing problems into reliable solutions.
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