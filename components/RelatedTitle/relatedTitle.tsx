import React from "react";
import { Image } from "antd";

export default function relatedTitle() {
  return (
    <div className="comic-related-title">
      <h2>Related Titles</h2>
      <div className="comic-card">
        <Image
          width={80}
          height={120}
          preview={false}
          src="../images/image6.png"
          className="comic-card__img"
          alt=""
        />
        <div className="comic-card__detail">
          <h3>Title Name 1</h3>
          <div className="comic-exclusive">
            <Image
              width={16}
              height={16}
              preview={false}
              src="../images/icon1.png"
              className="comic-exclusive__img"
              alt=""
            />
            <span>EXCLUSIVE</span>
          </div>
          <p>PREQUEL</p>
          <p>45.6K reads</p>
        </div>
      </div>
      <hr />
      <div className="comic-card">
        <Image
          width={80}
          height={120}
          preview={false}
          src="../images/image6.png"
          className="comic-card__img"
          alt=""
        />
        <div className="comic-card__detail">
          <h3>Title Name 2</h3>
          <div className="comic-exclusive">
            <Image
              width={16}
              height={16}
              preview={false}
              src="../images/icon1.png"
              className="comic-exclusive__img"
              alt=""
            />
            <span>EXCLUSIVE</span>
          </div>
          <p>PREQUEL</p>
          <p>45.6K reads</p>
        </div>
      </div>
      <hr />
      <div className="comic-card">
        <Image
          width={80}
          height={120}
          preview={false}
          src="../images/image6.png"
          className="comic-card__img"
          alt=""
        />
        <div className="comic-card__detail">
          <h3>Title Name 3</h3>
          <div className="comic-exclusive">
            <Image
              width={16}
              height={16}
              preview={false}
              src="../images/icon1.png"
              className="comic-exclusive__img"
              alt=""
            />
            <span>EXCLUSIVE</span>
          </div>
          <p>PREQUEL</p>
          <p>45.6K reads</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
