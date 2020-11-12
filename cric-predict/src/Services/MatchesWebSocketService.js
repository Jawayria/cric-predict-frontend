class MatchesWebSocketService {
  static instance = null;
  callback = null;

  static getInstance() {
    if (!MatchesWebSocketService.instance) {
      MatchesWebSocketService.instance = new MatchesWebSocketService();
    }
    return MatchesWebSocketService.instance;
  }

  constructor() {
    this.socketRef = null;
  }

  connect() {
    this.socketRef = new WebSocket("ws://localhost:8000/matches-data/");
    this.socketRef.onopen = () => {
      console.log('WebSocket open');
    };
    this.socketRef.onmessage = e => {
        const matches_list = JSON.parse(e.data)
        matches_list.map(match => {
            match.date = new Date(match.time).toLocaleDateString()
            match.time = new Date(match.time).toLocaleTimeString()
        })

        if (this.callback === null) {
          return;
        }
        this.callback(matches_list);
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
  sendRequest(league_id) {
    if(this.socketRef.OPEN)
    {
        this.socketRef.send(league_id)
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

const WebSocketInstance = MatchesWebSocketService.getInstance();

export default WebSocketInstance;
