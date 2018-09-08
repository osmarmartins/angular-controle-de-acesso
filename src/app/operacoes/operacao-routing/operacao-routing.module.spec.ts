import { OperacaoRoutingModule } from './operacao-routing.module';

describe('OperacaoRoutingModule', () => {
  let operacaoRoutingModule: OperacaoRoutingModule;

  beforeEach(() => {
    operacaoRoutingModule = new OperacaoRoutingModule();
  });

  it('should create an instance', () => {
    expect(operacaoRoutingModule).toBeTruthy();
  });
});
