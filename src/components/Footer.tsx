import Facebook from "../assets/Facebook";
import Instagram from "../assets/Instagram";
import Linkedin from "../assets/Linkedin";
import LogoSvg from "../assets/Logotype";
import Twitter from "../assets/Twitter";
import ActionLink from "./ActionLink";
import footerpic from "../../public/images/footer-picture.png";

const Footer = () => {
  const copyright = ["Privacy policy", "Term of service", "Language"];
  const groups = [
    {
      title: "Products",
      items: [
        "Furniture",
        "Decoration",
        "Storage",
        "Baby and child",
        "Connected home",
      ],
    },
    {
      title: "Rooms",
      items: [
        "Living room",
        "Dining room",
        "Cooked",
        "Bedroom",
        "Bathroom",
        "Office",
        "Laundry",
        "Garage",
      ],
    },
    {
      title: "Services",
      items: [
        "Click and collect",
        "Conception",
        "Installation",
        "Advices",
        "Gift card",
      ],
    },
    {
      title: "About",
      items: ["Our story", "Our stores", "Our partners"],
    },
  ];
  return (
    <div className="flex bg-[#F3EEE8] flex-col w-full py-10 px-5 md:px-20">
      <div className="w-full flex gap-4 mb-8 flex-col md:flex-row justify-between">
        <div className="flex md:block w-full md:w-fit items-center justify-center">
          <LogoSvg color={"#534B42"} />
        </div>
        {groups?.map(({ title, items }, key) => (
          <div key={key} className="flex flex-col gap-4">
            <span className="font-semibold text-2xl text-[#534B42] font-varta ">
              {title}
            </span>
            <div className="flex flex-col gap-2">
              {items?.map((item, index) => (
                <span
                  className="text-[#706458] text-lg font-normal font-varta"
                  key={index}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-4">
          <span className="font-semibold text-2xl text-[#534B42] font-varta">
            We respect our planet
          </span>
          <img
            className="w-full md:w-[242px] h-[182px]"
            src={footerpic}
            alt="footer-pic"
          />
          <span className="font-varta text-[#706458] font-normal text-sm w-full md:w-[242px]">
            We’re taking positive steps to reduce our impact on the planet. For
            us, that means retailing responsibly.
          </span>
          <ActionLink title="Learn more" />
        </div>
      </div>
      <div className="flex items-center justify-center w-full gap-2 mb-4">
        <Facebook />
        <Twitter />
        <Linkedin />
        <Instagram />
      </div>
      <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row items-start md:items-center justify-between w-full font-normal text-lg text-[#706458B2]">
        <span className="font-varta">© 2021 Agence Dnd</span>
        <div className="flex gap-2 items-center flex-wrap">
          {copyright?.map((item, index) => (
            <span key={index} className="font-varta">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
