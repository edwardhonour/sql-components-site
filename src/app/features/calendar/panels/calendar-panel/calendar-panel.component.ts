import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core'; 
import dayGridPlugin from '@fullcalendar/daygrid';
import  InteractionPlugin  from '@fullcalendar/interaction';
import { DataService } from '/Users/user/sql-components-site/src/app/data.service';

@Component({
  selector: 'app-calendar-panel',
  standalone: true,
  imports: [CommonModule, FullCalendarModule ],
  templateUrl: './calendar-panel.component.html',
  styleUrls: ['./calendar-panel.component.css']
})
export class CalendarPanelComponent implements OnInit {
  data: any;
  adding: any;
  page_id: string='1';
  panel_id: string='1';
  accordion: any;
  @Input() status: string = 'Y';
  @Output() message: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private _dataService: DataService
    ) { }

    handleDateClick(arg:any) {
      console.log(arg.event._def.publicId)
      console.log('date click')
      console.log(arg)
    }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, InteractionPlugin],
    eventClick: this.handleDateClick.bind(this), // MUST ensure `this` context is maintained
    events: [
      { id: 'IL0023', title: 'IL0023 - >Decker', date: '2023-02-02', color: 'purple' },
      { id: 'IL0024', title: 'IL0024 - Est Start', date: '2023-02-02' },
      { id: 'IL0025', title: 'IL0025 - Est Start', date: '2023-02-02' },
      { id: 'IL0026', title: 'IL0026 - Est Start', date: '2023-02-02' },
    ]
  };

  closeCalendar() {
    this.message.emit("close my calendar")
  }

    ngOnInit(): void {

    }

    ngOnChanges() {

    }

}