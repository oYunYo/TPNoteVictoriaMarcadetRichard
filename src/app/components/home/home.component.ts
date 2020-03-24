import { Component, OnInit, TemplateRef } from '@angular/core';
import { ComputerService } from 'src/app/services/computer.service';
import { Computer } from 'src/app/models/computer';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  computers: Computer[];
  isLoading: boolean;
  modalRef: BsModalRef;

  constructor(private computerService: ComputerService, private modalService: BsModalService) { }

  ngOnInit() {
    this.isLoading = true;
    this.computerService.getComputers().subscribe(data => {
      this.computers = data;
      this.isLoading = false;
    });
  }

  deleteComputer(id: number) {
    this.isLoading = true;
    this.computerService.deleteComputer(id).subscribe(then => { 
      this.computerService.getComputers().subscribe((data: Computer[]) => { 
        this.computers = data;
        this.isLoading = false;
      });
    });
  }

  round(number, precision){
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirmDeleteComputer(id) {
    this.deleteComputer(id);
    this.modalRef.hide();
  }

  declineDeleteComputer() {
    this.modalRef.hide();
  }
}
