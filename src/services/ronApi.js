export const getFacts = count => {
  // for dev build:
  return fetch(`http://ron-swanson-quotes.herokuapp.com/v2/quotes/${count}`)
  // for production build:
  // return fetch(`https://cors-anywhere.herokuapp.com/http://ron-swanson-quotes.herokuapp.com/v2/quotes/${count}`)
    .then(res => res.json());
};
