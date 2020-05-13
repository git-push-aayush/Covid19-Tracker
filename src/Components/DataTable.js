import React , {Component} from 'react';
import $ from 'jquery';
import 'datatables.net';
let table;
const tableStyle={ width : "100%" , alignItems:"center" }


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
            
            <table id="example" className="display table-responsive-sm compact" style={tableStyle} >
             <thead>
                 <tr>
                     <th>{this.props.firstCol}</th>
                     <th>Confirm</th>
                     <th>Active</th>
                     <th>Recover</th>
                     <th>Death</th>
                     
                 </tr>
             </thead>
             
             </table>
             
        
         );

    }
    
}

export default dataTable;