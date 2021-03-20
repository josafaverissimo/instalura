import React from 'react';
import PropTypes from 'prop-types';
import Text from '../src/components/foundation/Text';
import { Button } from '../src/components/commons/Button';
import { Grid } from '../src/components/foundation/layout/Grid';
import { WebsitePageContext } from '../src/components/wrappers/WebsitePage';
import Bubbles from '../src/theme/Bubbles';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

function HomeScreen({ currentMode }) {
  const websitePageContext = React.useContext(WebsitePageContext);

  return (
    <Grid.Container marginTop={{
      xs: '32px',
      md: '75px',
    }}
    >
      <Grid.Row>
        <Grid.Col
          offset={{ xs: 0, md: 1 }}
          value={{ xs: 12, md: 5 }}
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          flexDirection="column"
        >
          <Text
            variant="title"
            tag="h1"
            color="tertiary.main"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
            mode={currentMode}
          >
            Compartilhe momentos e conecte-se com amigos
          </Text>
          <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
            mode={currentMode}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
          </Text>

          <Button
            variant="primary.main"
            display="block"
            margin={{
              xs: 'auto',
              md: 'initial',
            }}
            mode={currentMode}
            onClick={() => {
              websitePageContext.toggleModalRegister();
            }}
          >
            Cadastrar
          </Button>
        </Grid.Col>

        <Grid.Col
          value={{
            xs: 12,
            md: 6,
          }}
        >
          <img
            alt="Imagem do celular"
            style={{ display: 'block', margin: 'auto' }}
            src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  );
}

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
    pageBoxProps: {
      backgroundImage: `url(${Bubbles.url('light')})`,
      justifyContent: 'space-between',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});

// export default function Home() {
//   return (
//     <WebsitePageWrapper
//       seoProps={{
//         headTitle: 'Home',
//       }}
//       pageBoxProps={{
//         backgroundImage: `url(${Bubbles.url('light')})`,
//         justifyContent: 'space-between',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'bottom right',
//       }}
//     >
//       {({ currentMode }) => <HomeScreen currentMode={currentMode} />}
//     </WebsitePageWrapper>
//   );
// }

HomeScreen.propTypes = {
  currentMode: PropTypes.string.isRequired,
};
