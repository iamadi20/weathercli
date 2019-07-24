const chalk=require('chalk');
const geocode=require('./utils/geocode.js');
const forecast=require('./utils/forecast.js');
var address=process.argv[2]; 
if(!address)
{
   console.log(chalk.bgRed('Please provide the location, for which you need the weather!'));
}
else{
geocode(address,(error,data)=>
 {
    if(error)
    {
       return console.log(error);
    }
forecast( data.latitude,data.longitude,(error,forecastdata)=>
{
   if(error)
   {
      return console.log(error);
   }
   console.log(chalk.bgGreen(data.place_name));
   console.log(chalk.blue.underline(forecastdata));
});

});
   
}
// console.log(process.argv);