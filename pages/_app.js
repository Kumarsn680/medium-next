
import '@/styles/globals.css'
import Header from '@/components/Header';

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className='flex justify-center'>
        <Header />
      </div>
      <Component {...pageProps} />
    </>
  );
}
