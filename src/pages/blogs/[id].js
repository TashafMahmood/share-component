import Head from "next/head";
import React from "react";

function BlogsDetails(props) {
    const {data} = props

    console.log(data)
    return (
        <div>
            <Head>
                {/* <meta http-equiv='Cache-Control' content='public' />
              <meta http-equiv='Cache-Control' content='max-age=1' />
              <meta http-equiv='Cache-Control' content='must-revalidate' />
              <meta httpEquiv='Pragma' content='no-cache' />
              <meta httpEquiv='Expires' content='0' /> */}
                .
                <meta
                    property='og:title'
                    content={data?.title ?? ''}
                    key='title'
                />
                <meta property='og:image' content={data.img} key='image' />
                <meta property='og:description' content={data?.summary ?? ''} />
            </Head>
            <div className='d-flex align-item-center justify-content-center'>
                <iframe
                    src='https://dynamiclinks-9d64a.web.app/shareProfile?userCode=63a552336af986350ae41c63'
                    width={300}
                    height={600}
                    title='W3Schools Free Online Web Tutorials'></iframe>
            </div>
        </div>
    )
}

export async function getServerSideProps({res, query}) {
    // console.log(context.query);
    res.setHeader('Cache-Control', 'no-store')

    const response = await fetch(`https://share-component.vercel.app/api/hello`)
    const data = await response.json()

    console.log(data)

    return {
        props: {data}, // will be passed to the page component as props
    }
}
export default BlogsDetails;
