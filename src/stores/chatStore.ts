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

interface IMessage {
  senderId: string;
  receiverId: string;
  content: string;
  createdDate: string;
}

interface IMessagesResponse {
  messages: IMessage[];
  userName: string;
  firstName: string;
  lastName: string;
}

class ChatStore {
  @observable public chats = observable.map<string, IMessage[]>([]);
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
    this.socket?.on('user joined', this.handleUserJoin);

    this.socket?.on('new message', this.handleNewMessages);

    this.socket?.on('messages list', this.handleNewMessage);
  }

  @action handleEnterChat = (receiverId: string, receiverName: string, room: string) => {
    this.socket?.emit('enter chat', {
      userName: this.authStore.user?.userName,
      userId: this.authStore.user?.userId,
      receiverId,
      receiverName,
      room,
    })
  };

  @action handleNewMessages = (username: string, data: IMessage) => {
    const currentChats = this.chats.get(username) || [];
    this.chats.set(username, [...currentChats, data]);
  };

  @action handleNewMessage = (data: IMessagesResponse) => {
    const currentChats = this.chats.get(data.userName) || [];
    this.chats.set(data.userName, [...currentChats, ...data.messages]);
  };

  @action handleUserJoin = (_: string) => {
    // TODO ...need to implememt
  };

  @action handleRecents = (data: IRecentChat[]) => {
    this.recentChats = data;
  };

  @action handleFriends = (data: IFriend[]) => {
    this.friends = data;
  };

  @action handleSend = (chatInput: string) => {
    this.socket?.emit('new message', chatInput);
  };
}

export default ChatStore;
