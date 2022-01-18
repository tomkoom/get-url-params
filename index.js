// get url params
const p = document.getElementById('p');
const input = document.getElementById('url');

input.addEventListener("change", getParameters)

function getParameters() {
  let url = input.value;
  url = url.split('+').join(' ');

  let params = {},
    tokens,
    re = /[?&]?([^=]+)=([^&]*)/g;

  while (tokens = re.exec(url)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }

  p.innerHTML = JSON.stringify(params, null, 2);
  return params;
}

