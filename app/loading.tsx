import Image from "next/image";

export default function Loading() {
  return (
    <div className="ncc-loader">
      <div className="ncc-logo-animation">
        <Image
          src="/ncc-logo.jpeg"
          alt="NCC Logo"
          width={150}
          height={150}
          priority
          className="ncc-loader-logo"
        />
      </div>

      <h1>NCC</h1>
      <p>NAZMI CLIMATE COOL PVT. LTD.</p>

      <div className="ncc-progress">
        <div className="ncc-progress-bar"></div>
      </div>

      <span>Loading Experience...</span>
    </div>
  );
}