import React, { useContext } from "react"
import { Link } from "react-router-dom"

import { makeStyles, Theme } from "@material-ui/core/styles"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import PersonIcon from "@material-ui/icons/Person"
import SearchIcon from "@material-ui/icons/Search"
import BorderColorIcon from '@material-ui/icons/BorderColor';
import ChatBubbleIcon from "@material-ui/icons/ChatBubble"

import { AuthContext } from "App"

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "inherit"
  },
  linkBtn: {
    textTransform: "none",
    marginLeft: theme.spacing(1)
  },
  bar: {
    backgroundColor: "#f48fb1"
  }
}))

const Header: React.FC = () => {
  const { loading, isSignedIn } = useContext(AuthContext)
  const classes = useStyles()

  // 認証済みかどうかで表示ボタンを変更
  const AuthButtons = () => {
    if (!loading) {
      if (isSignedIn) {
        return (
          <>
            <IconButton
              component={Link}
              to="/users"
              edge="start"
              className={classes.linkBtn}
              color="inherit"
            >
              <SearchIcon />
              先生を探す
            </IconButton>
            <IconButton
              component={Link}
              to="/posts"
              edge="start"
              className={classes.linkBtn}
              color="inherit"
            >
              <BorderColorIcon />
              ポスト
            </IconButton>
            <IconButton
              component={Link}
              to="/chat_rooms"
              edge="start"
              className={classes.linkBtn}
              color="inherit"
            >
              <ChatBubbleIcon />
              チャット
            </IconButton>
            <IconButton
              component={Link}
              to="/home"
              edge="start"
              className={classes.linkBtn}
              color="inherit"
            >
              <PersonIcon />
              ホーム
            </IconButton>
          </>
        )
      } else {
        return (
          <>
            <IconButton
              component={Link}
              to="/signin"
              edge="start"
              className={classes.linkBtn}
              color="inherit"
            >
              <ExitToAppIcon />
            </IconButton>
          </>
        )
      }
    } else {
      return <></>
    }
  }

  return (
    <>

      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h5"
            className={classes.title}
          >
            TeamTeaching
          </Typography>
          <AuthButtons />
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
