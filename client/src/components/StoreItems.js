import React from "react";
import {Link} from 'react-router-dom'
class StoreItems extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render (){

        if(this.props.storeData){
            let itemPage = "/Store/ItemPage";
            let param = "/"
            function replaceSpaces(x){
                var str = x;
                str = str.replace(/\s+/g, '-').toLowerCase();
                return str;
            }
            const itemList = this.props.storeData.map((item, index)=>
            <div key={index}>
            <Link to={itemPage+param+replaceSpaces(item.name)}>
                <div className="storeItem" id={item.name+item.id} >
                  <h1>{item.name}</h1>
                  <p>Number of Variants:{item.variants}</p>
                  <img src={item.thumbnail_url} alt={item.name} />
                </div>
            </Link>
            </div>
            )
    
            return(
                <div>{itemList}</div>
            )
        }
        else{
            return(<div></div>)
        }
        
    }
}

export default StoreItems;