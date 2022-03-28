import { KeyboardBackspace } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { Badge } from '@mui/icons-material';
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
        <Link href="/login">
          <div className={classes.icon}>
            <KeyboardBackspace className={classes.iconK} />
          </div>
        </Link>
        <p className={classes.p}>Formulir Pendaftaran</p>
      </div>
      <div className={classes.bioData}>
        <div className={classes.iconBio}>
          <Badge className={classes.iconB} />
        </div>
        <p className={classes.text}>Biodata</p>
      </div>
    </>
  );
};

export default Pendaftaran;
