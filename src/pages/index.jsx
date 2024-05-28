import Header from '../components/layout/header'
import Footer from '../components/layout/footer';
import MainSection from '../components/content/main';

export default function Portfolio() {
  return (
    <>
      <main className='flex min-h-screen flex-col bg-[#121212] '>
      <Header />
        <div className='container mt-24 mx-auto py-4 px-12' >
          <MainSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
