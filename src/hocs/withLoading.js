import React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import makeStyles from "@material-ui/core/styles/makeStyles";

const gridContainerStyle = makeStyles({
  root: {
    height: "100vh"
  }
});

function withLoading(Component, { isLoading, errorMessage }, { ...props }) {
  const style = gridContainerStyle();
  if (isLoading)
    return (
      <Grid classes={style} container justify="center" alignItems="center">
        <CircularProgress />
      </Grid>
    );
  if (errorMessage)
    return (
      <Grid classes={style} container justify="center" alignItems="center">
        <Alert severity="error">{errorMessage}</Alert>
      </Grid>
    );
  return <Component {...props} />;
}

withLoading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
};
withLoading.defaultProps = {
  errorMessage: null
};

export default withLoading;
