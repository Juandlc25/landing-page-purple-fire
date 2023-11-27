import ActionLink from "./ActionLink";

const SideToDesign = () => {
  const services = [
    {
      title: "Our Advices",
      subtitle:
        "What if you took advantage of this rather special period to rethink your interior? You spend more time at home so you might as well feel good there.",
    },
    {
      title: "Click and Collect",
      subtitle:
        "Adapted and contactless. Free from € 200 of purchases in stores offering the service.",
    },
    {
      title: "Conception Service",
      subtitle:
        "Personalized service with an expert advisor for your interior and exterior decoration or layout projects.",
    },
    {
      title: "Installation Service",
      subtitle:
        "Our furniture packaged in flat packs are designed for easy assembly. But you can call on our partner.",
    },
  ];
  return (
    <div className="md:min-h-[493px] h-fit bg-[#F3EEE8] flex md:flex-row flex-col w-full px-5 md:px-20 py-20">
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <span className="text-6xl text-[#706458] font-light font-merriweather md:mr-2">
          We stay by your side to design your projects
        </span>
        <ActionLink title="Find out more" />
      </div>
      <div className="w-full md:w-1/2 flex gap-4 flex-wrap mt-8 md:mt-0">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col gap-2">
            <span className="font-semibold font-varta text-2xl text-[#A06056]">
              {service.title}
            </span>
            <span className="w-full font-varta md:max-w-[258px] font-normal text-lg text-[#706458]">
              {service.subtitle}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideToDesign;
