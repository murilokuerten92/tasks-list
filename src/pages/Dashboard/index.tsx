import { useState, FormEvent } from "react";
import * as S from "./styles";
import logo from "@/assets/images/logo.png";
import AddSVG from "@/assets/icons/add.svg";
import ReportSVG from "@/assets/icons/report.svg";
import TrashSVG from "@/assets/icons/trash.svg";
import CheckSVG from "@/assets/icons/check.svg";

interface Tasks {
  id: number;
  name: string;
  checked: boolean;
}

export const Dashboard = () => {
  const [checked, setChecked] = useState(false);

  const [tasks, setTasks] = useState<Tasks[]>([]);

  const [newTask, setNewTask] = useState("");

  function handleTaskCreate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(newTask);

    setTasks([...tasks, { id: Math.random(), name: newTask, checked: false }]);
  }

  function handleTaskCheck(taskId: number) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, checked: true };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function handleTaskRemove(task: Tasks) {
    const taskIndex = tasks.indexOf(task);

    tasks.splice(taskIndex, 1);

    setTasks([...tasks]);
  }

  const {completed, totals} = tasks.reduce(
    (acc, result) => {
      if (result.checked) {
        acc.completed += 1;
      }
      acc.totals += 1;

      return acc;
    },
    { completed: 0, totals: 0 }
  );

  return (
    <S.Container>
      <header className="header">
        <img src={logo} alt="logo" />
      </header>
      <div className="main">
        <section className="main__aside">
          <form onSubmit={handleTaskCreate}>
            <input
              placeholder="Adicione uma nova tarefa"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="main__aside__input"
            />
            <button type="submit" className="main__aside__button">
              <h4 className="main__aside__h4">Criar</h4>
              <img src={AddSVG} alt="add" />
            </button>
          </form>
        </section>
        <main className="main">
          <header className="main__container">
            <div className="main__tasks">
              <h6 className="main__tasks__text">Tarefas criadas</h6>
              <div className="main__tasks__amount">
                <span>{tasks.length}</span>
              </div>
            </div>

            <div className="main__tasks">
              <h6 className="main__tasks__text_checked">Concluídas</h6>
              <div className="main__tasks__amount">
                <span>
                  {completed} de {totals}
                </span>
              </div>
            </div>
          </header>

          <section className="main__list">
            {tasks.map((task) => (
              <div className="main__list__card" key={task.id}>
                <div
                  className="main__list__card__description"
                  onClick={() => handleTaskCheck(task.id)}
                >
                  <S.Radio checked={task.checked}>
                    {task.checked && <img src={CheckSVG} alt="check" />}
                  </S.Radio>
                  <div className="main__list__card__text">
                    <S.Paragraph checked={task.checked}>
                      {task.name}
                    </S.Paragraph>
                  </div>
                </div>
                <div
                  className="main__list__card__trash"
                  onClick={() => handleTaskRemove(task)}
                >
                  <img src={TrashSVG} alt="trash" />
                </div>
              </div>
            ))}

            {tasks.length === 0 && (
              <>
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
              </>
            )}
          </section>
        </main>
      </div>
    </S.Container>
  );
};
