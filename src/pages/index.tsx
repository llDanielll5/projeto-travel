import Header from "@/components/home/Header";
import Head from "next/head";
import { Box, styled } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
        <title>Projeto Travel</title>
        <meta
          name="description"
          content="Modelo criado para estudo canal DanDev"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background>
        <Header />
      </Background>
    </>
  );
}

const Background = styled(Box)`
  height: 100vh;
  width: 100vw;
  background-image: url("/images/background.png");
  background-size: cover;
  background-repeat: no-repeat;
`;
