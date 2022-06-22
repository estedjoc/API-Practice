let timesClicked = 0;

const click = () => {
  timesClicked++

  timesClicked > 1 ? getFetch2() : getFetch1()
}

const getFetch1 = () => {
  
  const choice = document.querySelector('input').value;

  console.log(choice);

  const url = `https://api.nasa.gov/planetary/apod?api_key=bTnFBaVFPVNzZlhwYbvzeJxvd7KXH9aSma4CWhi8&date=${choice}`;

  document.querySelector('.placeholder').classList.add('hidden');

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        const video = document.querySelector('iframe');

        const picture = document.querySelector('.main');

        document.querySelector('h3').innerText = data.explanation + "  " + data.media_type;

        if (data.media_type === 'image'){
          document.querySelector('.main').src = data.hdurl

          video.classList.add('hidden')

          picture.classList.toggle('hidden')

        }else if (data.media_type === 'video'){
          document.querySelector('iframe').src = `${data.url}&autoplay=1&mute=1`

          console.log(`${data.url}&autoplay=1&mute=1`)

          picture.classList.add('hidden')

          video.classList.toggle('hidden')
        }

       

        // if ((data.media_type === 'image') && (data.media_type === previousValue)){
        //   document.querySelector('.main').src = data.hdurl

        //   video.classList.add('hidden')

        // }else if ((data.media_type === 'video') && (data.media_type === previousValue)){
        //   document.querySelector('iframe').src = data.url

        //   picture.classList.add('hidden')

        // }else if ((data.media_type === 'image') && (data.media_type != previousValue)){
        //   document.querySelector('.main').src = data.hdurl

        //   video.classList.add('hidden')

        //   picture.classList.toggle('hidden')
        // }else if ((data.media_type === 'video') && (data.media_type != previousValue)){
        //   document.querySelector('iframe').src = data.url

        //   picture.classList.add('hidden')

        //   video.classList.toggle('hidden')
        // }



        // document.querySelector('img').src = data.hdurl

        //need to make sure to have hidden class on by default, that's the purpose of the placeholder anwyays ezpz thank u leon god bless u 

        

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

const getFetch2 = () => {
  
  const choice = document.querySelector('input').value;

  console.log(choice);

  const url = `https://api.nasa.gov/planetary/apod?api_key=bTnFBaVFPVNzZlhwYbvzeJxvd7KXH9aSma4CWhi8&date=${choice}`;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        const video = document.querySelector('iframe');

        const picture = document.querySelector('.main');

        document.querySelector('h3').innerText = data.explanation + "  " + data.media_type;

        previousValue2 = data.media_type;

        if (data.media_type === 'image'){
          document.querySelector('.main').src = data.hdurl

          video.classList.add('hidden')

          picture.classList.remove('hidden')

          document.querySelector('iframe').src = '#'

        }else if (data.media_type === 'video'){
          document.querySelector('iframe').src = `${data.url}&autoplay=1&mute=1`

          console.log(`${data.url}&autoplay=1&mute=1`)


          picture.classList.add('hidden')

          video.classList.remove('hidden')
        }

       

        // if ((data.media_type === 'image') && (data.media_type === previousValue)){
        //   document.querySelector('.main').src = data.hdurl

        //   video.classList.add('hidden')

        // }else if ((data.media_type === 'video') && (data.media_type === previousValue)){
        //   document.querySelector('iframe').src = data.url

        //   picture.classList.add('hidden')

        // }else if ((data.media_type === 'image') && (data.media_type != previousValue)){
        //   document.querySelector('.main').src = data.hdurl

        //   video.classList.add('hidden')

        //   picture.classList.toggle('hidden')
        // }else if ((data.media_type === 'video') && (data.media_type != previousValue)){
        //   document.querySelector('iframe').src = data.url

        //   picture.classList.add('hidden')

        //   video.classList.toggle('hidden')
        // }



        // document.querySelector('img').src = data.hdurl

        //need to make sure to have hidden class on by default, that's the purpose of the placeholder anwyays ezpz thank u leon god bless u 

        

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

document.querySelector('button').addEventListener('click', click);

document.querySelector('input').addEventListener('keydown', (evt) => {
  if (evt.code === 'Enter') click()
});

//anything that ciomes after the question mark afetr the .php is a key value pair for API

//save media type in an empty array, if media types match don't toggle hidden, if they do, toggle. ^ next step

//a lot of the above is my attempt from using classList.toggle() instead of big braining it and making it a lot simpler for myself with classList.remove() smh

//ignore this code:

// let timesClicked = 0;

// const click1 = _ => {
//   document.querySelector('span').innerText = 'X'
// }

// const click2 = _ => {
//   document.querySelector('span').innerText = 'O'
// }


// const click = () => {
//   timesClicked++

//   timesClicked % 2 === 0 ? click2() : click1()
// }

