import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function ShareCard(props) {
  const { data } = props;
  const { query } = useRouter();

  const userCode = query.userCode ? query.userCode : query.companyUserCode;

  if (!userCode) {
    return <div>invalid user code</div>;
  }
  return (
    <div>
      <Head>
        <meta property="og:title" content={data?.title ?? ""} key="title" />
        <meta property="og:image" content={data.cardImageURL} key="image" />
        <meta property="og:description" content={data?.summary ?? ""} />
      </Head>
      <div className="d-flex align-item-center justify-content-center">
        <iframe
          src={`https://dynamiclinks-9d64a.web.app/shareProfile?userCode=${userCode}`}
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
  const { userCode } = query;

  const response = await fetch(
    `https://dev.elred.io/noSessionPreviewCardScreenshot?userCode=${userCode}`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );

  console.log(response);

  const data = await response.json();
  console.log("fetch image data", data);
  const result = data.result && data.result.length && data.result[0];

  return {
    props: { data: result }, // will be passed to the page component as props
  };
}
export default ShareCard;
