function tagFunction(array,...args){
    console.info(array)
    console.info(args)
}

test("tag function" , () => {
    const name = "ichwan";
    const lastname = "dwi"

    tagFunction`Hello ${name}!,How are you`
    tagFunction`bye ${name}!,see you latter`
})

test("tag fuction sql", () => {
    const name = "Ichwan";
    const age = 21

    tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`
})