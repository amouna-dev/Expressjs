let date = new Date();

let currentHour = date.getHours();
let curentDay = date.getDay();
console.log("Hour:"+currentHour, "Day N:"+curentDay)

const logger = (req, res, next) => {
    if (currentHour > 9 && currentHour < 17 && curentDay > 0 && curentDay < 6) {
        next()
    } else {
       res.send('<h2>Sorry... <br/> We are closed !!! </h2>') 
    }
}




module.exports = logger