import Head from "next/head";
import React from "react";

function BlogsDetails(props) {
  const { data } = props;
  return (
    <div>
      <Head>
        <meta property="og:title" content={data.name} key="title" />
        <meta property="og:image" content={data.image.medium} key="image" />
      </Head>
      <div>details page</div>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(context.query);
  const { query } = context;

  const res = await fetch(
    `https://api.tvmaze.com/lookup/shows?thetvdb=${query.id}`
  );
  const data = await res.json();

  console.log(data);

  return {
    props: { data }, // will be passed to the page component as props
  };
}
export default BlogsDetails;
