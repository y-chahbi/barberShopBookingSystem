'use client';
import Image from "next/image";
import { Provider } from "react-redux";
import { store } from "../app/store";
import "./(FrontEnd)/globals.css";
import Login from "./(FrontEnd)/components/Login";
import Register from "./(FrontEnd)/components/Register";
import ForgotPassword from "./(FrontEnd)/components/ForgotPassword";
import Booking from "./(FrontEnd)/components/Booking";
import Navbar from "./(FrontEnd)/components/Navbar";
import Team from "./(FrontEnd)/components/Team";

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
      {/* <Login/>
      <Register/> */}
      {/* <Booking/> */}
      {/* <Navbar/> */}
      <Team/>
    </Provider>
  );
}
