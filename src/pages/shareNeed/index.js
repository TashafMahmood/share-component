import NotFound from "@/component/notFound";
import { baseURL } from "@/config";
import Head from "next/head";

function ShareNeed(props) {
  const { data, needId, userCode } = props;

  if (!userCode && !needId) {
    return <NotFound />;
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
        <iframe
          allow="web-share"
          src={`https://demo1.elred.io/my-bio/needs/need?needId=${needId}&userCode=${userCode}&t=882489`}
          className="iframe-cont"
          title=""
        ></iframe>
      </div>
    </>
  );
}
// https://demo1.elred.io/my-bio/leads/responding-leads?leadId=64face0939333f74a6861907&userCode=63aad78bb38aa1d755b49561&t=858659
// https://demo1.elred.io/my-bio/needs/need?needId=64facc3139333f74a686139f&userCode=63aad78bb38aa1d755b49561&t=882489
export async function getServerSideProps({ res, query }) {
  res.setHeader("Cache-Control", "no-store");
  const needId = query?.needId ?? "";
  const leadOwner_userCode = query?.leadOwner_userCode ?? "";

  const response = await fetch(
    `${baseURL}noSessionPreviewCardScreenshot?"userCode=${leadOwner_userCode}`,
    {
      cache: "no-cache",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  const result = data?.result && data?.result?.length && data?.result[0];

  return {
    props: { data: result, userCode: leadOwner_userCode, needId }, // will be passed to the page component as props
  };
}
export default ShareNeed;
