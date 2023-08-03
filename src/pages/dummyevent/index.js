import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function Dummyevent(props) {
  const images = ["2.png", `3.png`, "5.png", `7.png`];
  const router = useRouter();
  const { query } = router;

  const imageName = images.filter((i) => i === query.page).length
    ? query.page
    : "2.png";

  return (
    <>
      <Head>
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta
          property="og:image"
          content={
            "/events/screenshots_63aad78bb38aa1d755b495611691057330867.png"
          }
          key="image"
        />
        <meta property="og:title" content={"dummy events"} key="title" />
        <meta property="og:description" content={"dummy events description"} />
      </Head>
      <div className="d-flex flex-column align-items-center justify-content-center height-100">
        <div
          onClick={() => {
            const index = images.findIndex((i) => query.page === i);
            if (index === 3) {
              router.push(`/dummyevent`);
            } else if (index > 0) {
              const imagename = images[index + 1];
              router.push(`?page=${imagename}`);
            } else {
              router.push(`?page=3.png`);
            }
          }}
        >
          <Image
            src={`/events/${imageName}`}
            style={{ height: "100vh" }}
            height={100}
            width={350}
          />
        </div>
      </div>
    </>
  );
}

const getInitialProps = async (ctx) => {
  console.log(ctx, "initilal");
  return {};
};

export default Dummyevent;
