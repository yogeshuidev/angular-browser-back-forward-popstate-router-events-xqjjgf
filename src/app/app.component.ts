import { Component, OnInit } from '@angular/core';
import { Router, Event as NavigationEvent, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  title = 'Angular-popstate-browser-back-forward';
  today = (new Date()).getFullYear();
  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events
    .pipe(
      filter((event: NavigationEvent) => event instanceof NavigationStart)
    )
    .subscribe((event: NavigationStart) => {
      console.group('NavigationStart Event');
      // Every navigation sequence is given a unique ID. Even "popstate"
      // navigations are really just "roll forward" navigations that get
      // a new, unique ID.
      console.log('navigation id:', event.id);
      console.log('route:', event.url);
      // The "navigationTrigger" will be one of:
      // --
      // - imperative (ie, user clicked a link).
      // - popstate (ie, browser controlled change such as Back button).
      // - hashchange
      // --
      // NOTE: I am not sure what triggers the "hashchange" type.
      console.log('trigger:', event.navigationTrigger);
      if (event.navigationTrigger === 'popstate') {
        confirm('Do you wanna discard or save changes ?');
      }

      // This "restoredState" property is defined when the navigation
      // event is triggered by a "popstate" event (ex, back / forward
      // buttons). It will contain the ID of the earlier navigation event
      // to which the browser is returning.
      // --
      // CAUTION: This ID may not be part of the current page rendering.
      // This value is pulled out of the browser; and, may exist across
      // page refreshes.
      if (event.restoredState) {
        console.warn(
          'restoring navigation id:',
          event.restoredState.navigationId
        );
      }

      console.groupEnd();
    });
  }
}

