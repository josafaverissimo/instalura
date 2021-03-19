import React from 'react';
import { Lottie } from '@crello/react-lottie';
import { Button } from '../../commons/Button';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [userInfo, setUserInfo] = React.useState({
    name: 'Josafá',
    user: 'josafaverissimo',
  });
  const isFormInvalid = userInfo.name.length === 0 || userInfo.user.length === 0;
  const [isFormSubmmited, setIsFormSubmmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);

  function handleChange(event) {
    const filedName = event.target.getAttribute('name');

    setUserInfo({
      ...userInfo,
      [filedName]: event.target.value,
    });
  }

  return (
    <form onSubmit={(event) => {
      event.preventDefault();

      setIsFormSubmmited(true);

      // DATA TRANSFER OBJECT
      const userDTO = {
        username: userInfo.user,
        name: userInfo.name,
      };

      fetch('https://instalura-api.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDTO),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }

          throw new Error('Não foi possível cadastrar um usuário');
        })
        .then((json) => {
          setSubmissionStatus(formStates.DONE);
        })
        .catch((error) => {
          setSubmissionStatus(formStates.ERROR);
        });
    }}
    >
      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>

      <div>
        <TextField
          name="name"
          placeholder="Nome"
          value={userInfo.name}
          mode="light"
          onChange={(event) => {
            setUserInfo({
              ...userInfo,
              name: event.target.value,
            });
          }}
        />
      </div>

      <div>
        <TextField
          name="user"
          placeholder="Usuário"
          value={userInfo.user}
          onChange={handleChange}
          mode="light"
        />
      </div>

      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormInvalid}
        mode="light"
        fullWidth
      >
        Cadastrar
      </Button>

      {isFormSubmmited && submissionStatus === formStates.DONE && (
        <Box
          display="flex"
          justifyContent="center"
          mode="light"
        >
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{ animationData: successAnimation, loop: false, autoplay: true }}
          />
        </Box>
      )}

      {isFormSubmmited && submissionStatus === formStates.ERROR && (
      <Box
        display="flex"
        justifyContent="center"
        mode="light"
      >
        <Lottie
          width="150px"
          height="150px"
          className="lottie-container basic"
          config={{ animationData: errorAnimation, loop: false, autoplay: true }}
        />
      </Box>
      )}
    </form>
  );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ modalsProps }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          mode="light"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...modalsProps}
        >
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}
