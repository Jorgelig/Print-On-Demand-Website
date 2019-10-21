import React from 'react';
import './App.css';
const axios = require('axios')
class Store extends React.Component{
    constructor(){
        super();

        this.state={
            live:null
        }
    }

    componentDidMount(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = 'https://api.printful.com/';
        const apikey = btoa("pxtgyt89-v2pd-q1o9:j8pj-hkqhi8s06pw1");
        const config ={
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Authorization':"Basic "+ apikey
            }
        }

        axios.get(proxyurl + url + "sync/products", config)
            .then(function(response){
                console.log(response)
            })
            .catch(function(error){
                console.log(error)
            })
            .finally(function(){
                console.log("made a get request!")
            })

    }

    render(){
        return(
            <div className="App">
                <h1>Store Page</h1>
            </div>
        );  
    }
};

export default Store;