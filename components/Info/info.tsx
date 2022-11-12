import React from "react";
import { Image, Button } from "antd";

export default function info() {
  return (
    <div className="comic-info">
      <Image
        width={180}
        preview={false}
        src="../images/image1.png"
        className="comic-image"
        alt=""
      />
      <div className="comic-info__detail">
        <h1 className="comic-name">Kasane</h1>
        <p className="comic-author">By Kodansha</p>
        <p className="comic-type">Drama • 10 Chapters</p>
        <div className="comic-view">
          <Image
            width={16}
            height={12}
            preview={false}
            src="../images/reader.svg"
            alt=""
          />
          <div className="comic-reader">74,483</div>
          <Image
            width={16}
            height={12}
            preview={false}
            src="../images/like.svg"
            alt=""
          />
          <div className="comic-like">15,863</div>
        </div>
        <div className="comic-tag">
          <div className="comic-tag__content">18+</div>
          <div className="comic-tag__content">NEW</div>
          <div className="comic-tag__content">TRENDING</div>
          <div className="comic-tag__content">BESTSELLER</div>
          <div className="comic-tag__content">MANGA</div>
        </div>
        <Button className="comic-read-btn" type="primary">
          Read First Chapter for FREE
        </Button>
      </div>
      <div className="comic-info-icons">
        <div className="comic-share-btn">
          <Image
            width={13}
            height={14}
            preview={false}
            src="../images/share.svg"
            className="comic-btn-icon"
            alt=""
          />
        </div>
        <div className="comic-more-btn">
          <Image
            width={13}
            height={14}
            preview={false}
            src="../images/more.svg"
            className="comic-btn-icon"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
