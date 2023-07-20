import About from "@/components/About";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <main className="w-full bg-gray-950 text-gray-300 px-4">
      <div className="max-w-screen-xl mx-auto lg:pt-10">
      <Banner />
      <About />
      <Projects />
      <Technologies />
      <Footer />
      </div>
    </main>
  )
}
3