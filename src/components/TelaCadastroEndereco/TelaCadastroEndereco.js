import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
  BackToLoginButton
} from "./styled";

function TelaCadastroEndereco(props) {
  return (
    <FormContainer>
      <h1>Cadastro de Endereço</h1>
      <Form>
        <StyledLabel>
          Endereço:
          <Input />
        </StyledLabel>
        <StyledLabel>
          Numero de residencia:
          <Input />
        </StyledLabel>
        <StyledLabel>
          Numero de telefone:
          <Input />
        </StyledLabel>
        <StyledLabel>
          Complemento:
          <Input />
        </StyledLabel>
        <SendButton onClick={() => props.mudarTela(4)}>
          Terminar Cadastro
        </SendButton>
        <BackToLoginButton onClick={() => props.mudarTela(2)}>
          Voltar
        </BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastroEndereco;
