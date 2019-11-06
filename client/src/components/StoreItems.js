import React from "react";

class StoreItems extends React.Component{
    // constructor(props){
    //     super(props);
    // }

    render (){

        if(this.props.storeData){
            const itemList = this.props.storeData.map((item, index)=>
                <div className="storeItem" id={item.name+index} key={index}>
                  <h1>{item.name}</h1>
                  <p>Number of Variants:{item.variants}</p>
                  <img src={item.thumbnail_url} alt={item.name} />
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