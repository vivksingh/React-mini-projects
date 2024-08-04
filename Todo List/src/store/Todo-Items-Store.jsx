import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  items: [],
  handleAddNewItem: () => {},
  handleRemoveButton: () => {},
});


const todoItemsReducer = (currTodoItems, action) => {
  switch (action.type) {
    case "NEW_ITEM": {
      const newTodoItem = {
        toDoName: action.payload.itemName,
        toDoDate: action.payload.itemdueDate,
      };
      return [...currTodoItems, newTodoItem];
    }

    case "DELETE_ITEM": {
      const newToDoItem = currTodoItems.filter(
        (item) => item.toDoName !== action.payload.itemName
      );
      return newToDoItem;
    }

    default:
      return currTodoItems;
  }
};


const TodoItemsContextProvider = ({ children }) => {
  const initialItems = [
    {
      toDoName: "Buy Milk",
      toDoDate: "2024-11-01",
    },
    {
      toDoName: "birthday",
      toDoDate: "2024-07-1",
    },
  ];
  const [items, dispatchToDoItems] = useReducer(todoItemsReducer, initialItems);

  const handleAddNewItem = (name, date) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName: name,
        itemdueDate: date,
      },
    };

    dispatchToDoItems(newItemAction);
  };

  const handleRemoveButton = (toDoItemName) => {
    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: toDoItemName,
      },
    };

    dispatchToDoItems(newItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        items,
        handleAddNewItem,
        handleRemoveButton,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
