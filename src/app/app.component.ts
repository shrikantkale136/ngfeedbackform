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
  element: HTMLElement;
  images = [
    {id : 1, img: "https://cdn.pixabay.com/photo/2017/03/05/21/55/emogi-1799208_960_720.png"},
    {id : 2, img: "https://cdn.pixabay.com/photo/2016/11/04/23/16/emoticon-2120024_960_720.png"}]

public img ;

  getVal(name,value){
    console.log(name,value)
    this.element = document.getElementById(name) as HTMLElement;
    console.log(this.element)
    if(value === 1){
      this.element.setAttribute("src","https://cdn.pixabay.com/photo/2017/03/05/21/55/emoticon-2120024_960_720.png");
    }else {
      this.element.setAttribute("src","https://cdn.pixabay.com/photo/2016/11/04/23/16/emogi-1799208_960_720.png");
    }
  }



  submit(f){
    console.log(f.value)
  }
}
