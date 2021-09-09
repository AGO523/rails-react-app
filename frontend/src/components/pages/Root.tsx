import { ComponentProps } from 'react';
import { motion } from "framer-motion";
import Image01 from "../../images/main-image.jpeg"

import { makeStyles, Theme } from "@material-ui/core/styles"
import Box from "@material-ui/core/Box"
import {
  // useHistory,
  Link
} from "react-router-dom"
import { Typography } from "@material-ui/core"

const backgroundImage =
  'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    marginTop: "2rem"
  },
  link: {
    textDecoration: "none"
  }
}))

export const Root = () => {
  const classes = useStyles()
  // const history = useHistory()
  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: 800 }}
      exit={{ x: -800 }}
      transition={{ duration: 0.4 }}>
      <div className="App">
        <img style={{ display: 'none' }} src={Image01} alt="increase priority" />
        <div className="module--spacing--small"></div>
        <div>
          <Box textAlign="center" className={classes.box}>
            <Typography variant="h6" align="center" color="inherit" >
              <Link to="/signup" className={classes.link}>
                ユーザー登録
              </Link>
              してサービスを使う
            </Typography>
          </Box>
        </div>
        <Box textAlign="center" className={classes.box}>
          <Typography variant="h6">
            <Link to="/abouts" className={classes.link}>
              About
            </Link>
          </Typography>
        </Box>
      </div>
    </motion.div>
  );
}

export default Root;
