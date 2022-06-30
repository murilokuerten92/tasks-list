import { useState } from "react";
import * as S from "./styles";
import logo from "@/assets/images/logo.png";
import AddSVG from "@/assets/icons/add.svg";

export const Dashboard = () => {
  const [newTask, setNewTask] = useState("");

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
          <section className='main__container'>
            <div className="main__tasks">
              <h6 className="main__tasks__text">Tarefas criadas</h6>
              <div className="main__tasks__amount">
                <span>0</span>
              </div>
            </div>

            <div className="main__tasks">
              <h6 className="main__tasks__text">Concluídas</h6>
              <div className="main__tasks__amount">
                <span>0</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </S.Container>
  );
};
