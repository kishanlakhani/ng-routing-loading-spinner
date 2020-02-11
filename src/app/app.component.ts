import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router,Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-routing-loading-spinner';
  isLoading:boolean = false;

  constructor(
    private _router:Router
  ){}

  ngOnInit(): void {
    this._router.events.subscribe((event:Event)=>{
      // console.log(event);

      if(event instanceof NavigationStart){
        this.isLoading = true;
      }
      if(event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError){
        setTimeout(()=>{
          this.isLoading = false;
        },2000)
      }


    })
  }
}
