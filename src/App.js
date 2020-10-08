import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import PopulationPyramidChart from "./containers/PopulationPyramidChart";
import EthnicityChart from "./containers/EthnicityChart";
import InsuranceChart from "./containers/InsuranceChart";
import WaterSource from "./containers/WaterSourceChart";
import ToiletTypeChart from "./containers/ToiletTypeChart";

import { makeStyles } from "@material-ui/core/styles";

const useButtonStyle = makeStyles({
  root: {
    fontSize: "2.5rem"
  }
});

function App() {
  const buttonStyle = useButtonStyle();
  return (
    <Container maxWidth={false}>
      <Grid item xs={12}>
        <Grid container justify="flex-end">
          <Box p={1}>
            <IconButton size="small" component="span">
              <Close classes={buttonStyle} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Grid spacing={1} container>
        <Grid item xs={12}>
          <Box p={2} boxShadow={2}>
            Selector
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box p={2} boxShadow={2}>
            Table
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box p={2} boxShadow={2}>
            <Grid container justify="center">
              <Grid item xs={12} lg={6}>
                <PopulationPyramidChart />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2} boxShadow={2}>
            <EthnicityChart />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2} boxShadow={2}>
            <InsuranceChart />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2} boxShadow={2}>
            <WaterSource />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2} boxShadow={2}>
            <ToiletTypeChart />
          </Box>
        </Grid>
        {Array.from(
          {
            length: 6
          },
          (value, index) => {
            return (
              <Grid item key={index} xs={12} md={6}>
                <Box p={2} boxShadow={2}>{`Chart${index + 1}`}</Box>
              </Grid>
            );
          }
        )}
      </Grid>
    </Container>
  );
}

export default App;
