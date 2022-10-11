type MsgType = 'TEXT' | 'VIDEO' | 'AUDIO' | 'IMAGE'
export interface Msg {
  nickName: string
  userId: string
  msgId: string
  msgType: MsgType,
  isCurUser: boolean,
  isSys: boolean,
  content: string
}

