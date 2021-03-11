import React from 'react';
import FAQScreen from '../../src/components/screen/FAQScreen';

export default function FAQPage({ faqCategories }) {
  // const [faqCategories, setFaqCategories] = React.useState([]);
  // React.useEffect(() => {
  //   const faqCategories = fetch('https://instalura-api.vercel.app/api/content/faq')
  //     .then((response) => response.json())
  //     .then((responseJson) => responseJson.data)
  //     .then((data) => setFaqCategories(data));
  // }, []);

  return (
    <FAQScreen faqCategories={faqCategories} />
  );
}

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((response) => response.json())
    .then((responseJson) => responseJson.data);

  console.log(faqCategories);
  return {
    props: {
      faqCategories,
    },
  };
}
