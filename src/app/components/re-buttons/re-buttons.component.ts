import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "Buttons",
  templateUrl: "./re-buttons.component.html",
  styleUrls: ["./re-buttons.component.scss"],
})
export class ReButtonsComponent implements OnInit {
  @Input() btnClass: string = "default";
  @Input() btnText: string = "Default";
  @Input() disabled: boolean = false;
  @Input() disabledShadow: boolean = false;
  @Input() small: boolean = false;
  @Input() medium: boolean = false;
  @Input() large: boolean = false;
  @Input() startIcon: string = "";
  @Input() endIcon: string = "";

  constructor() {}

  ngOnInit() {}
}
