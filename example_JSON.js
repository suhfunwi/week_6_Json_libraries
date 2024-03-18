let bitcoinData = {
    "bpi": {
        "EUR": {
            "code": "EUR",
            "description": "Euro",
            "rate": "815.8994",
            "rate_float": 815.8994,
            "symbol": "&euro;"
        },
        "GBP": {
            "code": "GBP",
            "description": "British Pound Sterling",
            "rate": "677.4879",
            "rate_float": 677.4879,
            "symbol": "&pound;"
        },
        "USD": {
            "code": "USD",
            "description": "United States Dollar",
            "rate": "728.4816",
            "rate_float": 728.4816,
            "symbol": "&#36;"
        }
    },
    "chartName": "Bitcoin",
    "disclaimer": "This data was generated by creating random numbers and mimics the Coinbase API JSON response structure. It is NOT real data. DO NOT USE THIS TO TRADE CRYPTOCURRENCY!",
    "time": {
        "updatedISO": "2023-02-14T20:16:14.370072"
    }
}

// Tasks
// 1. can  you convert 100$ into bitcoin
// 2. can you print (console.log) the currency descriptions and the rates,one per line?

let bpi = bitcoinData.bpi
console.log(bpi)

let usdData = bpi.USD
console.log(usdData)
let usdExchangeRate = usdData.rate_float //one bitcoin is 728.48 USD
console.log("one bitcoin is " + usdExchangeRate + "USD")
