import React, { useState } from "react";
import "./index.css";
import logo from './img.png'


function App(){
     const[addtext,setaddtext]=useState('');
    const [data,setData]=useState([])
console.log(data);

        function  TextAdd(){
            if(!addtext){
           alert('plase fill up data');
            }else{
            setData( [...data,addtext]);
            setaddtext('');
        }

        }

function deleteText(id){
 
    const deleteitem =data.filter((val,index)=>{
       
        return index!=id;
});
setData(deleteitem);
}


function remove(){
setData([]);
}

    return(
        <div>
        <div className="main-container">
        
        <div className="img-logo">
        <img src={logo}/>
        </div>
        
<input type='text' value={addtext} onChange={(e)=>setaddtext(e.target.value)} placeholder='add a item' />
<button onClick={TextAdd}>➕</button>

{  data.map((elm,ind)=>
            <div key={elm.id}  className="map-text">
         <h3>{elm} </h3> 
         <div className="edit-button">
         
         <button onClick={()=>deleteText(ind)}>❌</button>
         </div>
         
       
         </div>   
         )
        }
            
        <button onClick={remove}>reset all</button>
        
        </div>
        </div>

    )
}
export default App;
