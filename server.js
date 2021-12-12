const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://picsum.photos/200",
      name: "김철수",
      birthday: "870422",
      gender: "남자",
      job: "회사원",
    },
    {
      id: 2,
      image: "https://picsum.photos/200",
      name: "이영희",
      birthday: "920122",
      gender: "여자",
      job: "인턴",
    },
    {
      id: 3,
      image: "https://picsum.photos/200",
      name: "최영수",
      birthday: "970630",
      gender: "남자",
      job: "대학생",
    },
  ]);
});

app.listen(5000, () => console.log("Listening on port 5000"));
