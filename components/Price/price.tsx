import React from "react";
import { Image } from "antd";

export default function price() {
  return (
    <div className="comic-price">
      <h2>Pricing & Promotion</h2>
      <table className="comic-price-detail">
        <tbody className="container">
          <tr className="comic-price-info">
            <td className="comic-price-info__free">
              <div>FREE</div>
              <div>3 chapters</div>
            </td>
            <td className="comic-price-info__locked">
              <div>LOCKED</div>
              <div>
                7 chapters{" "}
                <span>
                  (
                  <Image
                    width={12}
                    height={12}
                    preview={false}
                    src="../images/coin.png"
                    className="comic-price-icon"
                    alt=""
                  />
                  5 / chapter)
                </span>
              </div>
            </td>
          </tr>
          <tr className="comic-price-total">
            <td colSpan={2}>
              <div className="comic-price-total__container">
                <div className="comic-price-total__detail">
                  <div>Total Price</div>
                  <div>Instant access to all chapters • No Ad</div>
                </div>
                <div className="comic-price-total__btn">
                  <Image
                    width={16}
                    height={16}
                    preview={false}
                    src="../images/coin.png"
                    className="comic-price-total-icon"
                    alt=""
                  />
                  <span>35</span>
                </div>
              </div>
            </td>
          </tr>
          <tr className="comic-price-extra">
            <td colSpan={2}>
              <div className="comic-price-extra__container">
                <div className="comic-price-extra__left">
                  <div>
                    <span>Save money with INKR Extra</span>
                    <Image
                      width={16}
                      height={16}
                      preview={false}
                      src="../images/icon1.png"
                      className="comic-price-extra__icon"
                      alt=""
                    />
                  </div>
                  <div>
                    Instant access to all chapters • No Ad • Extra saving
                  </div>
                </div>
                <div className="comic-price-extra__right">
                  <div className="comic-price-extra__btn">
                    <div className="comic-price-sale">
                      <span>-50%</span>
                    </div>
                    <div className="comic-price-sale__price">
                      <Image
                        width={16}
                        height={16}
                        preview={false}
                        src="../images/coin.png"
                        className="comic-price-total-icon"
                        alt=""
                      />
                      <span className="comic-price-total__original">35</span>
                      <span className="comic-price-total__sale">18</span>
                    </div>
                  </div>
                  <p>Saving rates may vary</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="comic-price-more">Want to read for free? Learn more</p>
    </div>
  );
}
