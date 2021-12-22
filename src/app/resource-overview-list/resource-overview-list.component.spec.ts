import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceOverviewListComponent } from './resource-overview-list.component';

describe('ResourceOverviewListComponent', () => {
  let component: ResourceOverviewListComponent;
  let fixture: ComponentFixture<ResourceOverviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceOverviewListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceOverviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
