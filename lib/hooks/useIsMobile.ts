import { useMediaQuery } from "@mui/material";

const useIsMobile = () => {
  return useMediaQuery("(max-width:768px)");
};

export default useIsMobile;
