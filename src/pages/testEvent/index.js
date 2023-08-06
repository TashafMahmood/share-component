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
        <meta
          property="og:title"
          content={"Future Forward Season 3 Episode 1"}
          key="title"
        />
        <meta
          property="og:description"
          content={
            "This is the first meeting of the new YPO year 23-24 to be held at Mumbai. Kindly be available at St Regis at sharp 6, after which forum rules apply."
          }
        />
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
