let canvas = document.querySelector('#bridge-chart')
let context = canvas.getContext('2d')

let chart = new Chart(context, {
    type:'bar',
    //type of chart
    data: {// lots of nested values in here, the names are
        // self-explanatory just mind the indents and braces
        labels: [bridges.name],
        datasets: [ {
            label: 'Span in meters',
            data: [bridges.span],
            backgroundColor: ['crimson', 'dodgerblue', 'green', 'purple', 'gold', 'pink']
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
// data isn't populating from the array, devtools says it's not defined
//but if i make the array empty then the chart shows up