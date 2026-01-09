import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex items-center justify-center">
        <p className=" text-4xl text-orange-400 font-bold">This the Projects Page</p>
      </div>
      <Footer />
    </>
  );
}