import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

import Layout from '@components/layout';
import pageAnimate from '@variants/pageAnimate';
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={pageAnimate}>
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
}

export default MyApp;
