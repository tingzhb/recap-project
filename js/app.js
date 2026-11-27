/* const campaignName = "November Campaign";
const budget = 5000;

let visitors = 1500;

console.log(campaignName);
console.log(budget);
console.log(visitors);

visitors += 200;
console.log(visitors);

const google = 1500;
const facebook = 800;
const instagram = 600;
let totalVisitors = 0;

totalVisitors += google + facebook + instagram;

console.log(totalVisitors);



const visitors = 1500;
const conversions = 75;
const conversionRate = conversions / visitors * 100;

console.log("Conversion rate: " + conversionRate + "%");

 */

const budget = 5000;
const clicks = 2500;
const conversions = 100;
const revenue = 10000;

const cpc = budget / clicks;
const cpa = budget / conversions;
const roas = revenue / budget;
const conversionValue = revenue / conversions;
const difference = revenue - budget;

console.log("CPC: " + cpc + " kr");
console.log("CPA: " + cpa + " kr");
console.log("Roas: " + roas + "x");
console.log("Average Conversion Value: " + conversionValue + " kr");
console.log("Revenue minus ad spend: " + difference + " kr");
