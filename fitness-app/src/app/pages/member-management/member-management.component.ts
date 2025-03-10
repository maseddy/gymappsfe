import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MemberService } from '../../services/member.service';
import { Member } from '../../models/member.model';

@Component({
  selector: 'app-member-management',
  standalone: true,
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.css'],
  imports: [CommonModule, FormsModule]
})
export class MemberManagementComponent implements OnInit {
  members: Member[] = [];
  newMember: Member = { id: 0, name: '', email: '', phone: '', membershipType: '' };

  constructor(private memberService: MemberService) {}

  ngOnInit() {
    this.loadMembers();
  }

  loadMembers() {
    //this.memberService.getMembers().subscribe(data => this.members = data);
    this.members = [
      { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', membershipType: 'Gold' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', membershipType: 'Silver' },
      { id: 3, name: 'Alice Johnson', email: 'alice@example.com', phone: '555-666-7777', membershipType: 'Platinum' }
    ];
  }

  addMember() {
    /*this.memberService.addMember(this.newMember).subscribe(member => {
      this.members.push(member);
      this.newMember = { id: 0, name: '', email: '', phone: '', membershipType: '' };
    });*/
  }

  deleteMember(id: number) {
    /*this.memberService.deleteMember(id).subscribe(() => {
      this.members = this.members.filter(m => m.id !== id);
    });*/
  }
}
