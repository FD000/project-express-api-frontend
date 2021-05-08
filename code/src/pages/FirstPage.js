import React, { useEffect, useState } from 'react'
import Avocado from '../components/Avocado'

const avocado="avocado"
const books ="books"


const FirstPage = () => {
    const [expressApi, setApi] = useState([])
    const [apiLength, setLength] = useState([])

    const [id, setId] = useState("")
    const [amount, setAmount] = useState("")
    const [max, setMax] = useState("")
    const [min, setMin] = useState("")
    const test = "test"

    let myApi = "https://fethullah-week17-project-api.herokuapp.com/avocado?"

    useEffect(() => { //du får göra if else
        fetch(`${myApi}`) //fetch(`https://fethullah-week17-project-api.herokuapp.com/avocado?${amount}${min}${id}`)
        .then((res) => res.json())
        .then((json) => {
            setApi(json.data)
            setLength(json.length)
        }
        )
    }, [amount, min, id, max])

  //console.log(expressApi)

  

    console.log(apiLength)
    //console.log(min.length)
    //console.log(id.length)

    const addIdValue = (e) => {
        e.preventDefault();
        setId(e.target.value)
        //setAmount("")
    }
    const searchId = (e) => {
        e.preventDefault()
    }


    const limit = (e) => {
        e.preventDefault();
        setAmount(e.target.value)
        //setId("")
    }

    const searchAmount = (e) => {
        e.preventDefault()
        
    }

    
    //console.log(amount)

    console.log(id)

    


    
    // Min price starts
    const minPrice = (e) => {
        e.preventDefault()
        
    }

    const searchMin = (e) => {
        e.preventDefault();
        setMin(e.target.value)
    }
    // Min price ends

    // Max price starts

    const maxPrice = (e) => {
        e.preventDefault()
        
    }

    const searchMax = (e) => {
        e.preventDefault();
        setMax(e.target.value)
    }

    // Max price ends

   /* if(id.length >= 1) {
        
        if(amount.length>=1) {
            myApi = `https://fethullah-week17-project-api.herokuapp.com/avocado?id=${id}&amount=${amount}`
        }
        myApi = `https://fethullah-week17-project-api.herokuapp.com/avocado?id=${id}`
    } */
    if (amount.length >= 1) {
        myApi = `https://fethullah-week17-project-api.herokuapp.com/avocado?amount=${amount}`
        if(id.length >= 1) {
            myApi = `${myApi}&id=${id}`//myApi = `${myApi}&id=${id}`
        } else if(min.length >= 1) {
            myApi = `${myApi}&minPrice=${min}`
        }
       
    } else if (max.length >= 1) {
        myApi = `https://fethullah-week17-project-api.herokuapp.com/avocado?maxPrice=${max}`
      
        
    } else if (min.length >= 1) {
        myApi = `https://fethullah-week17-project-api.herokuapp.com/avocado?minPrice=${min}`
      
        
    } else if (id.length >=1){
        myApi = `https://fethullah-week17-project-api.herokuapp.com/avocado?id=${id}`
    }

    console.log(myApi)



    return(
        <div className="container">
            <section className="header-wrapper">
            <div className="header-text">
                <h1>Welcome to Avocado Sales Data</h1>
                
                

            </div>
            <section className="input-section">
            <div className="left-box">
                <h4>Filter:</h4>
                <div><button onClick={() => {
                setMax("")
                setId("")
                setAmount("")
                setMin("")
            
            }}>Clear filter</button></div>
                </div>
            <div className="right-box">
            <form onSubmit={searchId}>
            <label>
                <p>Search ID</p>
                <input 
                //type="number" 
                //placeholder="id="
                value={id}
                onChange={e => addIdValue(e)}
             />
            </label>
            
            </form>

            <form onSubmit={searchAmount}>
            <label>
                <p>Limit number of result</p>
                <input 
                //type="number" 
                //placeholder="id="
                value={amount}
                onChange={e => limit(e)}
             />
            </label>
          
            </form>

            <form onSubmit={minPrice}>
            <label>
                <p>Min price of product</p>
                <input 
                //type="number" 
                //placeholder="id="
                value={min}
                onChange={e => searchMin(e)}
             />
            </label>
            
            </form>

            <form onSubmit={maxPrice}>
            <label>
                <p>Max price of product</p>
                <input 
                //type="number" 
                //placeholder="id="
                value={max}
                onChange={e => searchMax(e)}
             />
            </label>
            
            </form>
            </div>
            </section>
            
            <div>
                <h1># result: {apiLength}</h1>
            </div>

            

            </section>


            {(apiLength === 0)? 
            <p>Not found, please type another number</p>
            :
            <div>
                {expressApi.map(y => (
                    <div className="result">
                        <p>Id: {y.id}</p>
                        <p>Avarage price: {y.averagePrice}</p>
                        <p>Date: {y.date}</p>
                        <p>Small bags sold: {y.smallBagsSold}</p>
                        <p>Total bags sold: {y.totalBagsSold}</p>
                        <p>Total volume: {y.totalVolume}</p>
                        <p>Region: {y.region}</p>
                    </div>
                ))}
            </div>
            }
        </div>
    )
}

export default FirstPage

/*
<select 
            onChange={e => onFilterChange(e)} 
            value={filter}
            name="movie"
            >
                <option value={avocado}>Avocado</option>
                <option value={books}>Books</option>
            </select>



*/


/*
 {expressApi.map(y=> (
                    <div key={y.id} className="data">
                        <p>Id: {y.id}</p>
                        <p>Date: {y.date}</p>
                        <p>Avarage Price: {y.averagePrice}</p>
                        <p>Region: {y.region}</p>
                        <p>Small bags sold: {y.smallBagsSold}</p>
                        <p>Total Bags sold: {y.totalBagsSold}</p>
                        <p>Total Volume: {y.totalVolume}</p>
                    </div>
                )
                    
                
                )} 
                */