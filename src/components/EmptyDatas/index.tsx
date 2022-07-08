import { Container } from "./styles";
import ReportSVG from "@/assets/icons/report.svg";

const EmptyDatas = () => {
  return (
    <Container>
      <img src={ReportSVG} alt="report" className="reportIMG" />
      <div className="text">
        <strong className="text__title">
          Você ainda não tem tarefas cadastradas
        </strong>
        <p className="text__p">
          Crie tarefas e organize seus itens a fazer
        </p>
      </div>
    </Container>
  );
};

export { EmptyDatas };
