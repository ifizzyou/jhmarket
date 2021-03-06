import "../styles/globals.css";
import type { AppProps } from "next/app";
import {SWRConfig} from "swr"
import { useRouter } from "next/router";
import useUser from "@libs/client/useUser";

function MyApp({ Component, pageProps }: AppProps) {

  useUser()
  return (
    <SWRConfig value={{fetcher: (url:string) => fetch(url).then((res) => res.json())
}}>
    <div className="w-full max-w-xl mx-auto">
      <Component {...pageProps} />
      </div>
</SWRConfig>
  );
}

export default MyApp;
