import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';

export default function FAQScreen({ faqCategories, currentMode }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="1"
      mode={currentMode}
    >
      <Grid.Container style={{ flex: 1 }}>
        <Grid.Row
          marginTop={{ xs: '32px', md: '100px' }}
          marginBottom={{ xs: '32px', md: '100px' }}
          justifyContent="center"
        >
          <Grid.Col
            value={{ xs: 12, md: 12 }}
            flex={1}
          >
            <Text
              variant="title"
              tag="h2"
              color="tertiary.main"
              textAlign="center"
            >
              Como podemos te ajudar?
            </Text>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row
          alignItems="flex-start"
          justifyContent="center"
          flex="1"
        >
          {
            faqCategories && faqCategories.map((category) => (
              <Grid.Col
                value={{ xs: 12, md: 3 }}
                flex={1}
                key={category.title}
              >
                <Box
                  width="100%"
                  mode={currentMode}
                >
                  <Text
                    variant="subTitle"
                    tag="h2"
                    color="tertiary.main"
                    marginBottom="26px"
                    mode={currentMode}
                  >
                    {category.title}
                  </Text>

                  <Box
                    as="ul"
                    padding="0"
                    listStyle="none"
                    mode={currentMode}
                  >
                    {category.questions.map((question) => (
                      <li key={question.title}>
                        <Text
                          href={`/faq/${question.slug}`}
                          variant="paragraph1"
                          tag="h2"
                          color="tertiary.light"
                          mode={currentMode}
                        >
                          {question.title}
                        </Text>
                      </li>
                    ))}
                  </Box>
                </Box>
              </Grid.Col>
            ))
          }
        </Grid.Row>
      </Grid.Container>
    </Box>
  );
}

FAQScreen.propTypes = {
  faqCategories: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
    questions: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
      description: PropTypes.string,
    })),
  })).isRequired,
  currentMode: PropTypes.string.isRequired,
};
