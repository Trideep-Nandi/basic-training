function validateString(input, callback) {
    setTimeout(function () {
        // input is said to be valid if it is a lowercase string
        if (typeof input === "string" && input === input.toLowerCase()) {
            return callback(null, true)
        }
        return callback(new Error('Invalid string'), null)
    }, 500)

}

function generateResult(input, callback) {
    const res = {};
    let completed = 0;
    let total = input.length;
    input.forEach((element)=>{
        validateString(element, (error, isTrue)=>{
            if (error === null && isTrue === true)
                res[element] = true;
            else
                res[element] = false;
        
            completed++;
            if (completed === total)
                callback(res);    
        })
    });
}

input = ['first', 'Second', 'thiRd', 4, false, 'true']
generateResult(input, (res)=>console.log(res));
