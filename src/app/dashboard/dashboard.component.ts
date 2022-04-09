import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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

  newServerName = '';
  newServerContent = '';

  constructor() {}

  ngOnInit(): void {}

  onAddServer(serverName: HTMLInputElement, serverContent: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: serverContent.value,
    });
  }

  onAddBlueprint(
    serverName: HTMLInputElement,
    serverContent: HTMLInputElement
  ) {
    this.blueprintCreated.emit({
      serverName: serverName.value,
      serverContent: serverContent.value,
    });
  }
}
