import {WS_BASE_URL} from '../base_url.js';
class LeaguesWebSocketService {
  static instance = null;
  callback = null;

  static getInstance() {
    if (!LeaguesWebSocketService.instance) {
      LeaguesWebSocketService.instance = new LeaguesWebSocketService();
    }
    return LeaguesWebSocketService.instance;
  }

  constructor() {
    this.socketRef = null;
  }

  connect() {
    console.log("Connected")
    this.socketRef = new WebSocket(WS_BASE_URL+"leagues-data/");
    this.socketRef.onopen = () => {
      console.log('WebSocket open');
    };
    this.socketRef.onmessage = e => {
        const parsedData = JSON.parse(e.data);
        const command = parsedData.command;
        if (this.callback === null) {
          return;
        }
        this.callback(parsedData);
    };

    this.socketRef.onerror = e => {
      console.log(e.message);
    };
    this.socketRef.onclose = () => {
      console.log("WebSocket closed let's reopen");
      this.connect();
    };
  }
  addCallback(leaguesCallback) {
    this.callback = leaguesCallback;
  }
  sendRequest() {
    if(this.socketRef.OPEN)
    {
        this.socketRef.send("hi")
    }
  }
  waitForSocketConnection(callback){
    const socket = this.socketRef;
    const recursion = this.waitForSocketConnection;
    setTimeout(
      function () {

        if (socket.readyState === 1) {
          console.log("Connection is made")
          if(callback != null){
            callback();
          }
          return;

        } else {
          console.log("wait for connection...")
          recursion(callback);
        }
      }, 1)};

      state() {
    return this.socketRef.readyState;
  }
 }

const WebSocketInstance = LeaguesWebSocketService.getInstance();

export default WebSocketInstance;
