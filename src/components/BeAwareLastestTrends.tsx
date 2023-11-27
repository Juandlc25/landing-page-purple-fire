import ScrollLeft from "../assets/ScrollLeft";
import ScrollRight from "../assets/ScrollRight";
import ActionLink from "./ActionLink";
import Slideshow from "./SlideShow";

const BeAwareLastestTrends = () => (
  <div className="flex flex-col w-full h-fit mb-4 md:mb-0 md:h-[884px] bg-white">
    <div className="py-10 px-5 md:px-20 flex flex-col md:flex-row w-full items-start md:items-center md:justify-between">
      <div className="flex flex-col gap-2">
        <span className="font-light text-3xl font-merriweather text-[#121212]">
          Be aware of the lastest trends
        </span>
        <span className="font-normal font-varta text-lg text-[#706458E5]">
          Stay informed of new trends, but also of our various offers.
        </span>
        <ActionLink title="Learn more" />
      </div>
      <div className="flex md:flex-row flex-col gap-4 md:gap-0 mt-5 md:mt-0 w-full md:w-fit">
        <input
          className="bg-[#F3EEE8] font-varta px-2 py-2 md:py-0"
          placeholder="email@address.com"
        />
        <button className="px-4 font-karla py-2 bg-[#534B42] text-white font-bold text-sm">
          Subscribe
        </button>
      </div>
    </div>
    <Slideshow className="hidden md:block" />
    <div className="py-10 px-5 md:px-20 flex flex-col md:flex-row gap-4 md:gap-0 w-full md:justify-between">
      <span className="text-[#534B42] font-light text-4xl font-merriweather">
        Inspirations
      </span>
      <span className="font-normal text-lg max-w-[359px] text-[#706458] font-varta">
        Our experts are keen to stay on top of trends in order to offer you new
        inspirations for your interior and exterior every day. Remember that to
        inspire you we have to inspire ourselves and we want to share that with
        you.
      </span>
      <div className="hidden md:flex flex-col">
        <div className="flex gap-2 items-center">
          <ScrollLeft />
          <ScrollRight />
        </div>
        <span className="text-lg font-normal text-[#706458] font-varta">
          01/05
        </span>
      </div>
    </div>
    <Slideshow className="block md:hidden" />
  </div>
);

export default BeAwareLastestTrends;
