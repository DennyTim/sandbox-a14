import {
  Component,
  Input
} from "@angular/core";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.scss"]
})
export class BodyComponent {
  @Input() public collapsed = false;
  @Input() public screenWidth = 0;
}
