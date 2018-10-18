import { NgxDndPracModule } from './ngx-dnd-prac.module';

describe('NgxDndPracModule', () => {
  let ngxDndPracModule: NgxDndPracModule;

  beforeEach(() => {
    ngxDndPracModule = new NgxDndPracModule();
  });

  it('should create an instance', () => {
    expect(ngxDndPracModule).toBeTruthy();
  });
});
