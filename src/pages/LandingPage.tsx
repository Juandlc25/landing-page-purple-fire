import LogoSvg from "../assets/Logotype";
import ScrollDown from "../assets/ScrollDown";
import BeAwareLastestTrends from "../components/BeAwareLastestTrends";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideToDesign from "../components/SideToDesign";

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex h-[500px] md:h-[900px]">
        <div className="hidden w-1/2 bg-[#F3EEE8] pt-10 pl-20 pb-10 pr-10 md:flex flex-col gap-8">
          <Header />
          <span className="text-[#A06056] font-varta text-sm font-bold mt-20">
            HOME DESIGN
          </span>
          <span className="text-[#A06056] text-5xl font-merriweather font-light mt-8">
            Elegance for Interiors & Exteriors
          </span>
          <span className="text-[#706458] font-light text-xl mt-2">
            We provide everyone with modern, trendy, quality furniture
          </span>
          <ScrollDown className="mt-10" />
        </div>
        <div className="bg-center bg-cover h-full w-full md:w-1/2 bg-[url('../public/images/hero-bg.png')] p-5 md:p-0">
          <div className="flex md:hidden w-full justify-between items-center">
            <LogoSvg color="#fff" />
            <div className="flex flex-col gap-1 items-center">
              {[0, 1].map((_, index) => (
                <div key={index} className="h-[2px] w-4 bg-white" />
              ))}
            </div>
          </div>
          <div className="flex text-white md:hidden w-full flex-col h-full justify-center items-center gap-4">
            <span className="text-sm font-bold font-varta">HOME DESIGN</span>
            <span className="text-3xl text-center font-light merriweather">
              Elegance for Interiors & Exteriors
            </span>
            <span className="font-light text-center text-xl font-varta">
              We provide everyone with modern, trendy, quality furniture
            </span>
            <ScrollDown color="#fff" />
          </div>
        </div>
      </div>
      <SideToDesign />
      <BeAwareLastestTrends />
      <Footer />
    </div>
  );
};

export default LandingPage;
