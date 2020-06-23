export default (
  userName: string,
  receiverName: string,
  userId: string,
  receiverId: string
): string => {
  const name =
    userName < receiverName
      ? `${userName}-${receiverName}`
      : `${receiverName}-${userName}`;
  const id =
    userId < receiverId ? `${userId}-${receiverId}` : `${receiverId}-${userId}`;

  return `${name}:${id}`;
};
