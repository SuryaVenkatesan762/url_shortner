async function shortenURL() {
  let longUrl = document.getElementById("longUrl").value;

  if (longUrl === "") {
    alert("Please enter a URL");
    return;
  }

  let response = await fetch(`https://tinyurl.com/api-create.php?url=${longUrl}`);
  let shortUrl = await response.text();

  document.getElementById("shortUrl").value = shortUrl;
  document.getElementById("result").classList.remove("hidden");
}