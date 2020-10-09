import React from "react";

import { ReactComponent as HelmetLogo } from "../../assets/helmet-logo.svg";

import classes from "./Badge.module.scss";

const Badge = () => (
  <div className={classes.LogoWrap}>
    <HelmetLogo className={classes.Logo} />
    <h4 className={classes.LogoName}>OEBALUS</h4>
  </div>
);

export default Badge;
