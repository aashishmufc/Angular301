import { MovieCardComponent } from './movie-card.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { MovieBookingComponent } from 'src/app/shared/movie-booking/movie-booking.component';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
class StoreMock {
  // How we did it before
  select = jasmine.createSpy().and.returnValue(of('quote'));
  dispatch = jasmine.createSpy();
}
describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;
  const activeModal: any = jasmine.createSpyObj('activeModal', {
    open: {
      afterClosed: function() {
        return of(true);
      },
      componentInstance: {
        movieTitle: 'it',
        screen: '3',
        time: '23:00',
        movieList: []
      }
    }
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, RouterTestingModule, MaterialModule, ReactiveFormsModule],
      declarations: [MovieCardComponent, MovieBookingComponent],
      providers: [{ provide: Store, useClass: StoreMock }, MatDialog, { provide: MatDialog, useValue: activeModal }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    component.movie = [];
    component.selectTheater = new FormControl();
    component.date = new FormControl();
    fixture.detectChanges();
  });

  it('should create component #moviecard', () => {
    expect(component).toBeTruthy();
  });
  it('should run #ngOnInit()', async () => {
    spyOn(component, 'ngOnInit');
    const result = component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });

  it('should run #OnValuaeChange', () => {
    component.onValChange('1');
    expect(component.selectedTime).toBe('1');
  });
  it('should run #isInvalid', () => {
    component.selectedTheater = null;
    expect(component.isInvalid()).toBe(true);
  });
  it('should run #trackCastandCrew() by passing wrong obj', async () => {
    let index = 1;
    let cast = '';
    const result = component.trackCastandCrew(index, cast);
  });
  it('should run #trackCastandCrew() by passing right obj', async () => {
    let index = 1;
    let cast = {
      id: '1234'
    };
    const result = component.trackCastandCrew(index, cast);
  });
  it('should run #openDialog()', async () => {
    component.movie = { title: 'IT' };
    component.openDialog();
  });
  it('should run #preBookDialog()', async () => {
    const result = component.preBookDialog();
  });
});
