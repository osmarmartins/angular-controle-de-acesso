import { GrupoRoutingModule } from './grupo-routing.module';

describe('GrupoRoutingModule', () => {
  let grupoRoutingModule: GrupoRoutingModule;

  beforeEach(() => {
    grupoRoutingModule = new GrupoRoutingModule();
  });

  it('should create an instance', () => {
    expect(grupoRoutingModule).toBeTruthy();
  });
});
