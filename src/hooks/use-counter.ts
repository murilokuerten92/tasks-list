import { Tasks } from '@/types/tasks';

const useCounter = (tasks: Tasks[]) => {

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
    
      return { completed, totals }
}


export { useCounter }