import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CurrencyServiceService } from 'src/app/services/currency.service.service';
import { ResponseDto } from 'src/app/dto/response.dto';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  exchangeForm!: FormGroup;
  response!: ResponseDto;

  constructor(private fb: FormBuilder, private CurrencyService: CurrencyServiceService) { 
    this.exchangeForm = this.fb.group({
      origen: '',
      destino: '',
      monto: 0
    });
  }

  ngOnInit(): void {
    
  }


  requestExchange() {
    console.log(this.exchangeForm.value);
    this.CurrencyService.getExchangeRate(this.exchangeForm.value.origen, 
      this.exchangeForm.value.destino, 
      this.exchangeForm.value.monto).subscribe({
        next: data => {
          console.log(data);
          this.response = data;
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
  }

}
