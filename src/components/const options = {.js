const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6ac8b1a0b8msh9c615ba59938184p1ee5e8jsnef0d8682e78b',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

fetch('https://youtube-v31.p.rapidapi.com/search?part=snippet&order=date&q=reactjs', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));