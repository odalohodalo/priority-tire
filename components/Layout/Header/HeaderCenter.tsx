import Logo from "@/components/common/Logo";
import SearchInput from "@/components/common/SearchInput";

type HeaderCenterProps = {
  isMobile: boolean;
};

const HeaderCenter = ({ isMobile }: HeaderCenterProps) => {
  return isMobile ? <Logo width={140} height={20} /> : <SearchInput />;
};

export default HeaderCenter;
