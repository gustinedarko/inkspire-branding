import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex items-center justify-center">
        <p className=" text-4xl text-orange-400 font-bold">This the About Page</p>
      </div>
      <Footer />
    </>
  );
}