import ChevronRight from "../assets/ChevronRight";

interface Props {
  title: string;
}

const ActionLink = ({ title }: Props) => (
  <div className="flex gap-2 items-center">
    <span className="text-[#A06056] font-karla text-sm font-bold">{title}</span>
    <ChevronRight />
  </div>
);

export default ActionLink;
