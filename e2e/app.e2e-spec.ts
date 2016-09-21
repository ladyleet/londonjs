import { LondonjsPage } from './app.po';

describe('londonjs App', function() {
  let page: LondonjsPage;

  beforeEach(() => {
    page = new LondonjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
