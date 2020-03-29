import React from "react";
import classes from "../styles/components/profile.module.scss";

export default function Profile() {
  return (
    <React.Fragment>
      <h3>プロフィール</h3>
      <div>
        <h5>本名: 林　翔太</h5>
        <h5>名義: hashiya hino</h5>
        <a
          href="https://twitter.com/hashiya18"
          className={`${classes.btn} ${classes.twitter}`}
          role="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://www.pixiv.net/en/users/35986070"
          className={`${classes.btn} ${classes.pixiv}`}
          role="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pixiv
        </a>
      </div>
    </React.Fragment>
  );
}
