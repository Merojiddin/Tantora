export default {
  authToken: process.env.REACT_APP_AUTH_TOKEN || '',
  chatUrl: process.env.REACT_APP_CHAT_URL || 'http://localhost:7070',
  backendUrl:
    process.env.REACT_APP_BACKEND_URL || 'http://localhost:9999/graphql',
};
