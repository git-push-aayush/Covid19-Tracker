import React , {Component} from 'react';
import $ from 'jquery';
import 'datatables.net';
let table;
class dataTable extends Component{
    render(){
        
        $(document).ready(function() {
         table= $('#example').DataTable({
            "retrieve" :true,
            "pageLength":50,
            "order": [[ 1, "desc" ]]
         });
         
        } );
        if(this.props.isAvailable && table!==undefined)
        {
            table.clear();
            table.rows.add(this.props.Data).draw();

        }
       
        return(
            <div className="col-lg-6">
            <table id="example" className="display" >
             <thead>
                 <tr>
                     <th>State</th>
                     <th>Confirmed</th>
                     <th>Active</th>
                     <th>Recovered</th>
                     <th>Death</th>
                     
                 </tr>
             </thead>
             
             </table>
             
            </div>
         );

    }
    
}

export default dataTable;