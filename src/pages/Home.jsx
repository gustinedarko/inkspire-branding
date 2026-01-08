import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex items-center justify-center">
        <p className=" text-4xl text-orange-400 font-bold">This the Home Page</p>
      </div>
      <Footer />
    </>
  );
}