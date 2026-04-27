import Script from "next/script";

export const GoogleAdSense = () => {
  const publishersId = process.env.NEXT_PUBLIC_PUBLISHERS_ID;
  if (!publishersId) {
    console.log("No sense here because we devving!");
    return <></>;
  }
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${publishersId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
};
