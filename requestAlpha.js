const { default: axios } = require("axios");
const fs = require("fs");
const moment = require("moment");

function getCrytoCurrency(symbol = "BTC", isInt = true) {
   axios
      .get(
         `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${symbol}&market=USD&apikey=${process.env.ALPHA_API_KEY}`
      )
      .then((res) => {
         const rawData =
            res.data[
               "Time Series (Digital Currency Daily)"
            ];
         const data = Object.keys(rawData).map(
            (dateKey) => {
               return {
                  date: moment(dateKey).unix(),
                  value: isInt
                     ? parseInt(
                          rawData[dateKey][
                             "4a. close (USD)"
                          ].split(".")[0]
                       )
                     : parseFloat(
                          rawData[dateKey][
                             "4a. close (USD)"
                          ]
                       ),
               };
            }
         );

         const dataStr = JSON.stringify(data.reverse());

         // write JSON string to a file
         fs.writeFile(
            `history${symbol}.json`,
            dataStr,
            (err) => {
               if (err) {
                  throw err;
               }
               console.log("JSON data is saved.");
            }
         );
      });
}

getCrytoCurrency();
// getCrytoCurrency("LINK", false);
