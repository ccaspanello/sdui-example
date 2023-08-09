import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { TextComponent } from '../components/text/text.component';
import { ButtonComponent } from '../components/button/button.component';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  createComponent(componentType: string, data: any, viewContainerRef: ViewContainerRef) {
    let component: any;
    switch (componentType) {
      case 'text':
        component = TextComponent;
        break;
      case 'button':
        component = ButtonComponent;
        break;
      default:
        throw new Error(`Unsupported component type: ${componentType}`);
    }

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const instance: any = componentRef.instance as TextComponent | ButtonComponent;

    Object.keys(data).forEach((key) => {
      instance[key] = data[key];
    });
  }
}
