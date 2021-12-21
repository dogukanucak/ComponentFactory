import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector,
  Type,
} from "@angular/core";

@Injectable()
export class DomService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  createComponent<T>(component: Type<T>, componentProps?: object) {
    // 1. Create a component reference from the component
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    if (componentProps && typeof componentRef.instance === "object") {
      Object.assign(componentRef.instance, componentProps);
    }

    return componentRef;
  }

  attachComponent(componentRef: ComponentRef<unknown>, appendTo: Element) {
    // 2. Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // 3. Get DOM element from component
    const domElem = (componentRef.hostView as EmbeddedViewRef<unknown>)
      .rootNodes[0] as HTMLElement;

    // 4. Append DOM element to the body
    appendTo.appendChild(domElem);

    return;
  }
}
