import { EduuisPage } from './app.po';

describe('eduuis App', function() {
  let page: EduuisPage;

  beforeEach(() => {
    page = new EduuisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
