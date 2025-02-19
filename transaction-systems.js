// Scenario: A banking system tracks transactions, each with transactionId (string),
// accountHolder (string), and amount (number, positive for deposits, negative for withdrawals).
// Sub-questions: a. Write a function calculateBalance(transactions, accountHolder) that 
// returns the current balance for a user. If the user has no transactions, return "No transactions found".


function calculateBalance(transactions, accountHolder){
    // each transaction has transactionId (string), accountHolder(string), and amount (number, positive for deposits, negative for withdrawals)
    // example of arguments (['3546',"-5764"], ''Noel)
   if (!transactions){
    return "No transactions found"
   } else {
    let balance = 0 
    for(let i=0; i<transactions.length; i++){
        balance += 
        (transactions[i])
    }
    return `${accountHolder} has a balance of ${balance}`
   }

}

console.log(calculateBalance([9546,-5764], 'Noel'))


// b. Write a function largeTransactions(transactions, minAmount) that returns transactions above minAmount.

function largeTransactions(transactions, minAmount) {
    let balance = 0 
    let result = []
    for(let i=0; i<transactions.length; i++){
        if(
            (transactions[i]) > minAmount){
            result.push(transactions[i])
        }
        
    }
    return result

}

console.log(largeTransactions([3546,-5764,65433], 675))


// c. Write a function sortTransactions(transactions) that sorts transactions from highest to lowest amount.

function sortTransactions(transactions){
    return transactions.sort((a,b) => b - a)
}

console.log(sortTransactions([3546,-5764,65433]))


// d. Write a function generateTransactionHistory(transactions, accountHolder) that 
// returns messages like:
//  "Alice deposited $500"
//  "Bob withdrew $200"


function generateTransactionHistory(transactions, accountHolder){
    for(let i=0; i<transactions.length; i++){
        if(transactions[i] > 0){
            return `${accountHolder} deposited $${transactions[i]}`
        } 

        if(transactions[i] < 0){
            return `${accountHolder} withdrew $${transactions[i]}`
        } 
    }

    return `No transaction recorded`

}

console.log(generateTransactionHistory([-3434, -9786, 1234], "Noel"))
