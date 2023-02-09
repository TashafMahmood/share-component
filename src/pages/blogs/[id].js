import Head from "next/head";
import React from "react";

function BlogsDetails(props) {
  const { data } = props;
  return (
      <div>
          <Head>
              <meta http-equiv='Cache-Control' content='public' />
              <meta http-equiv='Cache-Control' content='max-age=1' />
              <meta http-equiv='Cache-Control' content='must-revalidate' />
              <meta httpEquiv='Pragma' content='no-cache' />
              <meta httpEquiv='Expires' content='0' />
              .
              <meta
                  property='og:title'
                  content={data?.name ?? ''}
                  key='title'
              />
              <meta
                  property='og:image'
                  content={`https://random.imagecdn.app/500/150?a=${Math.random()}`}
                  key='image'
              />
              <meta property='og:description' content={data?.summary ?? ''} />
          </Head>
          <div>
              <div className='card m-2 col-4'>
                  <img
                      className='card-img-top'
                      src={data?.show?.image?.medium ?? ''}
                      alt='Card image cap'
                      height={300}
                  />
                  <div className='card-body'>
                      <h5 className='card-title'>{data?.show?.name ?? ''}</h5>
                      <div
                          dangerouslySetInnerHTML={{
                              __html: data?.show?.summary ?? '',
                          }}></div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export async function getServerSideProps(context) {
  // console.log(context.query);
  const { query } = context;

  const res = await fetch(
    `https://api.tvmaze.com/lookup/shows?thetvdb=${query?.id}`
  );
  const data = await res.json();

  console.log(data);

  return {
    props: { data }, // will be passed to the page component as props
  };
}
export default BlogsDetails;
