const axios = require('axios');
const slackToken = 'xoxb-4208929916324-4206536588322-bzN4PIMO44UPVM0LsIHz6tbj';

run().catch(err => console.log(err));

async function run() {
  const url = 'https://slack.com/api/chat.postMessage';
  const res = await axios.post(url, {
    channel: '#general',
    text: 'Hello, World!'
  }, { headers: { authorization: `Bearer ${slackToken}` } });

  console.log('Done', res.data);
}
