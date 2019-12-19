TOKEN = "pk_138b137f36874f8f8b39bceabbd0637a";

async function getStock() {
  const ticker = document.getElementById("ticker").value;
  const response = await fetch(
    `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${TOKEN}`
  );
  const data = await response.json();

  const output = document.getElementById("output");

  const symbol = "Symbol: " + data["symbol"] + "<br>";
  output.innerHTML = symbol;

  const price = "Price: " + data["latestPrice"] + "<br>";
  output.innerHTML += price;

  const weekHigh = "52 Week High: " + data["week52High"] + "<br>";
  output.innerHTML += weekHigh;

  const weekLow = "52 Week Low: " + data["week52Low"] + "<br>";
  output.innerHTML += weekLow;
}
getStock();
