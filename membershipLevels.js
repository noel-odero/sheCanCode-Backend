// You are building a membership system for a gym. Each member has a name (string) and 
// a membership level ("gold", "silver", "bronze", or any new levels added in the future).
// Sub-questions: a. Write a function countMembershipLevels(members) that takes an array of 
// member objects and returns an object showing the count of each membership level. The function 
// should dynamically count all membership levels, including any new levels that may be added.
// Example output: { gold: 3, silver: 2, bronze: 4, platinum: 1 }.


function countMembershipLevels(members){
    // example of input for visualization
// [
//       {
//         name: "emily",
//         Level: "gold"
//     }
        // {
        //     name: "paul"
        //     Level: "bronze"
        // }
  
// ]
    let result = {}
    let newArr = []
    let count = []
    let filteredArr = []

    for (let i = 0; i < members.length; i++){
        
        newArr.push(Object.entries(members[i]))
        // [
        //     [ [ 'name', 'emily' ], [ 'Level', 'gold' ] ],
        //     [ [ 'name', 'paul' ], [ 'Level', 'bronze' ] ]
        //   ]
        for(let i= 0; i <newArr.length; i++){
            (count.push(newArr[i][1]))
            
            // [ [ 'Level', 'gold' ], [ 'Level', 'gold' ], [ 'Level', 'bronze' ] ]
           for(let i = 0; i <count.length; i++){
               
           }
             
        }
    }
    return filteredArr   
}

const members =  [
          {
            name: "emily",
            Level:"gold"
        },
            {
                name: "paul",
                Level: "bronze"
            }
      
    ]

console.log(countMembershipLevels(members))


// const obj = {
//     name: "emily",
//     Level: ("gold", "bronze")
// }

// let newmen = Object.entries(obj)
// console.log(newmen)




// e. Explain: Why is map often preferred over traditional loops for transforming data in arrays? Discuss 
// performance and readability.

Maps are callback functions that perfoms a specific function in each of the elements in an Array. It promotes cleaner code and efficiency.
It is preferred over traditional loops because it is more readable and easier to understand. It also allows for more concise code.
