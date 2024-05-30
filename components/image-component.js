import React from 'react';
import Image from 'next/image';

const ImageComponent = ({ src, alt, text }) => {
  return (
    <div className="col-lg-4">
        <Image src={src} height={200} width={250} alt={alt} />
        <h4 className="fw-normal">{text}</h4>
      </div>
  );
};

export default ImageComponent;
