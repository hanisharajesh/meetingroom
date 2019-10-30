import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book Meeting-room';
  UpdateFlag: Boolean = false;

  userDetail: any = {
    id:"",
    name: "",
    meetingroom: "",
    date: "",
    time: "",
    agenda:""
  }

  userdeatils: any = [
    { id: 1, name: "Hanisha", meetingroom: 1, date: "2019-10-22", time: 1, agenda: "new project" },
    { id: 2, name: "Rajesh", meetingroom: 2, date: "2019-10-19", time: 2, agenda: "team meeting" },
    { id: 3, name: "Ramya", meetingroom: 3, date: "2019-10-21", time: 3, agenda: "Meeting with Manager" },
    { id: 4, name: "Vineetha", meetingroom: 4, date: "2019-10-14", time: 4, agenda: "Team meetup" },
    { id: 5, name: "Divya", meetingroom: 6, date: "2019-10-19", time: 5, agenda: "new project" }
  ];

/* meeting room array  */
  MeetingRooms: any = [
    { room_id: 1, room_name: 'Room 1', room_status: 'Available' },
    { room_id: 2, room_name: 'Room 2', room_status: 'Available' },
    { room_id: 3, room_name: 'Room 3', room_status: 'Available' },
    { room_id: 4, room_name: 'Room 4', room_status: 'Available' },
    { room_id: 5, room_name: 'Room 5', room_status: 'Available' },
    { room_id: 6, room_name: 'Room 6', room_status: 'Available' },
    { room_id: 7, room_name: 'Room 7', room_status: 'Available' },
    { room_id: 8, room_name: 'Room 8', room_status: 'Available' },
    { room_id: 9, room_name: 'Room 9', room_status: 'Available' },
    { room_id: 10,room_name:'Room 10', room_status: 'Available' },
  ];
/* time slot array */
  Timing: any = [
    { slot_id: 1, slot_name: "09:00 - 09:30" },
    { slot_id: 2, slot_name: "09:30 - 10:00" },
    { slot_id: 3, slot_name: "10:00 - 10:30" },
    { slot_id: 4, slot_name: "10:30 - 11:00" },
    { slot_id: 5, slot_name: "11:00 - 11:30" },
    { slot_id: 6, slot_name: "11:30 - 12:00" },
    { slot_id: 7, slot_name: "12:00 - 12:30" },
    { slot_id: 8, slot_name: "12:30 - 13:00" },
    { slot_id: 9, slot_name: "13:00 - 13:30" },
    { slot_id: 10, slot_name: "13:30 - 14:00" },
    { slot_id: 11, slot_name: "14:00 - 14:30" },
    { slot_id: 12, slot_name: "14:30 - 15:00" },
    { slot_id: 13, slot_name: "15:00 - 15:30" },
    { slot_id: 14, slot_name: "15:30 - 16:00" },
    { slot_id: 15, slot_name: "16:00 - 16:30" },
    { slot_id: 16, slot_name: "16:30 - 17:00" },
    { slot_id: 17, slot_name: "17:00 - 17:30" },
    { slot_id: 18, slot_name: "17:30 - 18:00" },
  ]

  itemAdd() {
    this.userDetail.id = this.userdeatils.length + 1;
    this.userdeatils.push(this.userDetail);
    this.flush();
  }

  itemDel(id) {
  
    for(let i =0; i< this.userdeatils.length; i++) {

      if(this.userdeatils[i].id == id) {
        this.userdeatils.splice(i, 1);
      }

    }
  }

  edit(user) {
    console.log(user);
    this.userDetail.id = user.id;
    this.userDetail.name = user.name;
    this.userDetail.meetingroom = user.meetingroom;
    this.userDetail.date = user.date;
    this.userDetail.time = user.time;
    this.userDetail.agenda = user.agenda;
    console.log(this.userDetail);
    this.UpdateFlag = true;
  }

  Update() {

    for( let i =0; i < this.userdeatils.length; i++) {
      if(this.userdeatils[i].id == this.userDetail.id) {

        this.userdeatils[i].name = this.userDetail.name;
        this.userdeatils[i].meetingroom = this.userDetail.meetingroom;
        this.userdeatils[i].date = this.userDetail.date;
        this.userdeatils[i].time = this.userDetail.time;
        this.userdeatils[i].agenda = this.userDetail.agenda;
      }
    }
    this.UpdateFlag = false;

    this.flush();

  }
  onChange(event) {
    console.log(event.target.value);
    this.userDetail.meetingroom = event.target.value;
}


flush() {
  this.userDetail = {
    id:"",
    name: "",
    place: "",
    email: "",
    phone: ""
  }
}
}
