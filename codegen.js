module.exports = {
  "schema": [
    "http://localhost:9999/graphql"
  ],
  "documents": [
      "./src/**/*.tsx",
      "./src/**/*.ts"
  ],
  "overwrite": true,
  "generates": {
      "./src/generated/graphql.tsx": {
          "plugins": [
              "typescript",
              "typescript-operations",
              "typescript-react-apollo"
          ],
          "config": {
            "skipTypename": false,
            "withHooks": true,
            "withHOC": false,
            "withComponent": false
          }
      },
      "./graphql.schema.json": {
        "plugins": [
              "introspection"
        ]
      }
  }
};