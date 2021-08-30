import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: 12,
    maxWidth: 320,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  mainTitle: {
    color: "palevioletred",
  }
});

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.mainTitle} variant="h5" component="h2">
          学習の広場
        </Typography>
        <Typography variant="body2" component="p">
          ・先生たちと一緒に学習する内容を知ることができます。
        </Typography>
        <Typography variant="body2" component="p">
          ・気になる先生のページに行って、その先生の詳しいことを知ることができます。
        </Typography>
        <Typography variant="body2" component="p">
          ・先生に学んだことを知らせることができます。
        </Typography>
      </CardContent>
    </Card>
  );
}
