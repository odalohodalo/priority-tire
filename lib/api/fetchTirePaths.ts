import client from "@/lib/api/apolloClient";
import { GET_ALL_TIRES } from "@/graphql/schema/tires/queries";
import { Tire } from "@/types/tiresTypes";

export const fetchTirePaths = async () => {
  const { data } = await client.query({
    query: GET_ALL_TIRES,
  });

  return data.tires.map((tire: Tire) => ({
    params: { id: tire?.id?.toString() },
  }));
};
