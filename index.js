let currentTemp = Math.round(Math.random() * 100)
console.log(`The current temperature is ${currentTemp}°F`);
let preferredTemp = 70;
let usersPreferredTemp = prompt('Would you like to set a preferred temperature?\n(Type degrees in Fahrenheit or type "no".)')
if (!isNaN(usersPreferredTemp))
{
  let numValue = Math.round(usersPreferredTemp);
  if (numValue > 0 && numValue < 100)
  {
    preferredTemp = numValue;
    console.log(`Preferred temp set to ${preferredTemp}`);
  } else
  {
    console.log('The value you entered is invalid');
  }
}
while (currentTemp < preferredTemp)
{
  currentTemp++;
  console.log(`It's cold in here. We have turned up the temp to ${currentTemp}°F`);
}
while (currentTemp > preferredTemp)
{
  currentTemp--;
  console.log(`It's hot in here. We have turned down the temp to ${currentTemp}°F`);
}
console.log(`We are now at your preferred temperature of ${currentTemp}°F`);