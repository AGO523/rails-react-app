import client from "lib/api/client"
import { MessageData } from "interfaces/index"

// メッセージを作成
export const createMessage = (data: MessageData) => {
  return client.post("messages", data)
}
