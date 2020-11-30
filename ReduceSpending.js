function reduceSpending(expenses, income) {
    expenses = expenses.split(" ");
    income = income.split(" ");
    var splitExpenses = new Array();
    var array1 = new Array();
    var splitExpenses2 = new Array();
    var array2 = new Array();
    const reducer = (accumulator, currentValue) => accumulator + currentValue;


for(var i =0; i < expenses.length; i++){
    splitExpenses.push(expenses[i]);
}
    splitExpenses.forEach(e => {
        money = parseInt(e.substring(2), 10)
        array1.push(money) 
    })
    array1 = array1.reduce(reducer);
    console.log(array1)


    for(var i =0; i < income.length; i++){
        splitExpenses2.push(income[i]);
    }
        splitExpenses2.forEach(e => {
            money = parseInt(e.substring(2), 10)
            array2.push(money) 
        })
        array2 = array2.reduce(reducer);
        console.log(array2)

        console.log(array2 - array1)
}

reduceSpending("-$30.00 -$50.00", "-$8000")




