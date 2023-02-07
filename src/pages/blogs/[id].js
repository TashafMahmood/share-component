import Head from "next/head";
import React from "react";

function BlogsDetails() {
  return (
    <div>
      <Head>
        <meta property="og:title" content="Our Company Website" key="title" />
      </Head>
      <div>details page</div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
export default BlogsDetails;
