import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class EmplistComponent implements OnInit {
  profiles;
  dataLoaded = false;
  mapData;
  scalecontrol = true

  constructor(private http: BackendService, private route: Router) { }

  ngOnInit() {
    this.http.getProfiles().subscribe(data => {
      console.log('profile list data is', data['Success'], data);
      this.profiles = data['Success'];
      this.mapData = data['location']
      this.dataLoaded = true
    });
  }
}
