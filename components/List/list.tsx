import React from "react";
import { Image } from "antd";

export default function list() {
  return (
    <div className="comic-list">
      <h2>Last read</h2>
      <div className="comic-list-last-read">
        <div className="container">
          <Image
            width={78}
            height={62}
            preview={false}
            src="../images/image7.png"
            className="comic-list-last-read__img"
            alt=""
          />
          <div className="comic-list-progress"></div>
          <div className="comic-list-context">
            <div className="comic-list-context__chapter">Chapter 1</div>
            <div className="comic-list-context__time">Last read 2 days ago</div>
          </div>
        </div>
      </div>
      <div className="comic-list-header">
        <div className="comic-list-header__info">
          <h2>10 chapters</h2>
          <div>New chapter every Thursday</div>
        </div>
        <div className="comic-list-icons">
          <div className="comic-list-icon">
            <Image
              width={16}
              height={16}
              preview={false}
              src="../images/bell.png"
              className="comic-list-icon__img"
              alt=""
            />
          </div>
          <div className="comic-list-icon">
            <Image
              width={16}
              height={16}
              preview={false}
              src="../images/sort.png"
              className="comic-list-icon__img"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="comic-list-chapters">
        <div className="container__current">
          <div className="comic-list-card">
            <div className="comic-list-card__info">
              <div className="comic-list-card__container">
                <Image
                  width={78}
                  height={62}
                  preview={false}
                  src="../images/image7.png"
                  alt=""
                />
                <div className="comic-list-progress"></div>
              </div>
              <p>Chapter 1</p>
            </div>
            <div className="comic-list-card__price">FREE</div>
          </div>
        </div>
        <div className="container">
          <div className="comic-list-card">
            <div className="comic-list-card__info">
              <div className="comic-list-card__container">
                <Image
                  width={78}
                  height={62}
                  preview={false}
                  src="../images/image7.png"
                  alt=""
                />
              </div>
              <p>Chapter 2</p>
            </div>
            <div className="comic-list-card__price">FREE</div>
          </div>
        </div>
        <div className="container">
          <div className="comic-list-card">
            <div className="comic-list-card__info">
              <div className="comic-list-card__container">
                <Image
                  width={78}
                  height={62}
                  preview={false}
                  src="../images/image7.png"
                  alt=""
                />
              </div>
              <p>Chapter 3</p>
            </div>
            <div className="comic-list-card__price">FREE</div>
          </div>
        </div>
        <div className="container">
          <div className="comic-list-card">
            <div className="comic-list-card__info">
              <div className="comic-list-card__container__locked">
                <Image
                  width={78}
                  height={62}
                  preview={false}
                  src="../images/image7.png"
                  className="comic-list-card__img"
                  alt=""
                />
                <div className="locked">
                  <Image
                    width={12}
                    height={12}
                    preview={false}
                    src="../images/lock.png"
                    className="comic-list-card__locked"
                    alt=""
                  />
                </div>
              </div>
              <p>Chapter 4</p>
            </div>
            <div className="comic-list-card__price">
              <span>
                <Image
                  width={16}
                  height={16}
                  preview={false}
                  src="../images/coin.png"
                  className="comic-list-card__icon"
                  alt=""
                />
              </span>
              5
            </div>
          </div>
        </div>
        <div className="container">
          <div className="comic-list-card">
            <div className="comic-list-card__info">
              <div className="comic-list-card__container__locked">
                <Image
                  width={78}
                  height={62}
                  preview={false}
                  src="../images/image7.png"
                  alt=""
                />
                <div className="locked">
                  <Image
                    width={12}
                    height={12}
                    preview={false}
                    src="../images/lock.png"
                    className="comic-list-card__locked"
                    alt=""
                  />
                </div>
              </div>
              <p>Chapter 5</p>
            </div>
            <div className="comic-list-card__price">
              <span>
                <Image
                  width={16}
                  height={16}
                  preview={false}
                  src="../images/coin.png"
                  className="comic-list-card__icon"
                  alt=""
                />
              </span>
              5
            </div>
          </div>
        </div>
        <div className="container">
          <div className="comic-list-card">
            <div className="comic-list-card__info">
              <div className="comic-list-card__container__locked">
                <Image
                  width={78}
                  height={62}
                  preview={false}
                  src="../images/image7.png"
                  alt=""
                />
                <div className="locked">
                  <Image
                    width={12}
                    height={12}
                    preview={false}
                    src="../images/lock.png"
                    className="comic-list-card__locked"
                    alt=""
                  />
                </div>
              </div>
              <p>Chapter 6</p>
            </div>
            <div className="comic-list-card__price">
              <span>
                <Image
                  width={16}
                  height={16}
                  preview={false}
                  src="../images/coin.png"
                  className="comic-list-card__icon"
                  alt=""
                />
              </span>
              5
            </div>
          </div>
        </div>
        <div className="container">
          <div className="comic-list-card">
            <div className="comic-list-card__info">
              <div className="comic-list-card__container__locked">
                <Image
                  width={78}
                  height={62}
                  preview={false}
                  src="../images/image7.png"
                  alt=""
                />
                <div className="locked">
                  <Image
                    width={12}
                    height={12}
                    preview={false}
                    src="../images/lock.png"
                    className="comic-list-card__locked"
                    alt=""
                  />
                </div>
              </div>
              <p>Chapter 7</p>
            </div>
            <div className="comic-list-card__price">
              <span>
                <Image
                  width={16}
                  height={16}
                  preview={false}
                  src="../images/coin.png"
                  className="comic-list-card__icon"
                  alt=""
                />
              </span>
              5
            </div>
          </div>
        </div>
        <div className="container">
          <div className="comic-list-card">
            <div className="comic-list-card__info">
              <div className="comic-list-card__container__locked">
                <Image
                  width={78}
                  height={62}
                  preview={false}
                  src="../images/image7.png"
                  alt=""
                />
                <div className="locked">
                  <Image
                    width={12}
                    height={12}
                    preview={false}
                    src="../images/lock.png"
                    className="comic-list-card__locked"
                    alt=""
                  />
                </div>
              </div>
              <p>Chapter 8</p>
            </div>
            <div className="comic-list-card__price">
              <span>
                <Image
                  width={16}
                  height={16}
                  preview={false}
                  src="../images/coin.png"
                  className="comic-list-card__icon"
                  alt=""
                />
              </span>
              5
            </div>
          </div>
        </div>
        <div className="container">
          <div className="comic-list-card">
            <div className="comic-list-card__info">
              <div className="comic-list-card__container__locked">
                <Image
                  width={78}
                  height={62}
                  preview={false}
                  src="../images/image7.png"
                  alt=""
                />
                <div className="locked">
                  <Image
                    width={12}
                    height={12}
                    preview={false}
                    src="../images/lock.png"
                    className="comic-list-card__locked"
                    alt=""
                  />
                </div>
              </div>
              <p>Chapter 9</p>
            </div>
            <div className="comic-list-card__price">
              <span>
                <Image
                  width={16}
                  height={16}
                  preview={false}
                  src="../images/coin.png"
                  className="comic-list-card__icon"
                  alt=""
                />
              </span>
              5
            </div>
          </div>
        </div>
        <div className="container">
          <div className="comic-list-card">
            <div className="comic-list-card__info">
              <div className="comic-list-card__container__locked">
                <Image
                  width={78}
                  height={62}
                  preview={false}
                  src="../images/image7.png"
                  alt=""
                />
                <div className="locked">
                  <Image
                    width={12}
                    height={12}
                    preview={false}
                    src="../images/lock.png"
                    className="comic-list-card__locked"
                    alt=""
                  />
                </div>
              </div>
              <p>Chapter 10</p>
            </div>
            <div className="comic-list-card__price">
              <span>
                <Image
                  width={16}
                  height={16}
                  preview={false}
                  src="../images/coin.png"
                  className="comic-list-card__icon"
                  alt=""
                />
              </span>
              5
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
