import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'user-details-admin',
  templateUrl: './user-details-admin.component.html',
  styleUrls: ['./user-details-admin.component.css']
})
export class UserDetailsAdminComponent implements OnInit {
  user = {
    id: 1,
    name: 'Dishita Sharma',
    email: 'dishita100@gmail.com'
  };

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private location: Location
  ) {}

  ngOnInit(): void {
    // No need to fetch user details from the backend, using hardcoded values
  }

  fetchUsers() {
    console.log('Getting details...');
    // Route to allUsers
    this.router.navigate(['/allUsers']);
  }

  updateDetails(userId: number) {
    this.router.navigateByUrl('/updateUser/' + userId).then(success => {
      if (success) {
        console.log('Navigation successful');
      } else {
        console.error('Navigation failed');
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
