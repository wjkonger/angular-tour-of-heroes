import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookLifecycleComponent } from './hook-lifecycle.component';

describe('HookLifecycleComponent', () => {
  let component: HookLifecycleComponent;
  let fixture: ComponentFixture<HookLifecycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HookLifecycleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HookLifecycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
