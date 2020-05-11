import React , {Component} from 'react';
import Cards from '../Components/Cards';
import DataTable from '../Components/DataTable';
import axios from "axios";
import  "./India.css";
import IndiaMap from "./IndiaMap";

class India extends Component{
    state={
        states: null,
        total: {
            total_confirmed:"0",
            total_active: "0",
            total_recovered:"0",
            total_death:"0"
        },
        isResponse: false,
        region_code: null,
        region_name: null,
        
    }
    
    componentDidMount(){
           
        axios.get("http://api.ipstack.com/check?access_key=ee5de9996275cb27bb5d1d4697d9f7e0")
             .then(response=>{
               
                if(response.data.country_name === "India")
                  this.setState({ region_code:response.data.region_code , 
                                  region_name:response.data.region_name
                                  });
                console.log(this.state.region_code+" " + this.state.region_name);
             });
        axios.get("https://cors-anywhere.herokuapp.com/https://covid-19-status-tracker.herokuapp.com/india")
            .then(response=>{
               const total=response.data[0];
               const state=response.data.slice(1,response.data.length);
               console.log(state)
               this.setState({
                   states:state , total:total , isResponse:true
               });
               console.log(this.state.states);
               console.log(this.state.total);
               
           });
    }
    render(){
        let tableData=[];
        let located_state=null , render_map=null;
        if(this.state.isResponse )
        {
           tableData=  this.state.states.map(stateWise =>{
                
                    let stats =[];
                    stats.push(stateWise.state);
                    stats.push(stateWise.confirmed);
                    stats.push(stateWise.active);
                    stats.push(stateWise.recovered);
                    stats.push(stateWise.death);
                     return stats;
                   
            });
            render_map =<IndiaMap MapData={this.state.states}/>
            if(this.state.region_code != null){
                let region_index = this.state.states.map(e=> e.id).indexOf(this.state.region_code);
                located_state=<Cards heading={this.state.states[region_index].state} 
                                confirmed={this.state.states[region_index].confirmed}
                                active={this.state.states[region_index].active}
                                recovered={this.state.states[region_index].recovered}
                                death={this.state.states[region_index].death}/>
            }
            
            
        }
        
        return(
           
           <div>
               <Cards heading="India" confirmed={this.state.total.total_confirmed} 
                      active={this.state.total.total_active} recovered={this.state.total.total_recovered}
                      death={this.state.total.total_death}/>
                {located_state}      
               <section className="data">
                <div className="row">
                 <div className="col-lg-6">
                   <DataTable Data={tableData} isAvailable={this.state.isResponse}/>
                 </div>
                  
                 <div className="col-lg-6">
                   {render_map}
                 </div>     
                  
                </div>
               </section>
               
               
            </div>
        );
    }
}

export default India;