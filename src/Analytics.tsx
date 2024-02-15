import { useEffect } from "react";
import ReactGA from "react-ga";

const Analytics = () => {
  const pathName = window.location.pathname;
  useEffect(() => {
    ReactGA.initialize("G-F9E75ST8SY");
    ReactGA.set({ page: pathName });
    ReactGA.pageview(pathName);
  }, [pathName]);
  return <></>;
};

export default Analytics;
