const { WebClient, LogLevel } = require("@slack/web-api");
const client = new WebClient("xoxb-4208929916324-4206536588322-bzN4PIMO44UPVM0LsIHz6tbj", {
  logLevel: LogLevel.DEBUG
});

const channelId = "C0467PK7ZT8";
const userId = "U0462BKP8QK";

try {
  const result =  client.chat.postEphemeral({
    channel: channelId,
    user: userId,
    text: "This is a text message from Javascript!"
  });
  console.log(result);
}
catch (error) {
  console.error(error);
}
