import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

// function MyApp({ Component, pageProps, router }) {
//   return (
//     <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={pageAnimate}>
//       <Component {...pageProps} />
//     </motion.div>
//   );
// }
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
