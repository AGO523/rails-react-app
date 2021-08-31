import React, { useEffect, useState, useContext } from "react"
import { RouteComponentProps } from "react-router-dom"
import { motion } from "framer-motion";

import { makeStyles, Theme } from "@material-ui/core/styles"

import { getChatRoom } from "lib/api/chat_rooms"
import { User, MessageData } from "interfaces/index"


const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: "0 auto"
  },
  formWrapper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 340
  },
  textInputWrapper: {
    width: "100%"
  },
  button: {
    marginLeft: theme.spacing(1)
  }
}))

type UserPagesProps = RouteComponentProps<{ id: string }>

// 個別のチャットルームページ
const UserPages: React.FC<UserPagesProps> = (props) => {
  const classes = useStyles()

  const id = parseInt(props.match.params.id) // URLからidを取得
  console.log(id)

  const [loading, setLoading] = useState<boolean>(true)
  const [otherUser, setOtherUser] = useState<User>()
  const [messages, setMeesages] = useState<MessageData[]>([])



  useEffect(() => {
    async function handleGetChatRoom() {
      try {
        const res = await getChatRoom(id)
        console.log(res)

        if (res?.status === 200) {
          setOtherUser(res?.data.otherUser)
          setMeesages(res?.data.messages)
        } else {
          console.log("No other user")
        }
      } catch (err) {
        console.log(err)
      }

      setLoading(false)
    }
    handleGetChatRoom()
  }, [id])





  return (
    <>
      {
        !loading ? (
          <motion.div
            animate={{ x: 0 }}
            initial={{ x: 800 }}
            exit={{ x: -800 }}
            transition={{ duration: 0.4 }}>
          </motion.div >
        ) : (
          <></>
        )
      }
    </>
  )
}

export default UserPages
