import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from "@angular/core";

@Component({
  selector: "cf-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() class: string;
  @Input() leftIcon: string;
  @Input() rightIcon: string;

  @Input() @HostBinding("style.--animation-color") animationColorValue: string;

  @Output("onClick") ButtonClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    this.text = "";
    this.class = "";
    this.leftIcon = "";
    this.rightIcon = "";
    this.animationColorValue = "#000";
  }

  ngOnInit(): void {}

  onButtonClick() {
    window.alert("Host Element Clicked");
  }
}
