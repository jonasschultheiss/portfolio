import Footer from '@components/footer';
import Header from '@components/header';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gray-100 p-4 pt-6 md:py-6 md:px-12 lg:px-16 lg:py-12 xl:px-32 xl:py-24">{children}</main>
      <Footer />
    </div>
  );
}
