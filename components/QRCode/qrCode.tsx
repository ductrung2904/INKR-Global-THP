import React from "react";
import { Image } from "antd";

export default function qrCode() {
  return (
    <div className="comic-qr-code">
      <div className="comic-qr-code__context">
        <h2>Get The App</h2>
        <p>
          Love this title? Scan the QR code to continue reading right on your
          mobile devices.
        </p>
      </div>
      <Image
        width={116}
        height={116}
        preview={false}
        src="../images/qr-code.png"
        alt=""
      />
    </div>
  );
}
