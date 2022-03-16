import { AssignmentInd } from "@material-ui/icons";
import { Grid } from "@mui/material";
import React from "react";
import style from "styles/profile.module.css";

const DataDriver = () => {
  return (
    <div>
      <div className={style.headDriver}>
        <AssignmentInd className={style.iconHead} />
        <div className={style.textDriver}>Biodata</div>
      </div>
      <div className={style.mainDriver}>
        <div className={style.onePart}>
          <div className={style.contentDapri}>NIK</div>
          <div className={style.accountDriver}>33200391*****</div>
        </div>
        <div className={style.twoPart}>
          <Grid xs={4} className={style.onePart}>
            <div className={style.contentDapri}>Tanggal Lahir</div>
            <div className={style.accountDriver}>12 Juni 1983</div>
          </Grid>
          <Grid xs={4} className={style.onePart}>
            <div className={style.contentDapri}>Usia</div>
            <div className={style.accountDriver}>37 Tahun</div>
          </Grid>
        </div>
        <div className={style.onePart}>
          <div className={style.contentDapri}>Tempat Lahir</div>
          <div className={style.accountDriver}>Jakarta</div>
        </div>
        <div className={style.onePart}>
          <div className={style.contentDapri}>Jenis Kelamin</div>
          <div className={style.accountDriver}>Pria</div>
        </div>
        <div className={style.onePart}>
          <div className={style.contentDapri}>Alamat Sesuai KTP</div>
          <div className={style.accountDriver}>
            Jl. soekarno no 23 RT5 RW1 batealit, kota jepara.
          </div>
        </div>
        <div className={style.onePart}>
          <div className={style.contentDapri}>Alamat Domisili</div>
          <div className={style.accountDriver}>
            Jl. karangmadu II gang 3 RT32 RW2 kedung mundu, kota semarang.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDriver;
