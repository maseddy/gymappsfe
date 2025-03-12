import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MemberService } from '../../services/member.service';
import { Member } from '../../models/member.model';
import { pick } from 'lodash';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-member-management',
  standalone: true,
  templateUrl: './member-management.component.html',
  styleUrls: ['./member-management.component.css'],
  imports: [CommonModule, FormsModule]
})
export class MemberManagementComponent implements OnInit {
  members: Member[] = [];
  isPopupOpen = false;
  isPopupEdit = false;
  newMember: Member = { id: 0, firstName: '', lastName: '', name: '', email: '', phone: '', joinDate: '', age: 0 };

  constructor(private memberService: MemberService) {}

  ngOnInit() {
    this.loadMembers();
  }

  loadMembers() {
    this.memberService.getMembers().subscribe(
      (data) => {
        this.members = data;
      },
      (error) => {
        console.error('Error fetching members', error);
      }
    );
  }

  openPopup() {
    this.isPopupOpen = true;
  }

  closePopup() {
    this.isPopupOpen = false;
    this.newMember = { id: 0, firstName: '', lastName: '', name: '', email: '', phone: '', joinDate: '', age: 0 };
  }

  openPopupEdit() {
    this.isPopupEdit = true;
  }

  closePopupEdit() {
    this.isPopupEdit = false;
    this.newMember = { id: 0, firstName: '', lastName: '', name: '', email: '', phone: '', joinDate: '', age: 0 };
  }

  addMember() {
    console.log("this.newMember", this.newMember);
    const payload = pick(this.newMember, ['firstName', 'lastName', 'email', 'phone', 'age', 'name']);
    this.memberService.addMember(this.newMember).subscribe(() => {
      Swal.fire({
      icon: 'success',
      title: '<h3 style="font-size: 16px;">Successfully</h3>',
      text: 'New Member have been added!',
      width: '280px',
      padding: '8px',
      showConfirmButton: false,
      timer: 2000,
      customClass: {
        popup: 'small-swal',
      }
    }).then(() => {
      this.loadMembers(); // Navigate after closing Swal
    });
      this.closePopup();
    }, () => {
      Swal.fire({
      icon: 'error',
      title: '<h3 style="font-size: 16px;">Error</h3>',
      text: 'Error Added Member!',
      width: '280px',
      padding: '8px',
      confirmButtonColor: '#DC143C',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'small-swal',
        confirmButton: 'small-ok-btn',
      }
    });
    });
  }

  deleteMember(memberId: number) {
    this.newMember.id = memberId;
    const payload = pick(this.newMember, ['id']);
    this.memberService.deleteMember(this.newMember).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: '<h3 style="font-size: 16px;">Successfully</h3>',
        text: 'Delete the Member!',
        width: '280px',
        padding: '8px',
        showConfirmButton: false,
        timer: 2000,
        customClass: {
          popup: 'small-swal',
        }
      }).then(() => {
        this.loadMembers(); // Navigate after closing Swal
      });
    }, error => {
      Swal.fire({
        icon: 'error',
        title: '<h3 style="font-size: 16px;">Error</h3>',
        text: 'Error Delete Member!',
        width: '280px',
        padding: '8px',
        confirmButtonColor: '#DC143C',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'small-swal',
          confirmButton: 'small-ok-btn',
        }
      });
    });
  }

  editMember(member: any) {
    this.newMember = { ...member };
    console.log("edit", this.newMember);
    this.isPopupEdit = true;
  }

  editMemberProcess() {
    console.log("this.newMember", this.newMember);
    const payload = pick(this.newMember, ['id','firstName', 'lastName', 'email', 'phone', 'age', 'name']);
    this.memberService.editMember(this.newMember).subscribe(() => {
      Swal.fire({
      icon: 'success',
      title: '<h3 style="font-size: 16px;">Successfully</h3>',
      text: 'The information Member have been updated!',
      width: '280px',
      padding: '8px',
      showConfirmButton: false,
      timer: 2000,
      customClass: {
        popup: 'small-swal',
      }
    }).then(() => {
      this.loadMembers(); // Navigate after closing Swal
    });
      this.closePopupEdit();
    }, () => {
      Swal.fire({
      icon: 'error',
      title: '<h3 style="font-size: 16px;">Error</h3>',
      text: 'Error Updated Member!',
      width: '280px',
      padding: '8px',
      confirmButtonColor: '#DC143C',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'small-swal',
        confirmButton: 'small-ok-btn',
      }
    });
    });
  }
}
