import { useEffect } from "react";
import { navigate } from "gatsby";

const getRedirectLanguage = () => {
  if (typeof navigator === `undefined`) {
    return "hy";
  }

  //const lang = navigator && navigator.language && navigator.language.split("-")[0];
  const lang = "hy";

  if (!lang) return "hy";

  switch (lang) {
    case "hy":
      return "hy-AM";
    case "ru":
      return "ru";
    default:
      return "en";
  }
};

const IndexPage = () => {
  useEffect(() => {
    const urlLang = getRedirectLanguage();

    navigate(`/${urlLang}/home`, {replace: true});
  }, []);

  return null;
};

export default IndexPage;