import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Output('serverCreated') serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output('blueprintCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @ViewChild('serverContentInput', { static: true })
  serverContentInput?: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContentInput?.nativeElement.value,
    });
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContentInput?.nativeElement.value,
    });
  }
}
