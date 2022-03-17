// import React from 'react';
// import { Search } from "@material-ui/icons";
// import { Autocomplete } from '@mui/material';

// const search = () => {
//   return (
//        <Stack spacing={2} sx={{ width: 300 }}>
//       <Autocomplete
//         id="search-store"
//         required
//         name="name"
//         className={classes.inputField}
//         startAdornment={(
//               <InputAdornment position="start" className={classes.icon}>
//                 <Search />
//               </InputAdornment>
//           )}
//           renderInput={(params) => <TextField {...params} />}
//       />
//       <Stack/>

//   );
// };

// export default search;

import { React, useState } from 'react';
import TextField from '@mui/material/TextField';

const Search = () => {
  return (
    <div className="main">
      <h1>React Search</h1>
      <div className="search">
        <TextField id="outlined-basic" variant="outlined" fullWidth label="Search" />
      </div>
    </div>
  );
};

export default Search;
