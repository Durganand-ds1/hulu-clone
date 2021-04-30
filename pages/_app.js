import "tailwindcss/tailwind.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          background: #06202a;
          color: #d1d5db;
        }
      `}</style>
    </>
  );
}

export default MyApp;
