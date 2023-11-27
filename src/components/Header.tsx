import LogoSvg from "../assets/Logotype";

const Header = () => {
  const items = ["Products", "Rooms", "Services", "Inspirations"];
  return (
    <header className="flex items-center gap-4">
      <LogoSvg className="mr-2" />
      {items?.map((item, key) => (
        <span
          className="text-[#706458] font-varta font-normal text-lg"
          key={key}
        >
          {item}
        </span>
      ))}
    </header>
  );
};

export default Header;
