import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Feeback Form';
  feedbackArray = [
    {name: 'Prop1', value: 0 },
    {name: 'Prop2', value: 0 },
    {name: 'Prop3', value: 0 },
    {name: 'Prop4', value: 0 },
    {name: 'Prop5', value: 0 }
  ];

  submit(f){
    console.log(f.value)
  }
}
