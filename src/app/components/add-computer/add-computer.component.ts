import { Component, OnInit } from '@angular/core';
import { ComputerService } from 'src/app/services/computer.service';
import { Router } from '@angular/router';
import { Computer } from 'src/app/models/computer';

@Component({
  selector: 'app-add-computer',
  templateUrl: './add-computer.component.html',
  styleUrls: ['./add-computer.component.css']
})
export class AddComputerComponent implements OnInit {
  computerForm = new Computer();
  marqueDisponible: string[];
  typeDisponible: string[];
  categoryDisponible: string[];
  isLoading: boolean;

  constructor(private computerService: ComputerService, private router: Router) { }

  ngOnInit() {
    this.marqueDisponible = this.computerService.marqueDisponible;
    this.typeDisponible = this.computerService.typeDisponible;
    this.categoryDisponible = this.computerService.categoryDisponible;
  }

  onSubmit() {   
    this.computerService.addComputer(this.computerForm).subscribe(then => {       
      this.router.navigate(['/home']);   
    }); 
  }
}
