'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';

const Hero = () => {

  return (
    <>
<div className="w-screen h-screen overflow-hidden">
      <iframe
        src="https://cr-3d.com/Tours/Thepointenclave/"
        width="100%"
        height="100%"
        allowFullScreen
        frameBorder="0"
        className="w-full h-full"
      ></iframe>
    </div>
    </>
  );
};

export default Hero;
