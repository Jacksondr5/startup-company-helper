import React, { FormEvent, MouseEvent } from 'react';
import { StartupFeatureType } from './models/Features';
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
  Typography,
  WithStyles,
  createStyles,
  withStyles
} from '@material-ui/core';
import { StartupFeatureVM } from './App';
import { ArrowUpward, ArrowDownward } from '@material-ui/icons';

const styles = createStyles({
  counter: {
    flexGrow: 1
    // width: 200,
  }
});

interface Props extends WithStyles<typeof styles> {
  featureVMList: StartupFeatureVM[];
  onFeatureListUpdated: (
    name: StartupFeatureType,
    count: number
  ) => (event: MouseEvent<SVGSVGElement>) => void;
}

const FeatureChecklist = (props: Props) => {
  return (
    <Grid container alignContent="stretch">
      {props.featureVMList.map(feature => (
        <Grid key={feature.name} className={props.classes.counter} item>
          <Grid container spacing={0}>
            <Grid item md={3}>
              <Typography variant="body1">
                {feature.name.replace(/([A-Z])/g, ' $1')}
              </Typography>
            </Grid>
            <Grid item md={3}>
              <Typography variant="body2">{feature.count}</Typography>
            </Grid>
            <Grid item md={6}>
              <Grid container direction="column" spacing={0}>
                <Grid item md={6}>
                  <ArrowUpward
                    onClick={props.onFeatureListUpdated(
                      feature.name,
                      feature.count + 1
                    )}
                  />
                </Grid>
                <Grid item md={6}>
                  <ArrowDownward
                    onClick={props.onFeatureListUpdated(
                      feature.name,
                      feature.count - 1
                    )}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(FeatureChecklist);
