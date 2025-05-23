import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, numberAttribute, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hook-lifecycle',
  imports: [],
  templateUrl: './hook-lifecycle.component.html',
  styleUrl: './hook-lifecycle.component.css'
})
export class HookLifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  onSubmit() {
    this.usage = "method call";
    this.CatchEvent(this.seq++, this.onSubmit.name, this.usage);
  }
  seq: number = 1;
  lifecycleEvent: Event[];
  usage: string = "";

  constructor(private router: Router){
    this.lifecycleEvent = [];
    this.usage = "constructor"
    this.lifecycleEvent.push(new Event(this.seq++,  "constructor", this.usage));
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    // use for components input property
    this.usage = "components input property";
    this.CatchEvent(this.seq++, this.ngOnChanges.name, this.usage);
    
  }

  ngOnInit(): void {
    // use for API call
    this.usage = "API call";
    this.CatchEvent(this.seq++, this.ngOnInit.name, this.usage);
    
  }

  ngDoCheck(): void {
    this.usage = "Every change detection";
    this.CatchEvent(this.seq++, this.ngDoCheck.name, this.usage);
    
  }

  ngAfterContentInit(): void {
    this.usage = "ng-content";
    this.CatchEvent(this.seq++, this.ngAfterContentInit.name, this.usage);
  }

  ngAfterContentChecked(): void {
    this.usage = "After ng-content checked";
    this.CatchEvent(this.seq++, this.ngAfterContentChecked.name, this.usage);
  }

  ngAfterViewInit(): void {
    this.usage = "viewChild";
    this.CatchEvent(this.seq++, this.ngAfterViewInit.name, this.usage);
  }

  ngAfterViewChecked(): void {
    this.usage = "viewChild";
    this.CatchEvent(this.seq++, this.ngAfterViewChecked.name, this.usage);

    for (let lifeEvent of this.lifecycleEvent)
    {
        console.log(lifeEvent.seqence + ". " + lifeEvent.name);
    }
    this.seq = 1;
    
  }

  ngOnDestroy(): void {
    this.usage = "Component has been destroyed";
    this.CatchEvent(this.seq++, this.ngOnDestroy.name, this.usage);
    console.log(this.ngOnDestroy.name);
  }

  CatchEvent(seq: number, name: string, usage: string)
  {
    this.lifecycleEvent.push(new Event(seq, name, usage));
  }

}

class Event
{
  seqence: number;
  name: string;
  usage: string;

  constructor(seq: number, eventName: string, usage: string)
  {
    this.seqence = seq;
    this.name = eventName;
    this.usage = usage;
  } 
}
