'use client';
import Image from "next/image";
import { Provider } from "react-redux";
import { store } from "../app/store";
import "./(FrontEnd)/globals.css";

// function MyApp({ Component, pageProps }: any) {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   );
// }


export default function Home() {
  return (
    <Provider store={store}>
      Hello
    </Provider>
  );
}
