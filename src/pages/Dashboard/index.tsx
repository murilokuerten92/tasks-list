import { useState } from "react";
import * as S from "./styles";
import logo from "@/assets/images/logo.png";
import AddSVG from "@/assets/icons/add.svg";
import ReportSVG from "@/assets/icons/report.svg";
import TrashSVG from "@/assets/icons/trash.svg";
import CheckSVG from "@/assets/icons/check.svg";

export const Dashboard = () => {
  const [newTask, setNewTask] = useState("");

  const [checked, setChecked] = useState(false);

  return (
    <S.Container>
      <header className="header">
        <img src={logo} alt="logo" />
      </header>
      <div className="main">
        <section className="main__aside">
          <input
            placeholder="Adicione uma nova tarefa"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="main__aside__input"
          />
          <button className="main__aside__button">
            <h4 className="main__aside__h4">Criar</h4>
            <img src={AddSVG} alt="add" />
          </button>
        </section>
        <main className="main">
          <header className="main__container">
            <div className="main__tasks">
              <h6 className="main__tasks__text">Tarefas criadas</h6>
              <div className="main__tasks__amount">
                <span>0</span>
              </div>
            </div>

            <div className="main__tasks">
              <h6 className="main__tasks__text_checked">Concluídas</h6>
              <div className="main__tasks__amount">
                <span>0</span>
              </div>
            </div>
          </header>

          <section className="main__list">
            <div className="main__list__card">
              <S.Radio  checked={checked} onClick={() => setChecked(!checked)}>
               {checked && <img src={CheckSVG} alt="check" />} 
              </S.Radio>
              <div className="main__list__card__text">
                <p>
                  Integer urna interdum massa libero auctor neque turpis turpis
                  semper. Duis vel sed fames integer. semper. Duis vel sed fames
                  integer.
                </p>
              </div>
              <div className="main__list__card__trash">
                <img src={TrashSVG} alt="trash" />
              </div>
            </div>

            <img
              src={ReportSVG}
              alt="report"
              className="main__list__resportIMG"
            />
            <div className="main__list__text">
              <strong className="main__list__text__title">
                Você ainda não tem tarefas cadastradas
              </strong>
              <p className="main__list__text__p">
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          </section>
        </main>
      </div>
    </S.Container>
  );
};
