import React from 'react';
import FAQScreen from '../../src/components/screen/FAQScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

export default websitePageHOC(FAQScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perguntas Frequentes',
    },
  },
});

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((response) => response.json())
    .then((responseJson) => responseJson.data);
  return {
    props: {
      faqCategories,
    },
  };
}
