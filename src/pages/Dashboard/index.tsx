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
            className='input'
          />
          <button>
            <h4>Criar</h4>
             <img src={AddSVG} alt='add' />
          </button>
        </section>
        <main></main>
      </div>
    </S.Container>
  );
};
