import Head from "next/head";
import { getSession } from "next-auth/react";
import Center from "../components/Center";
import Sidebar from "../components/Sidebar";
import Player from "../components/Player";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Clone Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      <div>{/* <Footer /> */}</div>

      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
