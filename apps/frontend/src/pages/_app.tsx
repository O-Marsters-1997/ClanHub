import "../styles/globals.css";
import type { AppProps } from "next/app";

// testing push
// export default function App ({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
// testing things
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
