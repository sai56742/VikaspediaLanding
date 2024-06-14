import { KEY_ACCESS_TOKEN } from "@/utils/constant";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const useTruncatedAccessToken = () => {
  const [cookies] = useCookies(["_sdfo#k35xxcvdfs"]);
  const [cookieValue, setCookieValue] = useState(null);
  const [truncatedToken, setTruncatedToken] = useState(null);

  const getTruncatedToken = (newToken) => {
    return newToken.substring(newToken.length - 10);
  };

  useEffect(() => {
    const newToken = cookies["_sdfo#k35xxcvdfs"];
    if (
      newToken !== undefined &&
      newToken !== "undefined" &&
      newToken !== "" &&
      newToken !== "null" &&
      newToken !== null
    ) {
      setCookieValue(newToken);
      const truncated = getTruncatedToken(newToken);
      setTruncatedToken(truncated);
      localStorage.setItem(KEY_ACCESS_TOKEN, truncated);
    }
  }, [cookies]);

  return truncatedToken;
};

export default useTruncatedAccessToken;
