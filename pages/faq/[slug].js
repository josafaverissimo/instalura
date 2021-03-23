import React from 'react';
import FAQQuestionScreen from '../../src/components/screen/FAQQuestionScreen';
import websitePageHOC from '../../src/components/wrappers/WebsitePage/hoc';

function FAQInternaScreen({ question, category }) {
  return (
    <FAQQuestionScreen
      question={question}
      category={category}
    />
  );
}

FAQInternaScreen.propTypes = FAQQuestionScreen.propTypes;

export default websitePageHOC(FAQInternaScreen);

export async function getStaticProps({ params }) {
  const faqCategories = await fetch(
    'https://instalura-api.vercel.app/api/content/faq',
  ).then(async (response) => {
    const json = await response.json();
    return json;
  });

  const pageData = faqCategories.data.reduce((accumulator, faqCategory) => {
    const questionFounded = faqCategory.questions.find((question) => question.slug === params.slug);

    if (questionFounded) {
      return {
        ...accumulator,
        category: faqCategory,
        question: questionFounded,
      };
    }

    return undefined;
  }, {});

  return {
    props: {
      category: pageData.category,
      question: pageData.question,
      pageWrapperProps: {
        seoProps: {
          headTitle: pageData.question.title,
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const faqCategories = await fetch(
    'https://instalura-api.vercel.app/api/content/faq',
  ).then(async (response) => {
    const json = await response.json();
    return json;
  });

  const paths = faqCategories.data.reduce((accumulator, faqCategory) => {
    const questionsPaths = faqCategory.questions.map((question) => ({
      params: {
        slug: question.slug,
      },
    }));

    return [...accumulator, ...questionsPaths];
  }, []);

  return {
    paths,
    fallback: false,
  };
}
