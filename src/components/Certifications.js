import "./CertificationStyles.css";

import React from 'react';

import cer1 from "../assets/cer1.jpeg"
import cer2 from "../assets/cer2.jpg"
import cer3 from "../assets/cer3.jpeg"
import cer4 from "../assets/cer4.jpg"
import cer5 from "../assets/cer5.jpg"

const Certifications = () => {
  const certifications = [cer1, cer2, cer3, cer4, cer5]; // Add more as needed

  return (
    <div className="certification-section">
      <h2 className="cert-title">My Certifications</h2>
      <div className="underline"></div>
      <div className="certificates-row">
        {certifications.map((img, index) => (
          <img key={index} src={img} alt={`Certification ${index + 1}`} className="cert-img" />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
