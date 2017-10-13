import { MikroAppPage } from './app.po';

describe('mikro-app App', () => {
  let page: MikroAppPage;

  beforeEach(() => {
    page = new MikroAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
