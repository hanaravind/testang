import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';
@Component({
  selector: 'app-empprofile',
  templateUrl: './empprofile.component.html',
  styleUrls: ['./empprofile.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class EmpprofileComponent implements OnInit {
profileData;
filteredProfile;
dataLoaded = false;
  constructor(private route: ActivatedRoute, private http: BackendService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.http.getProfileData(id)
      .subscribe(data => {
        this.profileData = data['Success']
        this.filteredProfile = this.profileData.filter(profile => profile.id === id.toString())
        this.dataLoaded = true;
        console.log(this.filteredProfile)
      });
  }
  }
