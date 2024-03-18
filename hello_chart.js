let canvas = document.querySelector('#soda-chart')
let context = canvas.getContext('2d')

let chart = new Chart(context, {
    type:'bar',
    //type of chart
    data: {// lots of nested values in here, the names are
        // self-explanatory just mind the indents and braces
       labels: ['Coke', 'Pepsi', 'Either', 'Neither'],
        datasets: [ {
           label: 'Number of votes',
            data: [18,14,7,10],
            backgroundColor: ['crimson', 'dodgerblue', 'green', 'purple']
        }]
       },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                    //makes the y axis start counting at 0
                    //this is the latest version of chartjs so technically
                    //beginatZero isn't needed
                }
            }]
        }
    }
})