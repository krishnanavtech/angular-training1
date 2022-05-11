import { Directive,ElementRef ,HostBinding,HostListener,Renderer2} from '@angular/core';

@Directive({
  selector: '[appBgcolor]'
})
export class BgcolorDirective {

  constructor(private ele:ElementRef, private renderer:Renderer2) { }

  @HostBinding('style.backgroundColor') bgColor: string | undefined

  @HostListener('click') onClick(){
    this.bgColor='red'
  }

  @HostListener('mouseover') myMouseOver(){
    this.renderer.setStyle(this.ele.nativeElement, 'backgroundColor','yellow' )
  }

  @HostListener('mouseout') myMouseOut(){
    this.renderer.setStyle(this.ele.nativeElement, 'backgroundColor','white' )
    // setTimeout(()=>{
    
    // },500
    // )
  }
}
