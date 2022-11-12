import React from "react";
import { Image, Button } from "antd";

export default function comments() {
  return (
    <div className="comic-comments">
      <h2>12 Comments</h2>
      <div className="comic-comment-card">
        <Image
          width={32}
          height={32}
          preview={false}
          src="../images/default-avatar.png"
          alt=""
        />
        <div className="comic-comment-detail">
          <div className="comic-comment-user">
            <span className="comic-comment-user__name">Han Solo</span>
            <span className="comic-comment-user__time">
              Commented on Chapter 35 • 24 min. ago
            </span>
          </div>
          <p className="comic-comment-content">
            I had no idea such a sequel was coming as I thought the show had
            ended and Kyoto Animation took a hard hit from the tragedy but
            currently 4 episodes in as of writing this review, and I love every
            second of it.
          </p>
          <div className="comic-comment-react">
            <Image
              width={11}
              height={11}
              preview={false}
              src="../images/like2.svg"
              className="comic-comment-react__icon"
              alt=""
            />
            <div className="comic-comment-react__like">61</div>
            <Image
              width={11}
              height={11}
              preview={false}
              src="../images/comment.svg"
              className="comic-comment-react__icon"
              alt=""
            />
            <div className="comic-comment-react__comment">12</div>
            <span>Reply</span>
          </div>
        </div>
      </div>
      <div className="comic-comment-chatbox">
        <Image
          width={32}
          height={32}
          preview={false}
          src="../images/comment-avatar.png"
          alt=""
        />
        <div className="commit-comment-box">
          <input
            type="text"
            className="commit-comment-box__input"
            placeholder="Add your comment"
          />
          <Button type="primary" className="commit-comment-box__btn">
            <span>
              <Image
                width={14}
                height={14}
                preview={false}
                src="../images/send.png"
                alt=""
              />
            </span>
            <span>Add Comment</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
