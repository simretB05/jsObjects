
let company = {
        name:`dtye`,
        yearly_revenue :6000000,
        ceo: `simret`,
        number_of_employees: 600,
    playersCondition: [true, false, false],
    managers: [
        {
        name: `Lulu`,
        salary: 400,
        is_senior:false
        },
        {
        name: `Liya`,
        salary: 700,
        is_senior:false
        },
        {
        name: `Lemlem`,
        salary: 800,
        is_senior:true
    }
]
        
}
if (company[`yearly_revenue`]>=1000000)
{
        console.log(` congrats ${company[`name`]} under  ${company[`ceo`]} and all the ${company[`number_of_employees`]} employees`)
} else
{ 
    console.log("keep going")
}
let counter = 0
while ( counter < company[`managers`].length )
{
    console.log( ` ${ company[`managers`][counter][`name`] } is a company manager and has a salary of ${ company[`managers`][counter][`salary`] } ` )

    if ( company[`managers`][counter][`is_senior`] === true )
    {
        console.log( ` ${ company[`managers`][counter][`name`] } is senior manager with a salary of ${ company[`managers`][counter][`salary`]} ` )
    } 
    counter = counter + 1

}


//     
// }

// for ( let counter = 0; counter < company[`managers`].length; counter = counter + 1 )
// {
//     console.log( `comapny managers ${ company[`managers`][`name`][counter] }` )

// }
