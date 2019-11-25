import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Store, State } from '@ngrx/store';
import * as MovieState from '../../../reducers/index';
import * as UserState from '../../../reducers/index';
import { debounceTime } from 'rxjs/operators';
import { HomeService } from '../../services/home.service';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/scrolling';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  nowPlayingMoviesList: any = [];
  upcomingMoviesList: any = [];
  genresList: any = [];
  theaterList: any = [];
  userPreference: any = [];
  subscribe: any;
  subscription1;
  subscription2;
  subscription3;
  pageno = 1;
  constructor(
    private store: Store<MovieState.State>,
    private userStore: Store<UserState.State>,
    private homeService: HomeService,
    private scrollDispatcher: ScrollDispatcher,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // this.getNewSetofNowPlayingMovies(1);
    this.subscription1 = this.store.select(MovieState.nowPlayingMoviesSelector).subscribe(result => {
      this.nowPlayingMoviesList = result;
    });
    this.subscription2 = this.store.select(MovieState.upcomingMovieSelector).subscribe(result => {
      this.upcomingMoviesList = result;
    });
    this.store.select(MovieState.theaterList).subscribe(result => {
      this.theaterList = Object.values(result);
    });
    this.subscription3 = this.userStore.select(UserState.userSelector).subscribe(result => {
      this.userPreference = result.preference;
    });
    this.genresList = this.homeService.getGenres();
  }

  getNewSetofNowPlayingMovies(page) {
    this.homeService.getNowshowing(page);
  }
  getNewSetofComingMovies(page) {
    this.homeService.getUpcomingMovies(page);
  }
  ngOnDestroy() {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe();
    this.subscription3.unsubscribe();
  }
}
