import React from "react";
import { ArrowBack } from "@material-ui/icons";

import style from "styles/profile.module.css";

const back = () => {
  return (
    <div>
      <ArrowBack className={style.iconBack} />
    </div>
  );
};

export default back;
