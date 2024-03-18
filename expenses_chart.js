/* Input elements */
let expenseNameInput = document.querySelector('#expense-name')
let expenseAmountInput = document.querySelector('#expense-amount')
let addExpenseButton = document.querySelector('#add-expense')

/* Get chart canvas and contex  */
let chartCanvas = document.querySelector('#expenses-doughnut-chart')
let ctx = chartCanvas.getContext('2d')


// TODO create chart object
let expenseChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [
            {
                data: [],
                backgroundColor: []
            }
            ],
        labels: []
    },
    options: {}  //fill in things here later
})

// TODO (optional) replace with colors of your choice. The array can have as many or as few colors as you like
let chartColors = [ 'tomato', 'orange', 'dodgerblue', 'mediumseagreen', 'slateblue', 'violet' ]


function addExpenseToChart(name, amount) {

    // TODO add expense to chart
expenseChart.data.labels.push(name)
    //pushes the label data to the chart
    expenseChart.data.datasets[0].data.push(amount)
    //pushes the amount data to the chart
    let colorCount = expenseChart.data.datasets[0].backgroundColor.length
    //tells how many colors have been used for the chart
    let color = chartColors[colorCount % chartColors.length]
    //makes the colors cycle back from the start
    expenseChart.data.datasets[0].backgroundColor.push(color)
    //pushes new colors to the end of background color array
    console.log(colorCount, color)
    expenseChart.update()
    //sets the chart to update,
    //although nothing will happen until the function is called
}


addExpenseButton.addEventListener('click', function() {

    let errors = []

    let expenseName = expenseNameInput.value
    let expenseAmount = expenseAmountInput.value

    // Validate both fields are filled in, and the amount is a positive number
    if (expenseName.length === 0) {
        errors.push('Enter a type of expense')
    }

    if (expenseAmount.length === 0 || expenseAmountInput < 0) {
        errors.push('Enter a positive amount for the expense')
    }

    // If any errors, alert and return - do not proceed to add to chart
    if (errors.length > 0) {
        alert( errors.join('\n') )
        return
    }

    // TODO call function to update chart
addExpenseToChart(expenseName,expenseAmount)

    // Clear inputs, ready for next expense name and amount.
    expenseNameInput.value = ''
    expenseAmountInput.value = ''

})


// TODO add event listener to click the Add Expense button when the enter key is pressed
window.addEventListener('keyup', function (){
    if (event.keyCode === 13) {
        let inputElements = [expenseNameInput, expenseAmountInput, addExpenseButton]
        if (inputElements.includes(document.activeElement)) {
            addExpenseButton.click()
            //lets you press enter to submit information
            expenseNameInput.focus()
            //puts the focus on the name of the expense
        }
    }
})