import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import PopulationPyramidChart from "../containers/PopulationPyramidChart";
import EthnicityBarChart from "../containers/EthnicityBarChart";
import InsuranceBarChart from "../containers/InsuranceBarChart";
import WaterSource from "../containers/WaterSourceBarChart";
import ToiletTypeBarChart from "../containers/ToiletTypeBarChart";
import DeliveryPlacePieChart from "../containers/DeliveryPlacePieChart";
import PersonnelPieChart from "../containers/PersonnelPieChart";
import MortalityBarChart from "../containers/MortalityBarChart";
import YearSelector from "../containers/YearSelector";
import CloseButton from "../containers/CloseButton";
import DisabilityChart from "../containers/DisabilityChart";

function Layout({ data }) {
  return (
    <Container maxWidth={false}>
      <Grid item xs={12}>
        <Grid container justify="flex-end">
          <Box p={1}>
            <CloseButton />
          </Box>
        </Grid>
      </Grid>
      <Grid spacing={1} container>
        <Grid item xs={12}>
          <Box p={2} boxShadow={2}>
            <Grid container justify="flex-start">
              <YearSelector />
            </Grid>
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
                <PopulationPyramidChart data={data} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2} boxShadow={2}>
            <EthnicityBarChart data={data} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2} boxShadow={2}>
            <InsuranceBarChart data={data} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2} boxShadow={2}>
            <WaterSource data={data} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2} boxShadow={2}>
            <ToiletTypeBarChart data={data} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2} boxShadow={2}>
            <DeliveryPlacePieChart data={data} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2} boxShadow={2}>
            <PersonnelPieChart data={data} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2} boxShadow={2}>
            <MortalityBarChart data={data} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2} boxShadow={2}>
            <DisabilityChart data={data} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Layout;
