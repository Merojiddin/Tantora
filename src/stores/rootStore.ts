import { ApolloClient } from 'apollo-boost';

import AuthStore from 'stores/authStore';
import ChatStore from 'stores/chatStore';
import LoginStore from 'stores/loginStore';
import RegisterStore from 'stores/registerStore';
import { client } from 'client';
import { Socket } from 'hooks/useSocket';

export class RootStore {
  public authStore = new AuthStore(this);
  public chatStore = new ChatStore(this);
  public loginStore = new LoginStore(this);
  public registerStore = new RegisterStore(this);

  get socket(): SocketIOClient.Socket | undefined {
    return this._socket.io;
  }

  constructor(public appClient: ApolloClient<unknown>, private _socket: Socket) {
    if (!_socket.io) {
      _socket.connect();
    }
  }
}

export default new RootStore(client, Socket.getInstance());
