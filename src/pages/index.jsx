import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer';
import MainSection from '../components/content/Main';
import About from '../components/content/About';

export default function Portfolio() {
  return (
    <>
      <main className='flex min-h-screen flex-col bg-[#121212] '>
      <Header />
        <div className='container mt-24 mx-auto py-4 px-12' >
          <MainSection />
          <About />
        </div>
      </main>
      <Footer />
    </>
  );
}
