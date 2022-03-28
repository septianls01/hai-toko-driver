import React from 'react';
import { ArrowBack } from '@material-ui/icons';

import style from 'styles/profile.module.css';
import { Link } from '@mui/material';

const back = () => {
  return (
    <div>
      <Link href="/dashboardempty">
        <ArrowBack className={style.iconBack} />
      </Link>
    </div>
  );
};

export default back;
