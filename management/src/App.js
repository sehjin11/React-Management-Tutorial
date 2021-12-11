import "./App.css";
import Customer from "./components/Customer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
  Paper,
} from "@material-ui/core";
import { Component } from "react";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

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

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>사진</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
