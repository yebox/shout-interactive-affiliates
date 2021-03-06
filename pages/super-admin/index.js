import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";
import CircularProgress from "@mui/material/CircularProgress";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/super-admin/managers");
  });
  return (
    <>
      <div className="mx-auto my-auto grid justify-items-center items-center content-center mt-[300px]">
        <CircularProgress color="inherit" />
      </div>
    </>
    // <div className={styles.container}>
    //   <Head>
    //     <title>Shout Interactive</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   {/* <div className={styles.container}></div> */}
    // </div>
  );
};

export default Index;
