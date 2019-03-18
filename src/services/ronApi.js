export const getFacts = count => {
  // for dev build:
  // return fetch(`http://ron-swanson-quotes.herokuapp.com/v2/quotes/${count}`)
  // for production build:
  return fetch(`https://cors-anywhere.herokuapp.com/http://ron-swanson-quotes.herokuapp.com/v2/quotes/${count}`, { mode: 'cors' })
    .then(res => res.json());
};

// module.exports = (req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', '*');
//   next();
// };
