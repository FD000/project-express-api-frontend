import React, { useEffect, useState } from 'react'


const FirstPage = () => {
    const [expressApi, setApi] = useState([])
    const [apiLength, setLength] = useState([])
    const [id, setId] = useState("")
    const [amount, setAmount] = useState("")
    const [max, setMax] = useState("")
    const [min, setMin] = useState("")
    
    let myApi = "https://fethullah-week17-project-api.herokuapp.com/avocado?"

    useEffect(() => { 
        fetch(`${myApi}`) 
        .then((res) => res.json())
        .then((json) => {
            setApi(json.data)
            setLength(json.length)
        })
    }, [amount, min, id, max])

    const addIdValue = (e) => {
        e.preventDefault();
        setId(e.target.value)
    }
    const searchId = (e) => {
        e.preventDefault()
    }

    // numer of result shown
    const limit = (e) => {
        e.preventDefault();
        setAmount(e.target.value)
    }

    const searchAmount = (e) => {
        e.preventDefault()  
    }
  
    // Minimum price 
    const minPrice = (e) => {
        e.preventDefault() 
    }

    const searchMin = (e) => {
        e.preventDefault();
        setMin(e.target.value)
        //setMax("")
    }
    
    // Maximum price 
    const maxPrice = (e) => {
        e.preventDefault()
        
    }
    const searchMax = (e) => {
        e.preventDefault();
        setMax(e.target.value)
        //setMax("")
    }

    if (amount.length >= 1) {
        myApi = `https://fethullah-week17-project-api.herokuapp.com/avocado?amount=${amount}`
        if(id.length >= 1) {
            myApi = `${myApi}&id=${id}`
        } else if(min.length >= 1) {
            myApi = `${myApi}&minPrice=${min}`
        } else if(max.length >= 1) {
            myApi = `${myApi}&maxPrice=${max}`
        } 
       
    } else if (max.length >= 1) {
        myApi = `https://fethullah-week17-project-api.herokuapp.com/avocado?maxPrice=${max}`
      
        
    } else if (min.length >= 1) {
        myApi = `https://fethullah-week17-project-api.herokuapp.com/avocado?minPrice=${min}`
      
        
    } else if (id.length >=1){
        myApi = `https://fethullah-week17-project-api.herokuapp.com/avocado?id=${id}`
    }

    return(
        <div className="container">
            <section className="header-wrapper">
                <div className="header-text">
                    <h1>Welcome to Avocado Sales Data</h1>
                </div>
                <section className="input-section">
                    <div className="left-box">
                        <h4>Filter:</h4>
                        <div>
                            <button onClick={() => {
                                setMax("")
                                setId("")
                                setAmount("")
                                setMin("")
                            }}>
                                Clear filter
                            </button>
                        </div>
                    </div>
                    <div className="right-box">
                        <form onSubmit={searchId}>
                            <label>
                                <p>Search ID</p>
                                <input 
                                value={id}
                                onChange={e => addIdValue(e)}
                            />
                            </label>
                        </form>
                        <form onSubmit={searchAmount}>
                            <label>
                                <p>Limit the number of results</p>
                                <input 
                                value={amount}
                                onChange={e => limit(e)}
                            />
                            </label>
                        </form>
                        <form onSubmit={minPrice}>
                            <label>
                                <p>Minimum price of product</p>
                                <input 
                                value={min}
                                onChange={e => searchMin(e)}
                            />
                            </label>
                        </form>
                        <form onSubmit={maxPrice}>
                            <label>
                                <p>Maximum price of product</p>
                                <input 
                                value={max}
                                onChange={e => searchMax(e)}
                            />
                            </label>
                        </form>
                    </div>
                </section>
                <div>
                    <h1>
                        # result: {apiLength}
                    </h1>
                </div>
            </section>
            {(apiLength === 0)? 
                <p>Not found, please type another number</p>
                :
                <div>
                    {expressApi.map(y => (
                        <div className="result">
                            <p><span>Id:</span> {y.id}</p>
                            <p><span>Avarage price:</span> {y.averagePrice}</p>
                            <p><span>Date:</span> {y.date}</p>
                            <p><span>Small bags sold:</span> {Math.round(y.smallBagsSold)} bags</p>
                            <p><span>Total bags sold:</span> {Math.round(y.totalBagsSold)} bags</p>
                            <p><span>Total volume:</span> {Math.round(y.totalVolume)} bags</p>
                            <p><span>Region:</span> {y.region}</p>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default FirstPage