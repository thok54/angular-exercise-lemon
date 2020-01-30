import { Component } from '@angular/core';

import { MemberEntity } from '../models/member.model';
import { MembersApiService } from '../members-api.service';

@Component({
  selector: 'app-members-table',
  templateUrl: './members-table.component.html',
  styles: []
})
export class MembersTableComponent {
  members: MemberEntity[];
  organization: string = 'lemoncode';

  constructor(private membersApi: MembersApiService) { }

  loadMembers(organization: string) {
    if (organization == "") organization = "lemoncode";
    this.organization = organization;
    console.log(this.organization);
    this.membersApi.getAllMembers(this.organization)
      .subscribe((ms) => this.members = ms);
  }

}
