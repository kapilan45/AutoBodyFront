import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
>>>>>>> origin/master

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  constructor(public modal: NgbActiveModal) { }
>>>>>>> origin/master

  ngOnInit() {
  }

}
