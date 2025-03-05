import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { schema } from "../../graphql/schema/tires/schema";

const server = new ApolloServer({ schema });

export default startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({ req, res }),
});
