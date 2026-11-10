import { mount } from "cypress/react";
import TaskCard from "./TaskCard";

describe("TaskCard", () => {
  const task = {
    id: 1,
    title: "Лаба 3",
    subject: "Програмування",
    date: "2099-01-01",
    priority: "high",
    done: false,
  };

  it("показує назву і предмет", () => {
    mount(<TaskCard task={task} />);
    cy.contains("Лаба 3");
    cy.contains("Програмування");
  });
});
