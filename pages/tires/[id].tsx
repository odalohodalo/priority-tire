import { GetStaticPaths, GetStaticProps } from "next";
import client from "@/lib/api/apolloClient";
import { GET_ALL_TIRES, GET_TIRE_BY_ID } from "@/graphql/schema/tires/queries";
import ProductPage from "@/components/pages/ProductPage/ProductPage";

import { Tire } from "@/types/tiresTypes";
import { fetchTirePaths } from "@/lib/api/fetchTirePaths";

interface ProductProps {
  tire: Tire;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await fetchTirePaths();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: GET_TIRE_BY_ID,
    variables: { id: Number(params?.id) },
  });

  return {
    props: {
      tire: data.tire,
    },
  };
};

export default function Product({ tire }: ProductProps) {
  return <ProductPage tire={tire} />;
}
