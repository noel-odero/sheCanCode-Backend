// Scenario: Students vote for their favorite project in a bootcamp competition. Each vote is an object 
// like { student: "Alice", project: "Project A" }.
// Sub-questions: a. Write a function countProjectVotes(votes) that returns an object showing 
// the number of votes each project received.
// Example input:
// const votes = [
// { student: "Alice", project: "Project A" },
// { student: "Bob", project: "Project B" },
// { student: "Charlie", project: "Project A" }
// ];
// Expected output:
// { "Project A": 2, "Project B": 1 

function countProjectVotes(votes) {
    let newArr = []
    for (let i = 0; i < votes.length; i++){
        newArr.push(Object.entries(votes[i]))

        // [
        //     [ [ 'student', 'Alice' ], [ 'project', 'Project A' ] ],
        //     [ [ 'student', 'Bob' ], [ 'project', 'Project B' ] ],
        //     [ [ 'student', 'Charlie' ], [ 'project', 'Project A' ] ]
        //   ]

        // Expected output:
// { "Project A": 2, "Project B": 1 

            for(let i = 0; i < newArr.length; i++){
                let count = 0
                if(newArr[i][1][1] === "Project A"){
                    count++
                } else if(newArr[i][1][1] === "Project B"){
                    count++
                }
            }

    }
    return count
}


const votes = [
    { student: "Alice", project: "Project A" },
    { student: "Bob", project: "Project B" },
    { student: "Charlie", project: "Project A" }
    ];

console.log(countProjectVotes(votes))