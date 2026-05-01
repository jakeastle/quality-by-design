import { test } from '@playwright/test';
import { TodoPage } from '../../pages/todo-page';
import { todos } from '../../data/todos';

test('can add and complete a todo using page object model', async ({ page }) => {
  const todoPage = new TodoPage(page);

  await todoPage.goto();

  // Add all todos from data file
  for (const todo of todos) {
    await todoPage.addTodo(todo);
    await todoPage.expectTodoVisible(todo);
  }

  // Complete the first one
  await todoPage.completeTodo(todos[0]);

  await todoPage.expectItemsLeft(todos.length - 1);
});