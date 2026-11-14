"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function NccSplash() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="ncc-loader">
      <div className="ncc-logo-animation">
        <Image
          src="/ncc-logo-new.png"
          alt="NCC Logo"
          width={320}
          height={213}
          priority
          className="ncc-loader-logo"
        />
      </div>

      <h2 className="ncc-company-name">
  NAZMI CLIMATE COOL PVT. LTD.</h2>

      <div className="ncc-progress">
        <div className="ncc-progress-bar"></div>
      </div>

      <span>LOADING EXPERIENCE...</span>
    </div>
  );
}