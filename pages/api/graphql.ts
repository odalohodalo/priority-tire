import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const server = new ApolloServer({});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({ req, res }),
});
