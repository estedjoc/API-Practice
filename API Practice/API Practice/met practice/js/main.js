// let timesClicked = 0;

// const click = () => {
//   timesClicked++

//   timesClicked > 1 ? getFetch2() : getFetch1()
// }



const getFetch1 = () => {
  
  // const randomARTID = (Math.floor(Math.random() * 888838))

  // console.log(randomARTID);

  const choice = document.querySelector('input').value.toString();

  const url = `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&isOnView=true&q=${choice}`;

  //learned how to use the API parameters again on Jul 27 2022 and it helped me reach a goal on this api app I waas building out

  document.querySelector('.imageSection').classList.add('hidden');

  document.querySelector('.main').classList.remove('hidden');


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        let artID = data.objectIDs[Math.floor(Math.random() * data.total + 1)]

        const url2 = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artID}`

        fetch(url2)
          .then(res => res.json()) // parse response as JSON
          .then(data => {

            console.log(url2)
            console.log(artID)
            console.log(data)

            document.querySelector('iframe').src = data.objectURL

            document.querySelector('.main').src = data.primaryImage
          })
          .catch(err => {
            console.log(`error ${err}`)
          });

      })
      .catch(err => {
          console.log(`error ${err}`)
      });

  // const url2 = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artID}`;

  // fetch(url2)
  //     .then(res => res.json()) // parse response as JSON
  //     .then(data => {
  //       console.log(data)
  //     })
  //     .catch(err => {
  //         console.log(`error ${err}`)
  //     });
}

document.querySelector('button').addEventListener('click', getFetch1);

document.querySelector('input').addEventListener('keydown', (evt) => {
  if (evt.code === 'Enter') getFetch1()
});

// const getFetch2 = () => {
  
//   const randomARTID = (Math.floor(Math.random() * 888838))

//   console.log(randomARTID);

//   const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomARTID}`;

//   document.querySelector('.placeholder').classList.add('hidden');

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

// document.querySelector('button').addEventListener('click', getFetch2);

// document.querySelector('input').addEventListener('keydown', (evt) => {
//   if (evt.code === 'Enter') getFetch2()
// });

//need two fetches again, one that will get the random objectID from the museum and the other that will then use that objectIDvalue to use in the presentation of the data.

//LETS GOOOO I DIDNT END UP HAVCING TO DO THIS I JUST BIG BRAINED IT ANSD PUT A FETCH WITHIN A FETCH A NESTED FETCH LEST GOOOOOOOOO NO NEED TO DEAL WITH CRAZY STORAGE THINGS OR ANYTING WOOOOOOO

