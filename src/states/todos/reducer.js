import { ActionType } from "./action";

function todosReducer(todos = [], action = {}) {
  switch (action.type) {
    case ActionType.GET_TODOS:
      return action.payload.todos;

    // Tambahkan logika untuk mengupdate todo
    case ActionType.UPDATE_TODO:
      return todos.map((todo) =>
        todo.id === action.payload.todo.id
          ? { ...todo, ...action.payload.todo }
          : todo
      );

    default:
      return todos;
  }
}

function isAddTodoReducer(status = false, action = {}) {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return action.payload.status;
    default:
      return status;
  }
}

function isDeleteTodoReducer(status = false, action = {}) {
  switch (action.type) {
    case ActionType.DELETE_TODO:
      return action.payload.status;
    default:
      return status;
  }
}

function detailTodoReducer(todo = null, action = {}) {
  switch (action.type) {
    case ActionType.DETAIL_TODO:
      return action.payload.todo;
    default:
      return todo;
  }
}

// Reducer untuk update todo
function isUpdateTodoReducer(status = false, action = {}) {
  switch (action.type) {
    case ActionType.UPDATE_TODO:
      return action.payload.status;
    default:
      return status;
  }
}

export {
  todosReducer,
  isAddTodoReducer,
  isDeleteTodoReducer,
  detailTodoReducer,
  isUpdateTodoReducer, // Export reducer baru
};
