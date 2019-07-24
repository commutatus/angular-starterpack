import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {

  @ViewChild('confirmationModal', {static: false}) confirmationModal: ModalDirective;
  @Output() close: EventEmitter<boolean> = new EventEmitter();
  @Input() customContent: string;
  @Input() customSubmitText: string;

  constructor() { }

  ngOnInit() {
  }


  hideModal() {
    this.confirmationModal.hide();
    this.close.emit(false);
  }


  closeModal(close) {
    this.confirmationModal.hide();
    if (close) {
      this.close.emit(true);
    } else {
      this.close.emit(false);
    }
  }

}
