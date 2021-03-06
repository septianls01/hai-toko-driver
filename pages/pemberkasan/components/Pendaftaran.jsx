import { AssignmentInd, KeyboardBackspace } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { Link } from '@mui/material';
import React from 'react';

const useStyle = makeStyles(() => ({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
  },
  icon: {
    padding: '0px 10px 0px 0px',
    cursor: 'pointer',
  },
  iconK: {
    fontSize: 30,
    color: '#d3455b',
  },
  p: {
    paddingBottom: 2,
    fontSize: 16,
  },
  bioData: {
    color: '#d3455b',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '2px solid #dfe6ed',
  },
  iconBio: {
    paddingRight: 15,
  },
  iconB: {
    fontSize: 18,
  },
  text: {
    fontWeight: 600,
    fontSize: 18,
  },
}));

const Pendaftaran = () => {
  const classes = useStyle();
  return (
    <>
      <div className={classes.header}>
        <div className={classes.icon}>
          <Link href="/dashboardPending">
            <KeyboardBackspace className={classes.iconK} />
          </Link>
        </div>
        <p className={classes.p}>Formulir Pendaftaran</p>
      </div>
      <div className={classes.bioData}>
        <div style={{ display: 'flex', alignItems: 'center' }} className={classes.iconBio}>
          <AssignmentInd style={{ fontSize: '30px' }} className={classes.iconB} />
        </div>
        <p className={classes.text}>Biodata</p>
      </div>
    </>
  );
};

export default Pendaftaran;
