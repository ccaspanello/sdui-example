// parent.component.ts
import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { DynamicComponentService } from '../../services/dynamic-component.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parent',
  template: `
    <ng-container #dynamicComponentContainer></ng-container>
  `,
})
export class SduiComponent implements AfterViewInit {
  

  
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef, static: false })
  dynamicComponentContainer!: ViewContainerRef;

  constructor(
    private dynamicComponentService: DynamicComponentService,
  ) {}

  ngAfterViewInit() {

    const components: any[] = [
      {
        "type": "text",
        "content": "Hello, Text Component!"
      },
      {
        "type": "button",
        "label": "Click Me"
      }
    ];    
    setTimeout(() => {
    components.forEach((componentData) => {
      this.dynamicComponentService.createComponent(
        componentData.type,
        componentData,
        this.dynamicComponentContainer
      );
    });
  
  });
}
}
