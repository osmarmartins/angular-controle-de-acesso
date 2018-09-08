import { OperacoesModule } from './operacoes.module';

describe('OperacoesModule', () => {
  let operacoesModule: OperacoesModule;

  beforeEach(() => {
    operacoesModule = new OperacoesModule();
  });

  it('should create an instance', () => {
    expect(operacoesModule).toBeTruthy();
  });
});
