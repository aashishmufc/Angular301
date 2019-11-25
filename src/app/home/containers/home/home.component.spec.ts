import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { HomeService } from '../../services/home.service';
import { ScrollDispatcher } from '@angular/cdk/scrolling';
import { HomeComponent } from './home.component';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  beforeEach(() => {
    const changeDetectorRefStub = {};
    const storeStub = { select: userSelector => ({ subscribe: () => ({}) }) };
    const homeServiceStub = {
      getGenres: () => ({}),
      getNowshowing: page => ({}),
      getUpcomingMovies: page => ({})
    };
    const scrollDispatcherStub = {};
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomeComponent],
      providers: [
        { provide: ChangeDetectorRef, useValue: changeDetectorRefStub },
        { provide: Store, useValue: storeStub },
        { provide: HomeService, useValue: homeServiceStub },
        { provide: ScrollDispatcher, useValue: scrollDispatcherStub }
      ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('nowPlayingMoviesList defaults to: []', () => {
    expect(component.nowPlayingMoviesList).toEqual([]);
  });
  it('upcomingMoviesList defaults to: []', () => {
    expect(component.upcomingMoviesList).toEqual([]);
  });
  it('genresList defaults to: []', () => {
    expect(component.genresList).toEqual([]);
  });
  it('theaterList defaults to: []', () => {
    expect(component.theaterList).toEqual([]);
  });
  it('userPreference defaults to: []', () => {
    expect(component.userPreference).toEqual([]);
  });
  it('pageno defaults to: 1', () => {
    expect(component.pageno).toEqual(1);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const storeStub: Store = fixture.debugElement.injector.get(Store);
      const homeServiceStub: HomeService = fixture.debugElement.injector.get(
        HomeService
      );
      spyOn(storeStub, 'select').and.callThrough();
      spyOn(homeServiceStub, 'getGenres').and.callThrough();
      component.ngOnInit();
      expect(storeStub.select).toHaveBeenCalled();
      expect(homeServiceStub.getGenres).toHaveBeenCalled();
    });
  });
});
