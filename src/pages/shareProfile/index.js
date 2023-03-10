import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

function ShareProfile(props) {
  const { data } = props;
  const { query } = useRouter();

  const userCode = query?.userCode ? query?.userCode : query?.companyUserCode;
  const params = query?.userCode ? "userCode" : "companyUserCode";
  4;

  // console.log("datayyyy", data);

  if (!userCode) {
    return <div>invalid user code</div>;
  }
  return (
    <div>
      <Head>
        <meta property="og:image" content={data.cardImageURL} key="image" />
        <meta property="og:title" content={data.title} key="title" />
        <meta
          property="og:description"
          content="Sean Connery found fame and fortune as the
           suave, sophisticated British agent, James Bond."
        />

        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400"></meta>
      </Head>
      <div className="d-flex align-item-center justify-content-center">
        <iframe
          src={`https://dynamiclinks-9d64a.web.app/shareProfile?${params}=${userCode}`}
          className="iframe-cont"
          title="W3Schools Free Online Web Tutorials"
        ></iframe>
      </div>
    </div>
  );
}

export async function getServerSideProps({ res, query }) {
  res.setHeader("Cache-Control", "no-store");
  const userCode = query.userCode ? query?.userCode : query?.companyUserCode;
  const params = query?.userCode ? "userCode" : "companyUserCode";

  const response = await fetch(
    `https://dev.elred.io/noSessionPreviewCardScreenshot?${params}=${userCode}`,
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
  const result = data?.result && data?.result?.length && data?.result[0];

  return {
    props: { data: result }, // will be passed to the page component as props
  };
}
export default ShareProfile;
