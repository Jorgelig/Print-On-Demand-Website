import React from "react";
import {useParams} from 'react-router-dom';


function replaceDashes(x){
    var str = x;
    str = str.replace(/-/g, ' ');
    return str;
}

function ItemPage(props){
    // constructor(props){
    //     super(props);
    // }
    let { Item } = useParams();
    console.log(Item);
    let itemObj;
    for(let i = 0; i < props.storeData.length; i ++){
        if(replaceDashes(Item) === props.storeData[i].sync_product.name.toLowerCase()){
            itemObj = props.storeData[i]
        }
    }
    console.log(itemObj)
    
    
        return(
            <div>
                <h1>{replaceDashes(Item)}</h1>
            <p>{JSON.stringify(itemObj)}</p>
            </div>
        )
    

    

    
    
}
export default ItemPage;