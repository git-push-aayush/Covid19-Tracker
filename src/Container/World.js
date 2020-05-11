import React ,{Component} from 'react';

import axios from "axios";
class World extends Component{
    state={
        countries: null,
        total: null,
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
            console.log(this.state.countries);
            console.log(this.state.total);
            
        });
 }
    render(){
        return(
            <div>
                
            </div>
        );
    }
}

export default World;