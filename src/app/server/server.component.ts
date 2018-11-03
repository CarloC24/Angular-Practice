import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId: number;
  serverStatus: string;

  constructor() {
    this.serverId = 30;
    this.serverStatus = 'offline';
  }

  ngOnInit() {}

  getServerStatus() {
    return this.serverStatus;
  }
}

export default ServerComponent;
