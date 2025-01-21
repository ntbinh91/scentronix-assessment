import { Button, Container, Grid2, Stack, Typography } from '@mui/material';
import React from 'react';

function TemplatePage() {
  return (
    <Container>
      <Grid2 container spacing={2}>
        <Grid2 size={4}>
          <Typography variant="h4">Buttons:</Typography>
          <Stack spacing={1}>
            <Button variant="contained" fullWidth>
              Contained
            </Button>
            <Button variant="outlined" fullWidth>
              Outlined
            </Button>
            <Button variant="text" fullWidth>
              Text
            </Button>
          </Stack>
        </Grid2>
        <Grid2 size={4}></Grid2>
        <Grid2 size={4}></Grid2>
      </Grid2>
    </Container>
  );
}

export default TemplatePage;
