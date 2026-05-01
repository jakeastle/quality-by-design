import { test } from '@playwright/test';
import { TodoPage } from '../../pages/todo-page';

test('can add and complete a todo using page object model', async ({ page }) => {
  const todoPage = new TodoPage(page);

  await todoPage.goto();

  await todoPage.addTodo('Apply to 5 jobs');
  await todoPage.addTodo('Build Playwright portfolio');

  await todoPage.expectTodoVisible('Apply to 5 jobs');
  await todoPage.expectTodoVisible('Build Playwright portfolio');

  await todoPage.completeTodo('Apply to 5 jobs');

  await todoPage.expectItemsLeft(1);
});