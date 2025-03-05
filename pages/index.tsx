import { GetServerSideProps } from "next";
import client from "@/lib/api/apolloClient";
import { GET_ALL_TIRES } from "@/graphql/schema/tires/queries";

import HomePage from "@/components/pages/HomePage/HomePage";

import { Tire } from "@/types/tiresTypes";

interface HomePageProps {
  tires: Tire[];
}

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  const { data } = await client.query({
    query: GET_ALL_TIRES,
  });

  return {
    props: {
      tires: data.tires,
    },
  };
};

export default function Home({ tires }: HomePageProps) {
  return <HomePage tires={tires} />;
}
