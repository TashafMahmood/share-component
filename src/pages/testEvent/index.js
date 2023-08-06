import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "./index.module.css";

function testEvent(props) {
  return (
    <>
      <Head>
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta
          property="og:image"
          content={"https://test.elred.io/events/1.png"}
          key="image"
        />
        <meta property="og:title" content={"dummy events"} key="title" />
        <meta property="og:description" content={"dummy events description"} />
      </Head>
      <div className="d-flex flex-column align-items-center justify-content-center height-100">
        <iframe
          allow="web-share"
          src={`https://demo1.elred.io/testEvent`}
          // src={`https://dynamiclinks-9d64a.web.app/shareProfile?${params}=${userCode}`}
          className="iframe-cont"
          title=""
        ></iframe>
      </div>
    </>
  );
}

export default testEvent;
