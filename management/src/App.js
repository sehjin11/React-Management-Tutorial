import "./App.css";
import Customer from "./components/Customer";

const customers = [
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
];

function App() {
  return (
    <div>
      {customers.map((c) => {
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
    </div>
  );
}

export default App;
