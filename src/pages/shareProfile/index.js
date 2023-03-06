import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function ShareCard(props) {
  const { data } = props;
  const router = useRouter();

  console.log(router.query.a);
  return (
    <div>
      <Head>
        <meta property="og:title" content={data?.title ?? ""} key="title" />
        <meta property="og:image" content={data.img} key="image" />
        <meta property="og:description" content={data?.summary ?? ""} />
      </Head>
      <div className="d-flex align-item-center justify-content-center">
        <iframe
          src="https://dynamiclinks-9d64a.web.app/shareProfile?userCode=63a552336af986350ae41c63"
          className="iframe-cont"
          title="W3Schools Free Online Web Tutorials"
        ></iframe>
      </div>
    </div>
  );
}

export async function getServerSideProps({ res, query }) {
  // console.log(context.query);
  res.setHeader("Cache-Control", "no-store");

  const response = await fetch(`https://share-component.vercel.app/api/hello`);
  const data = await response.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
export default ShareCard;
