import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Activity } from '../models/Activity.model';

@Component({
  selector: 'app-all-activities',
  templateUrl: './all-activities.component.html',
  styleUrls: ['./all-activities.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class AllActivitiesComponent implements OnInit {
  activities: Activity[] = [];
  userLoggedIn = true;  // Assuming the user is always logged in
  userRole: string = 'ADMIN';  // Only one role - ADMIN

  constructor(private router: Router) {}

  ngOnInit() {
    this.getAllActivities();
  }

  goToUserDetails() {
    const userId = '1';  // Dummy user ID
    this.router.navigate(['/admin/UserDetails/' + userId]);
  }

  viewDetails(activity: Activity) {
    const activityId = activity.activityId;
    this.router.navigate(['/admin/ActivityDetails']);
  }

  getAllActivities() {
    this.activities = [
      { activityId: '1', name: 'Hiking', imageUrl: 'assets/hiking.jpg', location: 'Mountain Trail', price: 50, expertId: 'exp1' },
      { activityId: '2', name: 'Kayaking', imageUrl: 'assets/kayaking.jpg', location: 'River Rapids', price: 75, expertId: 'exp2' },
      { activityId: '3', name: 'Rock Climbing', imageUrl: 'assets/rock_climbing.jpg', location: 'Cliffside', price: 100, expertId: 'exp3' },
      { activityId: '4', name: 'Skydiving', imageUrl: 'assets/skydiving.jpg', location: 'Airfield', price: 200, expertId: 'exp4' },
      { activityId: '5', name: 'Surfing', imageUrl: 'assets/surfing.jpg', location: 'Beach', price: 80, expertId: 'exp5' },
      { activityId: '6', name: 'Biking', imageUrl: 'assets/biking.jpg', location: 'Forest Trail', price: 40, expertId: 'exp6' },
      { activityId: '7', name: 'Skiing', imageUrl: 'assets/skiing.jpg', location: 'Snowy Mountain', price: 150, expertId: 'exp7' },
      { activityId: '8', name: 'Paragliding', imageUrl: 'assets/paragliding.jpg', location: 'Hilltop', price: 120, expertId: 'exp8' },
      { activityId: '9', name: 'Scuba Diving', imageUrl: 'assets/scuba_diving.jpg', location: 'Coral Reef', price: 250, expertId: 'exp9' },
      { activityId: '10', name: 'Zip Lining', imageUrl: 'assets/zip_lining.jpg', location: 'Treetop Canopy', price: 60, expertId: 'exp10' },
    ];
  }
}
