import { Component, OnInit } from "@angular/core";
import {
  Router,
  Event as NavigationEvent,
  NavigationStart
} from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Angular-popstate-browser-back-forward";
  today = new Date().getFullYear();
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event: NavigationEvent) => event instanceof NavigationStart)
      )
      .subscribe((event: NavigationStart) => {
        if (event.navigationTrigger === "popstate") {
          confirm("Do you wanna discard or save changes ?");
        }
      });
  }
}
