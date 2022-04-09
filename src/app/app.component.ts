import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements: any[] = [
    {
      type: 'server',
      name: 'TestServer1',
      content: 'Just a test!',
    },
  ];

  onAddServer(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onAddBlueprint(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onChangeFirst() {
    if (this.serverElements.length > 0) {
      this.serverElements[0].name = 'Changed!';
    }
  }

  onDestroyFirst() {
    if (this.serverElements.length > 0) {
      this.serverElements.splice(0, 1);
    }
  }
}
