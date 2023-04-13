import type { AppProps } from 'next/app'
import  NextLayoutComponent, { NextPage }  from 'next/types';
import { ReactElement, ReactNode } from 'react';
type NextpageWithLayout = NextPage & {
  getLayout?: ( page:ReactElement ) => ReactNode;
}
type AppPropsWithLayout = AppProps & {
  Component: NextpageWithLayout
}

export default function App({ Component, pageProps }:AppPropsWithLayout) {
  const getLayout = Component.getLayout  || ((page) => page)
  //return <Component {...pageProps} />
  return getLayout(<Component {...pageProps}/>)
}
