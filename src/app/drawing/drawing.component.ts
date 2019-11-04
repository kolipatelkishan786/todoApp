import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Surface} from "@progress/kendo-drawing";
import {drawScene} from "../draw-scene";

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.scss']
})
export class DrawingComponent {
  @ViewChild('surface')
  private surfaceElement: ElementRef;
  private surface: Surface;

  public ngAfterViewInit(): void {
    drawScene(this.createSurface());
  }

  public ngOnDestroy() {
    this.surface.destroy();
  }

  private createSurface(): Surface {
    // Obtain a reference to the native DOM element of the wrapper
    const element = this.surfaceElement.nativeElement;

    // Create a drawing surface
    this.surface = Surface.create(element);

    return this.surface;
  }

}
