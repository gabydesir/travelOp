const axios = require('axios');

function twitter(req, res){
  console.log('here')
    axios.get('http://localhost:3000/api/twitter')
      .then((res) => {
        console.log(res.data);
        const tweetArr = res.data.data.statuses;
        const item = tweetArr[Math.floor(Math.random() * tweetArr.length)];
        console.log(item);
        res.data({
          tweet: item.text,
          screen_name: item.user.screen_name,
        })
        .catch(err => console.log(err));
      // console.log(JSON.stringify(res.data.data.statuses[0].text))
      });
  }

module.exports = twitter;


// function twitter (req, res, next) {
//     axios.get('https://localhost:3000/api/twitter')
//         .then(res => {
//           const tweetArr = res.data.data.statuses;
//           const item = tweetArr[Math.floor(Math.random() * tweetArr.length)];
//             return res.json();
//             next();
//         })
//         .then(tweets => {
//             console.log(res.main);
//             res.locals.timeline = tweets
//             next();
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }
