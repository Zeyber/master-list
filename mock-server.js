const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const PORT = 9002;

const MOCK_FEEDS = [
  {
    endpoint: "/facebook",
    data: [
      {
        message: "Randall Smokes",
        description: "hi",
        icon: "/assets/icon.png",
      },
      { message: "Mikey House", description: "hi", icon: "/assets/icon.png" },
      { message: "Spamzee", description: "hi", icon: "/assets/icon.png" },
      { message: "Spamzee", description: "hi", icon: "/assets/icon.png" },
      { message: "Spamzee", description: "hi", icon: "/assets/icon.png" },
    ],
  },
  {
    endpoint: "/gmail",
    data: [
      {
        message: "Re: Help",
        description: "Fire!!!!!",
        icon: "/assets/icon-2.png",
      },
      {
        message: "Re: Help",
        description: "Its making a weird noise",
        icon: "/assets/icon-2.png",
      },
    ],
  },
];

// Setup mock feeds
for (const feed of MOCK_FEEDS) {
  app.get(feed.endpoint, (req, res) => {
    res.send({ data: feed.data });
  });
}

app.listen(PORT, () => {
  console.log(`Mock server listening on port ${PORT}.`);
});
