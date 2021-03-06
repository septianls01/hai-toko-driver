import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/material';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Express' },
    { key: 1, label: '12 Produk' },
    { key: 2, label: 'Toko' },
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Box
      // style={{ marginBottom: '20px' }}
      sx={{
        display: 'flex',
        justifyContent: 'start',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;

        // if (data.label === 'React') {
        //   icon = <TagFacesIcon />;
        // }

        return (
          <ListItem key={data.key}>
            <Chip icon={icon} label={data.label} onDelete={data.label === 'React' ? undefined : handleDelete(data)} />
          </ListItem>
        );
      })}
    </Box>
  );
}
