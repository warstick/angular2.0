import { CustomDropdownPage } from './app.po';

describe('custom-dropdown App', () => {
  let page: CustomDropdownPage;

  beforeEach(() => {
    page = new CustomDropdownPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
