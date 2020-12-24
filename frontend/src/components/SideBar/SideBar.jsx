import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-v2.png";
import styles from "./sideBar.module.css";
import { connect } from "react-redux";

const ConversionChart = ({ conversionArr }) => (
  <div className={styles.converisonChart}>
    <p className={styles.title}>Conversion Chart</p>
    <div className={`${styles.whiteBody} ${styles.conversionBody}`}>
      <div className={styles.conversionColumn}>
        <div className={styles.conversionNumber}>
          {conversionArr.slice(0, 4).map((single) => (
            <p key={single.number}>{single.number}</p>
          ))}
        </div>
        <div className={styles.gradientColor}>
          {conversionArr.slice(0, 4).map((single) => (
            <p key={single.letter}>{single.letter}</p>
          ))}
        </div>
      </div>
      <div className={styles.conversionColumn}>
        <div className={styles.conversionNumber}>
          {conversionArr.slice(4, 8).map((single) => (
            <p key={single.number}>{single.number}</p>
          ))}
        </div>
        <div className={styles.gradientColor}>
          {conversionArr.slice(4, 8).map((single) => (
            <p key={single.letter}>{single.letter}</p>
          ))}
        </div>
      </div>
      <div className={styles.conversionColumn}>
        <div className={styles.conversionNumber}>
          {conversionArr.slice(8, 12).map((single) => (
            <p key={single.number}>{single.number}</p>
          ))}
        </div>
        <div className={styles.gradientColor}>
          {conversionArr.slice(8, 12).map((single) => (
            <p key={single.letter}>{single.letter}</p>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Summary = () => (
  <div>
    <p className={styles.title}>Summary</p>
    <div className={`${styles.whiteBody} ${styles.summaryBody}`}>
      <p>
        <span className={styles.gradientColor}>Semester 1: </span>3.63{" "}
        <span className={styles.grey}>/ 4.3</span>
      </p>
    </div>
  </div>
);

const SideBar = ({ conversionArr }) => {
  return (
    <div className={styles.sideBar}>
      <Link to="/">
        <img src={logo} alt="logo" className={styles.logoImage} />
      </Link>
      <div className={styles.body}>
        <ConversionChart conversionArr={conversionArr} />
        <Summary />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    conversionArr: state.conversionArr,
  };
};

export default connect(mapStateToProps)(SideBar);