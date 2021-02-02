import { Directive , ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el :  ElementRef , private renderer:Renderer2) { }

  @HostListener('mouseover') onHover(){
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#54a0ff');  
  }

  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'transparent');
  }

}
