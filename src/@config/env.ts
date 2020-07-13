export default {
  authToken: process.env.REACT_APP_AUTH_TOKEN || '',
  chatUrl: process.env.REACT_APP_CHAT_URL || 'http://tantora.io/api-chat',
  backendUrl:
    process.env.REACT_APP_BACKEND_URL || 'http://tantora.io/api/graphql',
};
