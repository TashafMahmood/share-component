import { baseURL, redirectURL } from "@/config";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function ShareProfile(props) {
  const { data } = props;
  const { query } = useRouter();

  const userCode = query?.userCode ? query?.userCode : query?.companyUserCode;
  const params = query?.userCode ? "userCode" : "companyUserCode";

  useEffect(() => {
    // const a = document.createElement("a");
    // a.href = `${redirectURL}shareProfile?${params}=${userCode}`;
    // a.click();
  }, []);

  if (!userCode) {
    return <div>invalid user code</div>;
  }
  return (
    <>
      <Head>
        <meta property="og:title" content={data.profileTitle} key="title" />
        <meta
          property="og:description"
          content={data.description}
          key="description"
        />
        <meta property="og:image" content={data.cardImageURL} key="image" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
      </Head>
      <div className="d-flex align-item-center justify-content-center height-100">
        {/* <img style={{ marginTop: 10 }} src="/Frame 15133.jpg" alt="img" /> */}

        <iframe
          allow="web-share"
          src={`https://elred-webview.vercel.app?${params}=${userCode}`}
          // src={`https://dynamiclinks-9d64a.web.app/shareProfile?${params}=${userCode}`}
          className="iframe-cont"
          title=""
        ></iframe>
      </div>
    </>
  );
}

export async function getServerSideProps({ res, query }) {
  res.setHeader("Cache-Control", "no-store");
  const userCode = query.userCode ? query?.userCode : query?.companyUserCode;
  const params = query?.userCode ? "userCode" : "companyUserCode";

  const response = await fetch(
    `${baseURL}noSessionPreviewCardScreenshot?${params}=${userCode}`,
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
