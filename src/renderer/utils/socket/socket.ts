import { Manager } from 'socket.io-client'

export default class IoManager {
  OPEN = 'open'
  CLOSED = 'closed'
  _manager = null
  constructor({
    url,
    paths = [],
    autoConnect = true,
    query = {}
  }) {
    this.init(url, paths, autoConnect, query)
  }
  init(url: string, paths: string[], autoConnect: boolean, query: object) {
    this._manager = new Manager(url, {
      autoConnect,
      query,
      transports: ['websocket', 'polling'],
    })
    this.initSockets(paths)
  }
  getManager() {
    return this._manager
  }
  initSockets(paths) {
    if (!Array.isArray(paths) || !paths.length) return
    paths.forEach(path => {
      this.addSocket(path)
    })
  }
  addSocket(path) {
    if (this.getState() !== this.OPEN) {
      this.open()
    }
    this._manager.socket(path)
  }
  getSocket(path) {
    return this._manager?.nsps?.[path]
  }
  sendMessage(path, message) {
    this.getSocket(path).send(message)
  }
  onReceiveMessage(path, callback) {
    this.getSocket(path).on('message', callback)
  }
  bindEvent(path, event, callback) {
    this.getSocket(path).on(event, callback)
  }
  emitEvent(path, event, message) {
    this.getSocket(path).emit(event, message)
  }
  open() {
    this._manager.open()
  }
  getConnectSocketCount() {
    return Reflect.ownKeys(this._manager.nsps).some(item => this._manager.nsps[item].connected)
  }
  closeSocket(path) {
    this.getSocket(path).disconnect()
    // if (!this.getConnectSocketCount()) {
    //   this.close()
    // }
  }
  close() {
    this._manager.disconnect()
  }
  getState() {
    return this._manager._readyState
  }
}
