import IoManager from "./socket";


const ioManager = new IoManager({
  url: 'http://localhost:3000'
})


export default {
  install(app, options) {
    app.config.globalProperties.$IM = ioManager
  }
}
