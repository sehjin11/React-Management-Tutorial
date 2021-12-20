import React from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
  TextField,
} from "@material-ui/core";
import axios from "axios";

class CustomerUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      id: this.props.id,
      userName: this.props.name,
      birthday: this.props.birthday,
      job: this.props.job,
    };
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  //   updateCustomer = () => {
  //     const url = "/api/update";
  //     const formData = new FormData();
  //     formData.append("id", this.state.id);
  //     formData.append("userName", this.state.userName);
  //     formData.append("birthday", this.state.birthday);
  //     formData.append("job", this.state.job);
  //     const config = {
  //       header: {
  //         "content-type": "multipart/formdata",
  //       },
  //     };
  //     return post(url, formData, config);
  //   };

  handleFormSubmit = (e) => {
    const userData = {
      userName: this.state.userName,
      id: this.state.id,
      birthday: this.state.birthday,
      job: this.state.job,
    };
    axios
      .post("http://localhost:3000/api/update", userData)
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        this.props.stateRefresh();
      });
  };

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };

  render() {
    //const { classes } = this.props;
    return (
      <div>
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleClickOpen}
        >
          수정
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>정보 수정</DialogTitle>
          <DialogContent>
            ID : <TextField name="id" value={this.state.id} />
            <br />
            이름 :{" "}
            <TextField
              value={this.state.userName}
              name="userName"
              type="text"
              onChange={this.handleValueChange}
            />
            <br />
            생일 :{" "}
            <TextField
              value={this.state.birthday}
              name="birthday"
              type="text"
              onChange={this.handleValueChange}
            />
            <br />
            직업 :{" "}
            <TextField
              value={this.state.job}
              name="job"
              type="text"
              onChange={this.handleValueChange}
            />
            <br />
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={this.handleFormSubmit}>
              수정
            </Button>
            <Button variant="outlined" onClick={this.handleClose}>
              취소
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CustomerUpdate;
