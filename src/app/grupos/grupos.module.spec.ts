import { GruposModule } from './grupos.module';

describe('GruposModule', () => {
  let gruposModule: GruposModule;

  beforeEach(() => {
    gruposModule = new GruposModule();
  });

  it('should create an instance', () => {
    expect(gruposModule).toBeTruthy();
  });
});
