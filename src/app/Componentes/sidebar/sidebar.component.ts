import { Component,Renderer2, ElementRef, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

  options = this._formBuilder.group({
    bottom: 0,
    fixed: true,
    top: 0,
  });

  panelOpenState = false;

  constructor(private _formBuilder: FormBuilder, private renderer: Renderer2, private el:ElementRef,private componentFactoryResolver: ComponentFactoryResolver) {}

  
  save(){
    
  }


}
