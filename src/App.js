import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import PopulationPyramidChart from "./containers/PopulationPyramidChart";
import EthnicityChart from "./containers/EthnicityChart";
import InsuranceChart from "./containers/InsuranceChart";

function App() {
  return (
    <Container maxWidth={false}>
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
        </Grid>{" "}
        <Grid item xs={12} md={6}>
          <Box p={2} boxShadow={2}>
            <InsuranceChart />
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
