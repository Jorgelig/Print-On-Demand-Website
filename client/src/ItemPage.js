import React from "react";
import {useParams} from 'react-router-dom';

let chosenItem = "";
let ItemObj;

function replaceDashes(x){
    var str = x;
    str = str.replace(/-/g, ' ');
    return str;
}

function ItemTitle(){
    let { Item } = useParams();
    //console.log(replaceDashes(Item))
    return(replaceDashes(Item))
}

class ItemPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    static getDerivedStateFromProps(nextProps, prevState){

        // if (nextProps.userId !== prevState.prevUserId) {
        //     return {
        //       prevUserId: nextProps.userId,
        //       profileOrError: null,
        //     };
        //   }
      
          // No state update necessary
          return null;
    }
    
    render (){
        let storeData = this.props.storeData;
        console.log(storeData)
        //let chosenItem = "";
        //console.log(chosenItem)

        return(
            <div>
                <h1 id={"chosenItem"}><ItemTitle /></h1>
            </div>
        )
    }

    componentDidMount(){
        
        chosenItem =document.getElementById("chosenItem").innerHTML;
        console.log(chosenItem)

        for(let i = 0; i <this.props.storeData.length; i ++){
            if(chosenItem === this.props.storeData[i].sync_product.name.toLowerCase()){
                ItemObj = this.props.storeData[i];
                console.log(ItemObj);
            }
        }

    }
    
}
export default ItemPage;