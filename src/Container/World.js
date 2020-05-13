import React ,{Component} from 'react';
import DataTable from "../Components/DataTable";
import axios from "axios";
import Cards from "../Components/Cards";
const main={
    padding : '3%'  
}

class World extends Component{
    state={
        countries: null,
        total:  {
            total_confirmed:"0",
            total_active: "0",
            total_recovered:"0",
            total_death:"0"
        },
        isResponse: false
    }
    componentDidMount(){
        axios.get("https://cors-anywhere.herokuapp.com/https://covid-19-status-tracker.herokuapp.com/world")
         .then(response=>{
            const total=response.data[0];
            const country=response.data.slice(1,response.data.length);
            this.setState({
                countries:country , total:total , isResponse:true
            });
            //  console.log(this.state.countries);
            // console.log(this.state.total);
            
        });
 }
    render(){
        let tableData=[];
        if(this.state.isResponse )
        {
           tableData=  this.state.countries.map(countryWise =>{
                
                    let stats =[];
                    stats.push(countryWise.country);
                    stats.push(countryWise.confirmed);
                    stats.push(countryWise.active);
                    stats.push(countryWise.recovered);
                    stats.push(countryWise.death);
                     return stats;
                   
            });
        }
        return(
            <div className="container" style={main}>
                <Cards heading="World Total" confirmed={this.state.total.total_confirmed} 
                      active={this.state.total.total_active} recovered={this.state.total.total_recovered}
                      death={this.state.total.total_death}/>
                <DataTable firstCol="Countries" isAvailable={this.state.isResponse} Data={tableData}/>
            </div>
        );
    }
}

export default World;