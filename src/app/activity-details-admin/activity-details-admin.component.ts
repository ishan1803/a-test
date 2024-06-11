import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-activity-details-admin',
  templateUrl: './activity-details-admin.component.html',
  styleUrls: ['./activity-details-admin.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ActivityDetailsAdminComponent implements OnInit {
  activity = {
    activityId: '1',
    name: 'Sample Activity',
    price: '$100',
    location: 'Sample Location',
  };
  images: string[] = [
    'assets/activity1.jpg',
    'assets/activity2.jpg',
    'assets/activity3.jpg',
    'assets/activity4.jpg',
    'assets/activity5.jpg'
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    // No need to fetch activity details from the backend, using hardcoded values
  }

  viewReviews(activityId: string) {
    console.log('Viewing reviews for activity with ID:', activityId);
    // Redirect to reviews route
    this.router.navigateByUrl('/reviews/' + activityId);
  }

  viewBookings(activityId: string) {
    this.router.navigateByUrl('/bookingsActivity/' + activityId);
  }

  goBack() {
    this.location.back();
  }
}
