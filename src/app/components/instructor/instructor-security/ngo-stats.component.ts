import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { FormControl, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-ngo-stats',
  templateUrl: './ngo-stats.component.html',
  styleUrls: ['./ngo-stats.component.css']
})



export class NgoStatsComponent implements OnInit {


  ctx : any;
  config : any;
  chartData : number[] = [];
  chartDatalabels : any[] = [];
  
    ngOnInit(){
  
      this.chartData.push(0);
      this.chartData.push(0);
      this.chartData.push(2);
      this.chartData.push(4);
  
      this.chartDatalabels.push('ENVIRONMENTAL');
      this.chartDatalabels.push('QUASIAUTONOMOUS');
      this.chartDatalabels.push('GOVERNMENTAL');
      this.chartDatalabels.push('INTERNATIONAL');
  
      this.ctx = document.getElementById('myChart');
      this.config = {
        type : 'pie',
        options : {
        },
        data : {
          labels : this.chartDatalabels,
          datasets : [{ 
            label: 'Chart Data',
            data: this.chartData,
            borderWidth: 1,
            borderColor: 'white',
            backgroundColor: ['pink', 'yellow','red', 'orange']
        }],
        }
      }
      const myChart = new Chart(this.ctx, this.config);
    }

}





