import Head from "next/head";

const Layout = (props: any) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/sunbird-logo.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="Electrification Strategy Dashboard" content="Web application" />
        <meta
          property="og:title"
          content="Lamwo district electrification"
        />
        <meta
          property="og:image"
          content="https://lamwo-electrification.vercel.app/images/splash.png"
        />
        <meta property="og:url" content="https://lamwo-electrification.vercel.app/" />
        <meta
          property="og:description"
          content="Finding the best electrification strategy for Lamwo district using Machine Learning"
        />

        <link rel="apple-touch-icon" href="%PUBLIC_URL%/hydra.png" />
        <title>Lamwo district electrification</title>
        <link href="/css/argon.min.css" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />

      </Head>
      {props.children}
    </>
  );
};

export default Layout;
