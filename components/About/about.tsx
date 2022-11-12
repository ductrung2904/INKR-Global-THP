import React from "react";
import { Image } from "antd";

export default function about() {
  return (
    <div className="comic-about">
      <h2>About This</h2>
      <h3>Genres</h3>
      <div className="comic-about-tag">
        <div className="comic-tag__content">Horror</div>
        <div className="comic-tag__content">Psychological</div>
        <div className="comic-tag__content">Seinen</div>
      </div>
      <h3>Summary</h3>
      <p className="comic-about__detail">
        Kasane is an ugly girl who is severely bullied by her classmates because
        of her appearance; making things worse, Kasane`s mother was a beautiful
        actress to whom Kasane is a dark contrast, even though she is as
        talented as her mother. However, there is nothing to do with this.
      </p>
      <div className="comic-another-img-list">
        <Image
          height={126}
          preview={false}
          src="../images/image2.png"
          className="comic-another-img"
          alt=""
        />
        <Image
          height={126}
          preview={false}
          src="../images/image3.png"
          className="comic-another-img"
          alt=""
        />
        <Image
          height={126}
          preview={false}
          src="../images/image4.png"
          className="comic-another-img"
          alt=""
        />
        <Image
          height={126}
          preview={false}
          src="../images/image5.png"
          className="comic-another-img"
          alt=""
        />
      </div>
      <h3>Credits</h3>
      <div className="comic-credits">
        <div className="comic-credits-detail">
          <Image
            width={40}
            height={40}
            preview={false}
            src="../images/avatar1.png"
            alt=""
          />
          <div className="comic-credit-info">
            <p className="comic-credit-name">Kodansha</p>
            <p className="comic-credit-role">Publisher</p>
          </div>
        </div>
        <div className="comic-credits-detail">
          <Image
            width={40}
            height={40}
            preview={false}
            src="../images/avatar2.png"
            alt=""
          />
          <div className="comic-credit-info">
            <p className="comic-credit-name">Johnnie Christmas</p>
            <p className="comic-credit-role">Story</p>
          </div>
        </div>
        <div className="comic-credits-detail">
          <Image
            width={40}
            height={40}
            preview={false}
            src="../images/avatar3.png"
            alt=""
          />
          <div className="comic-credit-info">
            <p className="comic-credit-name">Jack T. Cole</p>
            <p className="comic-credit-role">Art</p>
          </div>
        </div>
        <h3 className="comic-facts-context">Other Facts</h3>
        <div className="comic-facts-list">
          <p className="comic-facts">
            Last Updated : <span>2 days ago</span>
          </p>
          <p className="comic-facts">
            Age Rating : <span>Mature (18+)</span>
          </p>
          <p className="comic-facts">
            Color : <span>Black & White</span>
          </p>
          <p className="comic-facts">
            Origin Media : <span>Print</span>
          </p>
          <p className="comic-facts">
            Style Origin : <span>Japanese Comics (Manga)</span>
          </p>
          <p className="comic-facts">
            Copyright : <span>© Daruma Matsuura / Kodansha Ltd.</span>
          </p>
          <p className="comic-facts">
            Other Names : <span>Kasane -voleuse de visage</span>
          </p>
        </div>
      </div>
    </div>
  );
}
