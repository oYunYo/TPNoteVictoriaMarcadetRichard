import { Component, OnInit } from '@angular/core';
import { ComputerService } from 'src/app/services/computer.service';
import { Computer } from 'src/app/models/computer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  computers: Computer[];
  isLoading: boolean;

  constructor(private computerService: ComputerService) { }

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


}
