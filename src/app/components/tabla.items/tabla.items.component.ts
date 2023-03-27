import { Component, OnInit } from '@angular/core';
import { ResponseItemDto } from 'src/app/dto/response.item.dto';
import { CurrencyServiceService } from 'src/app/services/currency.service.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.items.component.html',
  styleUrls: ['./tabla.items.component.css']
})
export class TablaItemsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'date', 'exchangeFrom', 'exchangeTo','amount', 'result' ];

  data!: ResponseItemDto[];
  numPages: number = 0;
  page: number = 0;

  constructor(private currencyService: CurrencyServiceService) { }

  ngOnInit(): void {
    this.currencyService.getAll(this.page).subscribe({
      next: data => {
        this.data = data['content'];
        this.numPages = data['totalPages'];
        console.log(data['totalPages']);
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }

  atras(){
    if(this.page > 0){
      this.page--;
      this.currencyService.getAll(this.page).subscribe({
        next: data => {
          this.data = data['content'];
          this.numPages = data['totalPages'];
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
    }
  }

  adelante(){
    if(this.page < this.numPages-1){
      this.page++;
      this.currencyService.getAll(this.page).subscribe({
        next: data => {
          this.data = data['content'];
          this.numPages = data['totalPages'];
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
    }
  }


}
