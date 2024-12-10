import { render, screen, fireEvent } from "@testing-library/react";
import { ToDoItem } from "@/components/todoitem";

describe("ToDoItem Component", () => {
    const mockHandleChange = jest.fn();

    const mockItem = {
        id: 1,
        title: "Test Task",
        done: false,
    };

    it("renders without crashing", () => {
        render(<ToDoItem item={mockItem} handleChange={mockHandleChange} />);
        expect(screen.getByText("Test Task")).toBeInTheDocument();
    });

    it("displays the correct task title", () => {
        render(<ToDoItem item={mockItem} handleChange={mockHandleChange} />);
        const taskTitle = screen.getByText("Test Task");
        expect(taskTitle).toBeInTheDocument();
        expect(taskTitle).toHaveTextContent("Test Task");
    });

    it("disables button and checkbox when the task is marked as done", () => {
        const completedItem = { ...mockItem, done: true };

        render(<ToDoItem item={completedItem} handleChange={mockHandleChange} />);

        const button = screen.getByRole("button");
        const checkbox = screen.getByRole("checkbox");

        expect(button).toBeDisabled();
        expect(checkbox).toBeDisabled();
        expect(checkbox).toBeChecked();
    });

    it("calls handleChange with the correct id when clicked", () => {
        render(<ToDoItem item={mockItem} handleChange={mockHandleChange} />);

        const button = screen.getByRole("button");
        fireEvent.click(button);

        expect(mockHandleChange).toHaveBeenCalledTimes(1);
        expect(mockHandleChange).toHaveBeenCalledWith(mockItem.id);
    });
});
