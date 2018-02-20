
import {Component, OnInit} from "@angular/core";
import {Place} from "./place.model";
import {DashboardService} from "./dashboard.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [DashboardService]

})
export class DashboardComponent implements OnInit{

    areaChart: Object;
    barChart: Object;
    pieChart: Object;
    places: Place[] =[];

    constructor (private dashboardService:DashboardService) {}

    ngOnInit(){
        this.dashboardService.getPlaces()
            .subscribe(
                (places: Place[]) => {
                    this.places = places;
                    this.getGraph();
                }
            );


    }

    getGraph() {

        console.log(this.places);

        this.areaChart = {
            chart: {
                type: 'area'
            },
            title: {
                text: 'Comparison of sales in different cities'
            },
            xAxis: {
                categories: ['Laptops', 'Accessories', 'Phones', 'Televisions']
            },
            credits: {
                enabled: false
            },
            series: [{
                name: this.places[0].city,
                data: [this.places[0].laptops, this.places[0].accesories, this.places[0].phones, this.places[0].televisions]
            }, {
                name: this.places[1].city,
                data: [this.places[1].laptops, this.places[1].accesories, this.places[1].phones, this.places[1].televisions]
            }, {
                name: this.places[2].city,
                data: [this.places[2].laptops, this.places[2].accesories, this.places[2].phones, this.places[2].televisions]
            }]
        };

        this.barChart = {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Comparison of sales in different cities'
            },
            xAxis: {
                categories: ['Laptops', 'Accessories', 'Phones', 'Televisions']
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Total fruit consumption'
                }
            },
            legend: {
                reversed: true
            },
            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },
            series: [{
                name: this.places[0].city,
                data: [this.places[0].laptops, this.places[0].accesories, this.places[0].phones, this.places[0].televisions]
            }, {
                name: this.places[1].city,
                data: [this.places[1].laptops, this.places[1].accesories, this.places[1].phones, this.places[1].televisions]
            }, {
                name: this.places[2].city,
                data: [this.places[2].laptops, this.places[2].accesories, this.places[2].phones, this.places[2].televisions]
            }]
        };

        this.pieChart = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Percentage of Total sales'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %',

                    }
                }
            },
            series: [{
                name: 'Products',
                colorByPoint: true,
                data: [{
                    name: 'Laptops',
                    y: 9
                }, {
                    name: 'Accessories',
                    y: 24.03,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Phones',
                    y: 10.38
                }, {
                    name: 'Televisions',
                    y: 4.77
                }]
            }]
        }
    }
}