import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'winning-group';

  currentRoute: string;

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(event => {
      console.log(event);
      this.currentRoute = (event as any).url;
      console.log(this.currentRoute);
    });
  }
}
