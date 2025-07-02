import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import metaImage from "@/assets/img/textSection1.webp";

const getLanguageCode = (currentLanguage) => {
  if (currentLanguage === "ukr") {
    return 'ua';
  } else if (currentLanguage === "rus") {
    return 'ru';
  } else if (currentLanguage === "czk") {
    return 'cz';
  } else {
    return 'en'
  }
}

export default function MetaTags({ currentLanguage, text }) {
  useEffect(() => {
    document.documentElement.lang = getLanguageCode(currentLanguage);
  }, [currentLanguage]);

  return (
    <Helmet>
      <title>{text.title.props.text}</title>
      <meta name="description" content={text.description.props.text} />
      <meta name="keywords" content={text.keywords.props.text} />
      <meta name="author" content={text.author.props.text} />
      <meta property="og:locale" content={text.locale.props.text} />

      <meta property="og:title" content={text.title.props.text} />
      <meta property="og:description" content={text.description.props.text} />
      <meta property="og:locale" content={text.locale.props.text} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:image" content={metaImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={text.title.props.text} />
      <meta name="twitter:description" content={text.description.props.text} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
}
