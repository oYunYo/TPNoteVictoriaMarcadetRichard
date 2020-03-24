import { Component, OnInit } from '@angular/core';
import { ComputerService } from 'src/app/services/computer.service';
import { ActivatedRoute } from '@angular/router';
import { Computer } from 'src/app/models/computer';

@Component({
  selector: 'app-computer-detail',
  templateUrl: './computer-detail.component.html',
  styleUrls: ['./computer-detail.component.css']
})
export class ComputerDetailComponent implements OnInit {
  computer: Computer;
  isLoading: boolean;

  constructor(private computerService: ComputerService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.isLoading = true;
    this.computerService.getOneComupter(+this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(
        data => {
        this.computer = data;
        this.isLoading = false;
      },
      error => {
        this.computer = null;
        this.isLoading = false;
      }
      );
  }

  round(number, precision){
    var factor = Math.pow(10, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
}

}
