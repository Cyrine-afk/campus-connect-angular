import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DashboardService } from './dashboardService.service';

describe('DashboardService', () => {
  let service: DashboardService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DashboardService]
    });

    service = TestBed.inject(DashboardService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getChambersAssigned', () => {
    it('should return the list of assigned chambers with user names', () => {
      const mockResponse = [
        {
          id: 1,
          bloc: 'A',
          users: ['user1', 'user2']
        },
        {
          id: 2,
          bloc: 'B',
          users: ['user3', 'user4']
        }
      ];


      const req = httpTestingController.expectOne('/api/dashboard/chambers');
      expect(req.request.method).toEqual('GET');
      req.flush(mockResponse);
    });
  });
});