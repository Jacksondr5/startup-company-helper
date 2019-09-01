import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  createStyles,
  WithStyles,
  withStyles
} from '@material-ui/core';
import { StartupComponentVM } from './App';

const styles = createStyles({
  media: {},
  card: { height: 250 }
});

interface Props extends WithStyles<typeof styles> {
  componentVM: StartupComponentVM;
  imgPath: string;
}

const ComponentCard = (props: Props) => {
  return (
    <Card className={props.classes.card}>
      <CardActionArea>
        <CardMedia
          className={props.classes.media}
          component="img"
          image={props.imgPath}
          title={props.componentVM.name}
        />
        <CardContent>
          <Typography variant="body1">
            {props.componentVM.name.replace(/([A-Z])/g, ' $1')}
          </Typography>
          <Typography variant="body1">{props.componentVM.count}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(ComponentCard);
