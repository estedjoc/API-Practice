// let timesClicked = 0;

// const click = () => {
//   timesClicked++

//   timesClicked > 1 ? getFetch2() : getFetch1()
// }

const getFetch = () => {
  
  const randomARTID = (Math.floor(Math.random() * 888838))

  console.log(randomARTID);

  const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomARTID}`;

  document.querySelector('.placeholder').classList.add('hidden');

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

document.querySelector('button').addEventListener('click', getFetch);

document.querySelector('input').addEventListener('keydown', (evt) => {
  if (evt.code === 'Enter') getFetch()
});

//need two fetches again, one that will get the random objectID from the museum and the other that will then use that objectIDvalue to use in the presentation of the data.

