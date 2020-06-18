import { observable, computed, action } from 'mobx';
import io from 'socket.io-client';

import env from '@config/env';

export class Socket {
  @observable private _io?: SocketIOClient.Socket;
  public static _instance: Socket | null = null;

  @computed get io(): SocketIOClient.Socket | undefined {
    return this._io;
  }

  public static getInstance = (): Socket => {
    if (Socket._instance) return Socket._instance;

    const socket = new Socket();
    Socket._instance = socket;

    return socket;
  };

  @action public connect = (room?: string) => {
    if (this._io === undefined) {
      this._io = io(env.chatUrl + (room ? `/${room}` : ''));
    }
  };
}

const useSocket = (): Socket => {
  return Socket.getInstance();
};

export default useSocket;
