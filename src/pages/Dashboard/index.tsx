import * as S from "./styles";
import logo from "@/assets/images/logo.png";

export const Dashboard = () => {
  return (
    <S.Container>
      <header className="header">
        <img src={logo} alt="logo" />
      </header>
    </S.Container>
  );
};
