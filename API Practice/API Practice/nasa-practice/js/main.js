const getFetch = () => {
  const choice = document.querySelector('input').value;

  console.log(choice);

  const url = `https://api.nasa.gov/planetary/apod?api_key=bTnFBaVFPVNzZlhwYbvzeJxvd7KXH9aSma4CWhi8&date=${choice}`;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        const video = document.querySelector('iframe');

        const picture = document.querySelector('.main');

        document.querySelector('h3').innerText = data.explanation;

        document.querySelector('.placeholder').classList.add('hidden');

        if (data.media_type === 'image'){
          document.querySelector('.main').src = data.hdurl

          video.classList.add('hidden')

          picture.classList.toggle('hidden')

        }else if (data.media_type === 'video'){
          document.querySelector('iframe').src = data.url

          picture.classList.add('hidden')

          video.classList.toggle('hidden')
        }

        // document.querySelector('img').src = data.hdurl

        //need to make sure to have hidden class on by default, that's the purpose of the placeholder anwyays ezpz thank u leon god bless u 

        

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

document.querySelector('button').addEventListener('click', getFetch);

document.querySelector('input').addEventListener('keydown', (evt) => {
  if (evt.code === 'Enter') getFetch()
});

//anything that ciomes after the question mark afetr the .php is a key value pair for API

