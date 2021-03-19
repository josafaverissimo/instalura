import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import { Box } from '../../foundation/layout/Box';
import FormCadastro from '../../patterns/FormCadastro';
import SEO from '../../commons/SEO';

export const WebsitePageContext = React.createContext({
  toggleModalRegister: () => {},
});

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
}) {
  const [currentMode, setCurrentMode] = React.useState('light');
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  function handleChangeCurrentMode() {
    setCurrentMode(currentMode === 'dark' ? 'light' : 'dark');
  }

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalRegister: () => {
          setIsModalOpen(!isModalOpen);
        },
      }}
    >
      <SEO
      // eslint-disable-next-line react/jsx-props-no-spreading
        {...seoProps}
      />

      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        mode={currentMode}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...pageBoxProps}
      >
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          {(modalsProps) => (
            <FormCadastro modalsProps={modalsProps} />
          )}
        </Modal>

        <Menu
          mode={currentMode}
          changeMode={handleChangeCurrentMode}
          onRegister={() => {
            setIsModalOpen(!isModalOpen);
          }}
        />

        {children({ currentMode })}

        <Footer mode={currentMode} />
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
  },
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
};
