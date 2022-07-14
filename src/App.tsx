import { useState } from "react";
import logo from "./logo.svg";
import { Dashboard } from "@/pages/Dashboard";
import { TasksProvider } from "@/providers/tasks";

function App() {
  return (
    <TasksProvider>
      <Dashboard />
    </TasksProvider>
  );
}

export default App;
