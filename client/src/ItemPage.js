import React from "react";
import {useState} from "react";
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
    //let preview = 0;
    const [count, setCount] = useState(0);
    
    for(let i = 0; i < props.storeData.length; i ++){
        if(replaceDashes(Item) === props.storeData[i].sync_product.name.toLowerCase()){
            itemObj = props.storeData[i];
        }
    }
    console.log(itemObj)
    
    if (itemObj){
        return(
            <div>                
                <h1>{replaceDashes(Item)}</h1>
                <img src={itemObj.sync_variants[count].files[1].preview_url} alt={itemObj.sync_variants[count].name} />
                <p>{itemObj.sync_variants[count].name}</p>
                <button onClick={
                    function(){
                        if(count > 0){
                            setCount(count - 1);
                            console.log(count);
                        }
                        else{console.log(count)}
                    }
                }>BACK</button>
                <button onClick={
                    function(){
                        if(count < itemObj.sync_variants.length - 1){
                            setCount(count + 1);
                            console.log(count);
                        }
                        else{console.log(count)}
                    }
                }>NEXT</button>
            </div>
        )
    }
    else{
        return(
            <div>
            </div>
        )
    }
    

    

    
    
}
export default ItemPage;