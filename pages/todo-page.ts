import { expect, Page } from '@playwright/test';

export class TodoPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc');
  }

  async addTodo(todoText: string) {
    const input = this.page.getByPlaceholder('What needs to be done?');
    await input.fill(todoText);
    await input.press('Enter');
  }

  async completeTodo(todoText: string) {
    await this.page
      .locator('li')
      .filter({ hasText: todoText })
      .getByRole('checkbox')
      .check();
  }

  async expectTodoVisible(todoText: string) {
    await expect(this.page.getByText(todoText)).toBeVisible();
  }

  async expectItemsLeft(count: number) {
    await expect(this.page.getByText(`${count} item left`)).toBeVisible();
  }
}