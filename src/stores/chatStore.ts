import { observable, action, when } from 'mobx';

import { RootStore } from 'stores/rootStore';
import AuthStore from "stores/authStore";

interface IFriend {
  userId: string;
  userName: string;
  firstName: string;
  lastName: string;
}

interface IRecentChat extends IFriend {
  createdDate: string;
}

class ChatStore {
  @observable public friends: IFriend[] = [];
  @observable public recentChats: IRecentChat[] = [];

  get socket(): SocketIOClient.Socket | undefined {
    return this.rootStore.socket;
  }

  get authStore(): AuthStore {
    return this.rootStore.authStore;
  }
  
  constructor(private rootStore: RootStore) {
    this.init();
  }

  private init = async () => {
    await when(() => this.socket !== undefined);
    await when(() => this.authStore.isAuth);

    // init emitters
    this.socket?.emit('get recent', this.authStore.user?.userId);
    this.socket?.emit('get friends', this.authStore.user?.userId);

    // listeners
    this.socket?.on('recent messages', this.handleRecents);
    this.socket?.on('friends', this.handleFriends);
  }

  @action handleEnterChat = (receiverid: string, room: string) => {
    this.socket?.emit('enter chat', {
      username: this.authStore.user?.userName,
      userId: this.authStore.user?.userId,
      receiverid,
      room,
    })
  }

  @action handleRecents = (data: IRecentChat[]) => {
    console.log('HANDLE RECENT', data);
    this.recentChats = data;
  }

  @action handleFriends = (data: IFriend[]) => {
    this.friends = data;
  }
}

export default ChatStore;
