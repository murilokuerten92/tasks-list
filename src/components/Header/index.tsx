import { Container } from "./styles";
import logo from "@/assets/images/logo.png";

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
    </Container>
  );
};

export { Header };
