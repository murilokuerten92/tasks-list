import { useState, FormEvent } from "react";
import * as S from "./styles";
import AddSVG from "@/assets/icons/add.svg";
import TrashSVG from "@/assets/icons/trash.svg";
import CheckSVG from "@/assets/icons/check.svg";
import { Header } from "@/components/Header";
import { EmptyDatas } from "@/components/EmptyDatas";
import { Task } from "@/types/tasks";
import { useCounter } from "@/hooks/use-counter";
import { useTasks } from "@/providers/tasks";

export const Dashboard = () => {
  const { tasks, createTask, checkTask, removeTask } = useTasks();

  const [newTask, setNewTask] = useState("");

  const { completed, totals } = useCounter(tasks);

  function handleTaskCreate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createTask(newTask);
  }

  function handleTaskCheck(taskId: number) {
    checkTask(taskId);
  }

  function handleTaskRemove(task: Task) {
    removeTask(task);
  }

  return (
    <S.Container>
      <Header />
      <div className="main">
        <section className="main__aside">
          <form onSubmit={handleTaskCreate}>
            <input
              placeholder="Adicione uma nova tarefa"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="main__aside__input"
            />
            <button
              disabled={newTask === ""}
              type="submit"
              className="main__aside__button"
            >
              <h4 className="main__aside__h4">Criar</h4>
              <img src={AddSVG} alt="add" />
            </button>
          </form>
        </section>
        <main className="main">
          <header className="main__container">
            <div className="main__tasks">
              <h6 className="main__tasks-text">Tarefas criadas</h6>
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

            {tasks.length === 0 && <EmptyDatas />}
          </section>
        </main>
      </div>
    </S.Container>
  );
};
