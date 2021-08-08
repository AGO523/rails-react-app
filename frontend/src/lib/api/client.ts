import applyCaseMiddleware from "axios-case-converter"
import axios from "axios"

// applyCaseMiddleware:
// axiosで受け取ったレスポンスの値をスネークケース→キャメルケースに変換
// または送信するリクエストの値をキャメルケース→スネークケースに変換してくれるライブラリ

// ヘッダーに関してはケバブケースのままで良いので適用を無視するオプションを追加
const options = {
  ignoreHeaders: true
}

let client = applyCaseMiddleware(axios.create({
  baseURL: "http://localhost:3001/api/v1"
}), options)

export default client = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  headers: {
    "Content-Type": "multipart/form-data" // 画像ファイルを取り扱うのでform-dataで送信
  }
})
