import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComputerService } from 'src/app/services/computer.service';
import { Computer } from 'src/app/models/computer';

@Component({
  selector: 'app-edit-computer',
  templateUrl: './edit-computer.component.html',
  styleUrls: ['./edit-computer.component.css']
})
export class EditComputerComponent implements OnInit {
  computerToUpdate: Computer;
  isLoading: boolean;
  marqueDisponible: string[];
  typeDisponible: string[];
  categoryDisponible: string[];

  constructor(private activatedRoute: ActivatedRoute, private computerService: ComputerService, private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    this.marqueDisponible = this.computerService.marqueDisponible;
    this.typeDisponible = this.computerService.typeDisponible;
    this.categoryDisponible = this.computerService.categoryDisponible;
    this.computerService.getOneComupter(+this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(data => {
        this.computerToUpdate = data;
        this.isLoading = false;
      });
  }

  updateComputer() {
    this.computerService.updateComputer(this.computerToUpdate).subscribe(data => {
      this.router.navigate(['/home']);
    });
 
  }

  onSubmit() {
    this.computerService.updateComputer(this.computerToUpdate).subscribe(then => {
      this.router.navigate(['/home']);
    });

}

}
