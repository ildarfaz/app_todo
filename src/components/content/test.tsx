import { render, screen, fireEvent } from "@testing-library/react";
import { Content } from "@/components/content";

describe("Content Component", () => {
  it("renders without crashing", () => {
    render(<Content />);
    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("adds a task when handleKeyDown is called", () => {
    render(<Content />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(screen.getByText("New Task")).toBeInTheDocument();
  });

  it("clears completed tasks when handleClearComplete is called", () => {
    render(<Content />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.keyDown(input, { key: "Enter" });
    fireEvent.change(input, { target: { value: "Task 2" } });
    fireEvent.keyDown(input, { key: "Enter" });

    const firstTaskCheckbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(firstTaskCheckbox);

    const clearButton = screen.getByText("Clear completed");
    fireEvent.click(clearButton);

    expect(screen.queryByText("Task 1")).not.toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
  });

  it("filters tasks correctly when handleFilter is called", () => {
    render(<Content />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.keyDown(input, { key: "Enter" });
    fireEvent.change(input, { target: { value: "Task 2" } });
    fireEvent.keyDown(input, { key: "Enter" });

    const firstTaskCheckbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(firstTaskCheckbox);

    const activeFilterButton = screen.getByText("Active");
    fireEvent.click(activeFilterButton);

    expect(screen.queryByText("Task 1")).not.toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();
  });

  it("toggles task status when handleChange is called", () => {
    render(<Content />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Task 1" } });
    fireEvent.keyDown(input, { key: "Enter" });

    const taskCheckbox = screen.getByRole("checkbox");
    fireEvent.click(taskCheckbox);

    expect(taskCheckbox).toBeChecked();
  });
});