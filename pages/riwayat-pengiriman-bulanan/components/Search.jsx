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

import React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

const Search = () => {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        
        renderInput={(params) => <TextField {...params} label="freeSolo" />}
      />
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  );
};

export default Search;
