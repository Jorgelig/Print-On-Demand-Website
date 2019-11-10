import React from "react";
import {useParams} from 'react-router-dom';



function replaceDashes(x){
    var str = x;
    str = str.replace(/-/g, ' ');
    return str;
}

function Yee(){
    let { Item } = useParams();
    console.log(replaceDashes(Item))
    return("")
}

class ItemPage extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render (){
        
        return(
            <div>
                <h1>ItemPage <Yee /></h1>
            </div>
        )
    }
}

export default ItemPage;