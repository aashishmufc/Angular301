import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from './movie.service';
import { BASE_URL, TMDB_URLS } from '../../shared/config';

describe('MovieService', () => {
  let service: MovieService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    });
    service = TestBed.get(MovieService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  it('can load instance', () => {
    expect(service.MOVIE_URL).toEqual(BASE_URL.TMDB_API + TMDB_URLS.GET_CREDITS);
  });
  describe('getMovie', () => {
    it('makes expected calls', () => {
      const movieDetails = {
        adult: false,
        backdrop_path: '/xJWPZIYOEFIjZpBL7SVBGnzRYXp.jpg',
        belongs_to_collection: {
          id: 386382,
          name: 'Frozen Collection',
          poster_path: '/rpoXnE9UzCbjmINhxIi8bZF557B.jpg',
          backdrop_path: '/vZiqhw6oFoMlHSneIdVip9rRou2.jpg'
        },
        budget: 0,
        genres: [
          {
            id: 12,
            name: 'Adventure'
          },
          {
            id: 16,
            name: 'Animation'
          },
          {
            id: 35,
            name: 'Comedy'
          },
          {
            id: 10751,
            name: 'Family'
          },
          {
            id: 14,
            name: 'Fantasy'
          },
          {
            id: 10402,
            name: 'Music'
          }
        ],
        homepage: 'https://movies.disney.com/frozen-2',
        id: 330457,
        imdb_id: 'tt4520988',
        original_language: 'en',
        original_title: 'Frozen II',
        overview:
          'Elsa, Anna, Kristoff and Olaf are going far in the forest to know the truth about an ancient mystery of their kingdom.',
        popularity: 188.757,
        poster_path: '/h6Wi81XNXCjTAcdstiCLRykN3Pa.jpg',
        production_companies: [
          {
            id: 6125,
            logo_path: '/tVPmo07IHhBs4HuilrcV0yujsZ9.png',
            name: 'Walt Disney Animation Studios',
            origin_country: 'US'
          },
          {
            id: 2,
            logo_path: '/wdrCwmRnLFJhEoH8GSfymY85KHT.png',
            name: 'Walt Disney Pictures',
            origin_country: 'US'
          }
        ],
        production_countries: [
          {
            iso_3166_1: 'US',
            name: 'United States of America'
          }
        ],
        release_date: '2019-11-11',
        revenue: 0,
        runtime: 104,
        spoken_languages: [
          {
            iso_639_1: 'en',
            name: 'English'
          }
        ],
        status: 'Released',
        tagline: '',
        title: 'Frozen II',
        video: false,
        vote_average: 6.3,
        vote_count: 41
      };
      spyOn(service, 'getMovie').and.callThrough();
      service.getMovie(290859);
      service.getMovie(290859).subscribe(res => {
        expect(res.toEqual(movieDetails));
      });
    });
  });
  describe('getCastAndCrew', () => {
    it('makes expected calls', () => {
      const creditDetails = {
        id: 420809,
        cast: [
          {
            cast_id: 1,
            character: 'Maleficent',
            credit_id: '59ae61ed925141078a053b18',
            gender: 1,
            id: 11701,
            name: 'Angelina Jolie',
            order: 0,
            profile_path: '/gD8jlGkQC8GBajulNlIzBK1YEO1.jpg'
          },
          {
            cast_id: 6,
            character: 'Princess Aurora',
            credit_id: '5ad672b79251413b3a001560',
            gender: 1,
            id: 18050,
            name: 'Elle Fanning',
            order: 1,
            profile_path: '/e8CUyxQSE99y5IOfzSLtHC0B0Ch.jpg'
          },
          {
            cast_id: 8,
            character: 'Queen Ingrith',
            credit_id: '5ae4f685c3a3686f1d011500',
            gender: 1,
            id: 1160,
            name: 'Michelle Pfeiffer',
            order: 2,
            profile_path: '/oGUmQBU87QXAsnaGleYaAjAXSlj.jpg'
          },
          {
            cast_id: 9,
            character: 'Prince Phillip',
            credit_id: '5aeabdcbc3a3682de2001ea8',
            gender: 2,
            id: 1716493,
            name: 'Harris Dickinson',
            order: 3,
            profile_path: '/asiOPYCbcQYYG5SbxhBYH8xOIys.jpg'
          },
          {
            cast_id: 27,
            character: 'Diaval',
            credit_id: '5c8450e0c3a3684e9ddb55f9',
            gender: 2,
            id: 32987,
            name: 'Sam Riley',
            order: 4,
            profile_path: '/4PfVxrZ4pXXZjTvMzf9UfGpV53K.jpg'
          },
          {
            cast_id: 12,
            character: 'Conall',
            credit_id: '5af694e70e0a263326003f9a',
            gender: 2,
            id: 5294,
            name: 'Chiwetel Ejiofor',
            order: 5,
            profile_path: '/kq5DDnqqofoRI0t6ddtRlsJnNPT.jpg'
          },
          {
            cast_id: 7,
            character: 'Borra',
            credit_id: '5ad672bf0e0a263ce60016af',
            gender: 2,
            id: 1047649,
            name: 'Ed Skrein',
            order: 6,
            profile_path: '/otPT5Ty6zy5jGBi3PQN6yC2FMel.jpg'
          },
          {
            cast_id: 18,
            character: 'King John',
            credit_id: '5b1f65579251413f3d00016b',
            gender: 2,
            id: 71450,
            name: 'Robert Lindsay',
            order: 7,
            profile_path: '/i9Uoi3RqNJKrXVWsJIbEgeDR1Y8.jpg'
          },
          {
            cast_id: 16,
            character: 'Percival',
            credit_id: '5b05ae849251410d7c000f76',
            gender: 2,
            id: 55411,
            name: 'David Gyasi',
            order: 8,
            profile_path: '/jkqSPSGNaWZuGLDBUrL9grAXLkM.jpg'
          },
          {
            cast_id: 15,
            character: 'Gerda',
            credit_id: '5b03c38ec3a3684d95016291',
            gender: 1,
            id: 78727,
            name: 'Jenn Murray',
            order: 9,
            profile_path: '/ihzliJtl9mvRJA0qc7W1wcE1cqL.jpg'
          },
          {
            cast_id: 25,
            character: 'Thistlewit',
            credit_id: '5c8450e0c3a3684e8fdb5ab4',
            gender: 1,
            id: 36594,
            name: 'Juno Temple',
            order: 10,
            profile_path: '/lQanYRUOw5Ro7UjScRHbZIrHCEa.jpg'
          },
          {
            cast_id: 24,
            character: 'Flittle',
            credit_id: '5c80d2730e0a2643145dea4c',
            gender: 1,
            id: 72305,
            name: 'Lesley Manville',
            order: 11,
            profile_path: '/tioPlSoypjdME3oMu3g7XmgIIKS.jpg'
          },
          {
            cast_id: 23,
            character: 'Knotgrass',
            credit_id: '5c80d25d92514127631a5d91',
            gender: 1,
            id: 11356,
            name: 'Imelda Staunton',
            order: 12,
            profile_path: '/mKlkh0AuYPD5HjmnlrW0uPm5QvJ.jpg'
          },
          {
            cast_id: 17,
            character: 'Shrike (Jungle)',
            credit_id: '5b1f65279251413f2e000116',
            gender: 1,
            id: 101061,
            name: 'Judi Shekoni',
            order: 13,
            profile_path: '/46DjxtHt02YyECGeCQTf1MznXgM.jpg'
          },
          {
            cast_id: 42,
            character: 'Udo (Tundra)',
            credit_id: '5da7e3a4e6d3cc0015ae8e3a',
            gender: 2,
            id: 1391420,
            name: 'Miyavi',
            order: 14,
            profile_path: '/wg5qf8FzVgcTT1hr8qW1mUuXb0D.jpg'
          },
          {
            cast_id: 13,
            character: 'Ini (Desert)',
            credit_id: '5af694ee9251413bb7001093',
            gender: 0,
            id: 1399750,
            name: 'Kae Alexander',
            order: 15,
            profile_path: '/71SVrlqJ7ai04T7W06CoyTn7K1Q.jpg'
          },
          {
            cast_id: 43,
            character: 'Lickspittle',
            credit_id: '5da7e3b2a2423200127a8774',
            gender: 2,
            id: 11184,
            name: 'Warwick Davis',
            order: 16,
            profile_path: '/4LjgmjD9nKOgL3gGRhIS5EkI0a.jpg'
          },
          {
            cast_id: 14,
            character: 'Jungle Warrior Fey',
            credit_id: '5af694f69251414448004964',
            gender: 0,
            id: 2041136,
            name: 'Fernanda Diniz',
            order: 17,
            profile_path: null
          },
          {
            cast_id: 26,
            character: 'Dinner Servant',
            credit_id: '5c8450e0c3a3684e95db91e4',
            gender: 0,
            id: 1540486,
            name: 'Teresa Mahoney',
            order: 18,
            profile_path: null
          }
        ],
        crew: [
          {
            credit_id: '5d50766f1d820f0017798bf4',
            department: 'Editing',
            gender: 2,
            id: 1722,
            job: 'Editor',
            name: 'Craig Wood',
            profile_path: null
          },
          {
            credit_id: '5b726aff0e0a267ee51984e5',
            department: 'Art',
            gender: 2,
            id: 3964,
            job: 'Production Design',
            name: 'Patrick Tatopoulos',
            profile_path: '/74JOnC7DLU4uDwNzQX80oLX5Giy.jpg'
          },
          {
            credit_id: '5aed41ed9251411d4e005863',
            department: 'Costume & Make-Up',
            gender: 1,
            id: 7735,
            job: 'Costume Design',
            name: 'Ellen Mirojnick',
            profile_path: '/fVldZUbyEG0fHTTzmGp5CeqadCc.jpg'
          },
          {
            credit_id: '5d5076089c0550001844d92a',
            department: 'Production',
            gender: 2,
            id: 6870,
            job: 'Producer',
            name: 'Duncan Henderson',
            profile_path: null
          },
          {
            credit_id: '5d5075fccc277c0012f0c3cb',
            department: 'Production',
            gender: 1,
            id: 11701,
            job: 'Producer',
            name: 'Angelina Jolie',
            profile_path: '/gD8jlGkQC8GBajulNlIzBK1YEO1.jpg'
          },
          {
            credit_id: '5d50764fcc277c0014f0c392',
            department: 'Sound',
            gender: 2,
            id: 17767,
            job: 'Original Music Composer',
            name: 'Geoff Zanelli',
            profile_path: null
          },
          {
            credit_id: '5aed40f6c3a368346700548a',
            department: 'Directing',
            gender: 2,
            id: 20307,
            job: 'Director',
            name: 'Joachim Rønning',
            profile_path: '/6Ngvvc3WIPgg7L0vvMUYs4uHYjR.jpg'
          },
          {
            credit_id: '5d5075f2a2d2e9001685b442',
            department: 'Production',
            gender: 0,
            id: 18311,
            job: 'Producer',
            name: 'Joe Roth',
            profile_path: '/lUtmB3mtMPrA5hhoEwZBeX1U5uL.jpg'
          },
          {
            credit_id: '5b726a9f0e0a267ef41a9de2',
            department: 'Camera',
            gender: 2,
            id: 23422,
            job: 'Director of Photography',
            name: 'Henry Braham',
            profile_path: '/uHeH98meCTZmnEiiw3JGE1Oq2y8.jpg'
          },
          {
            credit_id: '5d5076351d820f0016798ed5',
            department: 'Production',
            gender: 0,
            id: 29400,
            job: 'Executive Producer',
            name: 'Jeff Kirschenbaum',
            profile_path: null
          },
          {
            credit_id: '59d480829251414b70010a5d',
            department: 'Writing',
            gender: 1,
            id: 38792,
            job: 'Screenplay',
            name: 'Linda Woolverton',
            profile_path: '/AagHXmW37oiLSCsUYIifAaFfkz.jpg'
          },
          {
            credit_id: '5d5075d90102c9001274de10',
            department: 'Writing',
            gender: 1,
            id: 38792,
            job: 'Story',
            name: 'Linda Woolverton',
            profile_path: '/AagHXmW37oiLSCsUYIifAaFfkz.jpg'
          },
          {
            credit_id: '5d5075b59c0550001844d8f4',
            department: 'Writing',
            gender: 2,
            id: 206410,
            job: 'Screenplay',
            name: 'Noah Harpster',
            profile_path: null
          },
          {
            credit_id: '5d5076881d820f0017798bfd',
            department: 'Production',
            gender: 0,
            id: 1018073,
            job: 'Casting Director',
            name: 'Reg Poerscout-Edgerton',
            profile_path: '/d3Kq58OrJ0qbDuT8oOZbq5lcofb.jpg'
          },
          {
            credit_id: '5d5075ca0102c9001274ddf9',
            department: 'Writing',
            gender: 2,
            id: 1161593,
            job: 'Screenplay',
            name: 'Micah Fitzerman-Blue',
            profile_path: null
          },
          {
            credit_id: '5d5076649c0550001944d71b',
            department: 'Editing',
            gender: 0,
            id: 1428905,
            job: 'Editor',
            name: 'Laura Jennings',
            profile_path: null
          },
          {
            credit_id: '5d5076419c0550001644de2b',
            department: 'Production',
            gender: 2,
            id: 1530865,
            job: 'Executive Producer',
            name: 'Michael Vieira',
            profile_path: null
          },
          {
            credit_id: '5d50761b1d820f0016798ebf',
            department: 'Production',
            gender: 2,
            id: 1611353,
            job: 'Executive Producer',
            name: 'Matt Smith',
            profile_path: '/bql3Yg0VKD5uu0j1VzM46SM407x.jpg'
          },
          {
            credit_id: '5d5076bdcc277c0016f0c3a7',
            department: 'Art',
            gender: 0,
            id: 1924836,
            job: 'Set Decoration',
            name: 'Dominic Capon',
            profile_path: null
          }
        ]
      };
      spyOn(service, 'getCastAndCrew').and.callThrough();
      service.getCastAndCrew(420809);
      service.getCastAndCrew(420809).subscribe(res => {
        expect(res.toEqual(creditDetails));
      });
    });
  });
});
