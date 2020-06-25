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

interface INewMessage extends IMessage {
  senderName: string;
  receiverName: string;
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

    this.socket?.io.on('connect', () => {
      console.log(this.socket?.id); // 'G5p5...'
    });

    // listeners
    this.socket?.on('recent messages', this.handleRecents);
    this.socket?.on('friends', this.handleFriends);
    this.socket?.on('user joined', this.handleUserJoin);

    this.socket?.on('new message', this.handleNewMessage);
    this.socket?.on('messages list', this.handleNewMessages);
  };

  @action handleEnterChat = async (
    receiverId: string,
    receiverName: string,
    room: string
  ) => {
    await when(() => this.socket !== undefined);
    await when(() => this.authStore.isAuth);

    this.socket?.emit('enter chat', {
      userName: this.authStore.user?.userName,
      userId: this.authStore.user?.userId,
      receiverId,
      receiverName,
      room,
    });
  };

  @action handleNewMessages = (data: IMessagesResponse) => {
    const currentChats = this.chats.get(data.userName) || [];
    this.chats.set(data.userName, [...currentChats, ...data.messages]);
  };

  @action handleNewMessage = (data: INewMessage) => {
    const userName =
      data.senderId === this.authStore.user?.userId
        ? data.receiverName
        : data.senderName;
    const currentChats = this.chats.get(userName) || [];

    this.chats.set(userName, [...currentChats, data]);
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
