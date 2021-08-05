import React from "react"

import { Container, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"

import Header from "components/layouts/Header"

const useStyles = makeStyles(() => ({
  container: {
    marginTop: "2rem"
  }
}))

interface CommonLayoutProps {
  children: React.ReactElement
}

// 全てのページで共通となるレイアウト
const CommonLayout = ({ children }: CommonLayoutProps) => {
  const classes = useStyles()

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container justify-content="center">
            {children}
          </Grid>
        </Container>
      </main>
    </>
  )
}

export default CommonLayout
