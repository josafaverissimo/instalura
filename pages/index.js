import React from 'react';
import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import Text from '../src/components/foundation/Text';
import { Button } from '../src/components/commons/Button';
import { Grid } from '../src/components/foundation/layout/Grid';
import { Box } from '../src/components/foundation/layout/Box';
import Bubbles from '../src/theme/Bubbles';
import Modal from '../src/components/commons/Modal';
import FormCadastro from '../src/components/patterns/FormCadastro';

export default function Home() {
  const [currentMode, setCurrentMode] = React.useState('light');
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  function handleChangeCurrentMode() {
    setCurrentMode(currentMode === 'dark' ? 'light' : 'dark');
  }

  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage={`url(${Bubbles.url(currentMode)})`}
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
      mode={currentMode}
    >
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        {(modalsProps) => (
          <FormCadastro modalsProps={modalsProps} />
          // <Box
          //   backgroundColor="white"
          //   mode={currentMode}
          //   data-modal-safe-area="true"
          //   {...modalsProps}
          // >
          //   modal
          // </Box>
        )}
      </Modal>

      <Menu mode={currentMode} changeMode={handleChangeCurrentMode} />

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
                setIsModalOpen(!isModalOpen);
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

      <Footer mode={currentMode} />
    </Box>
  );
}
