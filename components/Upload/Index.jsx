import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@material-ui/styles";

const Input = styled("input")({
  display: "none",
});

const Index = () => {
  const [preview, setPreview] = React.useState({});

  return (
    <>
      <Stack direction="column" alignItems="start" spacing={2}>
        <label htmlFor="contained-button-file">
          <Input
            name="upload"
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button variant="contained" component="span">
            Upload KTP
          </Button>
        </label>
        <label htmlFor="contained-button-file">
          <Input
            name="upload"
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button variant="contained" component="span">
            Upload KTP
          </Button>
        </label>
        <label htmlFor="contained-button-file">
          <Input
            name="upload"
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button variant="contained" component="span">
            Upload KTP
          </Button>
        </label>
        <label htmlFor="contained-button-file">
          <Input
            name="upload"
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button variant="contained" component="span">
            Upload KTP
          </Button>
        </label>
      </Stack>
    </>
  );
};

export default Index;
