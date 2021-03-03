import React from 'react';
import { Button } from '../../commons/Button';
import { Box } from '../../foundation/layout/Box';
import { Grid } from '../../foundation/layout/Grid';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';

function FormContent() {
  const [userInfo, setUserInfo] = React.useState({
    email: 'josafaverissimo@gmail.com',
    user: 'josafaverissimo',
  });
  const isFormInvalid = userInfo.email.length === 0 || userInfo.user.length === 0;

  function handleChange(event) {
    const filedName = event.target.getAttribute('name');
    console.log(filedName);

    setUserInfo({
      ...userInfo,
      [filedName]: event.target.value,
    });
  }

  return (
    <form onSubmit={(event) => {
      event.preventDefault();

      console.log("Form's already");
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
          name="email"
          placeholder="email"
          value={userInfo.email}
          mode="light"
          onChange={(event) => {
            console.log('> Email: changed');

            setUserInfo({
              ...userInfo,
              email: event.target.value,
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
    </form>
  );
}

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
