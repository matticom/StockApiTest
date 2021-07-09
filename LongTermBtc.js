const fs = require("fs");
const moment = require("moment");
const btcData = require("./btcAb2013.json");

function writeBtcData() {
   const processedData = btcData.map((dataPoint) => {
      return {
         date: moment(dataPoint.Date).unix(),
         value: parseFloat(
            dataPoint["Closing Price (USD)"]
         ),
      };
   });

   const dataStr = JSON.stringify(processedData);
   // write JSON string to a file
   fs.writeFile(`LongHistoryBTC.json`, dataStr, (err) => {
      if (err) {
         throw err;
      }
      console.log("JSON data is saved.");
   });
}

writeBtcData();
