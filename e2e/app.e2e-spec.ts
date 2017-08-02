import { RecipebookPage } from './app.po';

describe('recipebook App', () => {
  let page: RecipebookPage;

  beforeEach(() => {
    page = new RecipebookPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
