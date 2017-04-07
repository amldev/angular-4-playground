import { Angular4TranslateAndKeyEventsPage } from './app.po';

describe('angular4-translate-and-key-events App', () => {
  let page: Angular4TranslateAndKeyEventsPage;

  beforeEach(() => {
    page = new Angular4TranslateAndKeyEventsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
