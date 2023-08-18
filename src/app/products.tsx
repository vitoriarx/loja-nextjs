import { NextPage } from "next";
import head from "next/head";

const Products: NextPage = () => {
  return (
    <>
      <head>
        <title>Nossos produtos</title>
        <meta name="description" content="Conheça todos os nossos produtos" />
        <link rel="icon" href="/favicon.icon" />
      </head>

      <h1>Nossos produtos</h1>
    </>
  );
};

export default Products;
