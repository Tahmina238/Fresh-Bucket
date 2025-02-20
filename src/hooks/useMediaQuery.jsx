import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width:600px)");

    //based on this size it is true or false

    if (media.matches !== matches) {
      //not same as matches
      setMatches(media.matches); //it will be true when matches is false
    }

    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener); //display responsive

    return () => window.removeEventListener("resize", listener);
  }, [matches]);
  return matches;
};

export default useMediaQuery;
