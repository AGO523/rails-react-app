import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom"
import { motion } from "framer-motion";

import background from "../../images/top-image.jpeg";


const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: theme.spacing(20, 20, 40),
  },
  heroButtons: {
    marginTop: theme.spacing(8),
  },
}));

export default function Root() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <motion.div
        animate={{ x: 0 }}
        initial={{ x: 800 }}
        exit={{ x: -800 }}
        transition={{ duration: 0.4 }}>
        <CssBaseline />
        <main>
          <div className={classes.heroContent}>
            <Container maxWidth="xl">
              <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
                セーフパーソンを見つけるオンラインカウンセリングサービスです
              </Typography>
              <Typography variant="h4" align="center" color="textPrimary" paragraph>
                「困り感」のある子どもたちが求めている支援者「セーフパーソン」
              </Typography>
              <Typography variant="h4" align="center" color="textPrimary" paragraph>
                安心してわからないこと、困ったことを相談したり聞いたりできる
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={5} justifyContent="center">
                  <Grid item>
                    <Button
                      component={Link}
                      variant="contained"
                      color="inherit"
                      to="/signup"
                    >
                      ユーザー登録
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="inherit"
                      component={Link}
                      to="/abouts"
                    >
                      ABOUT
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
        </main>
      </motion.div>
    </React.Fragment>
  );
}
