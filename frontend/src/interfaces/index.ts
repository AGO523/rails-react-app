// サインアップ
export interface SignUpData {
  name: string
  email: string
  password: string
  passwordConfirmation: string
  gender: number
  prefecture: number
  birthday: Date
  image: string
}

// サインイン
export interface SignInData {
  email: string
  password: string
}

// いいね
export interface LikeData {
  id?: number
  fromUserId: number | undefined | null
  toUserId: number | undefined | null
}

export interface GuestSignUpData {
  name: string
  email: string
  password: string
  passwordConfirmation: string
  gender: number
  prefecture: number
  birthday: Date
}

export interface SignUpFormData extends FormData {
  append(name: keyof SignUpData, value: String | Blob, fileName?: string): any
}

export interface SignInFormData extends FormData {
  append(name: keyof SignInData, value: String | Blob, fileName?: string): any
}

export interface GuestSignUpFormData extends FormData {
  append(name: keyof SignUpData, value: String | Blob, fileName?: string): any
}

export interface LikeFormData extends FormData {
  append(name: keyof LikeData, value: String | Blob | undefined, fileName?: string): any
}

// ユーザー
export interface User {
  id: number
  uid: string
  provider: string
  email: string
  name: string
  image: {
    url: string
  }
  gender: number
  birthday: String | number | Date
  profile: string
  prefecture: number
  allowPasswordChange: boolean
  createdAt?: Date
  updatedAt?: Date
}

export interface UpdateUserData {
  id: number | undefined | null
  name?: string
  prefecture?: number
  profile?: string
  image?: string
}

export interface UpdateUserFormData extends FormData {
  append(name: keyof UpdateUserData, value: String | Blob, fileName?: string): any
}

// チャットルーム
export interface ChatRoom {
  chatRoom: {
    id: number
  }
  otherUser: User,
  lastMessage: MessageData
}

export interface ChatRoomFormData extends FormData {
  append(name: keyof MessageData, value: String | Blob, fileName?: string): any
}

// メッセージ
export interface MessageData {
  chatRoomId: number
  userId: number | undefined
  content: string
  createdAt?: Date
}


// 投稿機能
export interface Post {
  user_id: any
  id: string
  otherUser: User
  content: string
  image?: {
    url: string
  }
}

export interface PostApiJson {
  posts: Post[]
}
