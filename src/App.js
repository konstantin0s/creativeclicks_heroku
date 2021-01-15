import React, { Component } from "react";
import axios from "axios";
import Modal from "react-modal";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Fade from "react-reveal/Fade";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Zoom from "react-reveal/Zoom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PhotoContainer from "./components/PhotoContainer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msisdn: "",
      message: "",
      showModal: false,
      error: {},
      result: {},
    };
  }

  onChange = (e) => {
    let str = e.target.value;
    let newNumber = str.replace(/06/g, "00316");

    this.setState({ msisdn: newNumber });
    if (str === "") {
      this.setState({ result: {}, error: {} });
    }
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    if (this.validate()) {
      this.setState({ showModal: false });
    } else {
      let msisdn = this.state.msisdn;
      axios({
        method: "GET",
        url: `https://p.djummer.com/opdracht?msisdn=${msisdn}`,
        headers: {"Access-Control-Allow-Origin": "*",
       "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"},
        data: this.state.msisdn,
      })
        .then((result) => {
          result.data.status === "subscribed"
            ? this.setState({
                showModal: true,
                result: result.data,
                message: result.data.status,
              })
            : this.setState({
                showModal: false,
                result: result.data,
                message: result.data.status,
              });
          return result;
        })
        .catch((error) =>
          this.setState({ error: error.message, showModal: false })
        );
    }

    this.clearErrors();
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  showModalx = () => {
    this.setState({ showModal: true });
  };

  validate = () => {
    let input = this.state.msisdn;
    let errors = {};
    let isValid = true;
    if (!input) {
      isValid = false;
      errors["phone"] = "Please enter your phone number.";
    }

    if (typeof input !== "undefined") {
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(input)) {
        isValid = false;
        errors["phone"] = "Please enter only number.";
      } else if (input.length !== 13) {
        isValid = false;
        errors["phone"] = "Please enter valid phone number.";
      }
    }

    if (!isValid) {
      this.setState({
        error: errors,
      });
    }
  };

  displayError = () => {
    if (this.state.error.phone) {
      return this.state.error.phone;
    }
    if (this.state.message) {
      return this.state.result.status;
    }
  };

  clearErrors = () => {
    setTimeout(() => {
      this.setState({ error: {}, message: "" });
    }, 15000);
  };

  render() {
    const { status, credits, datesubscribed } = this.state.result;
    const msisdn = this.state.msisdn;
    return (
      <div className="App">
        <Header />
        <PhotoContainer />

        <div className="app-container">
          <form action="#">
            <label htmlFor="Phone">Phone:</label>
            <input
              type="text"
              name="msisdn"
              value={msisdn}
              onChange={this.onChange}
              placeholder="06XXXXXXXX"
              required
            />

            <div className="text-danger flex-center">
              <Fade bottom cascade>
                {this.displayError()}
              </Fade>
            </div>

            <button
              className="btn btn-success"
              type="submit"
              disabled={this.state.msisdn.length < 1}
              onClick={(e) => this.handleFormSubmit(e)}
              name="submit"
            >
              Submit
            </button>
            <div>
              {this.state.showModal && (
                <Modal
                  className="modalx"
                  ariaHideApp={false}
                  isOpen={true}
                  onRequestClose={this.closeModal}
                >
                  <Zoom>
                    <button className="close-modal" onClick={this.closeModal}>
                      X
                    </button>

                    <div className="modal-body">
                      <Fade left cascade>
                        <h1 className="text-center"> User details:</h1>
                        <Card className="rcard">
                          <CardActionArea>
                            <CardContent>
                              <div className="text-danger">
                                {!this.state.error.phone ? (
                                  <React.Fragment>
                                    <Typography
                                      gutterBottom
                                      variant="h5"
                                      component="h2"
                                    >
                                      Number: {msisdn}
                                    </Typography>

                                    <Typography
                                      gutterBottom
                                      variant="h5"
                                      component="h2"
                                    >
                                      Status: {status}
                                    </Typography>
                                    <Typography
                                      gutterBottom
                                      variant="h5"
                                      component="h2"
                                    >
                                      Credits: {credits}
                                    </Typography>
                                    <Typography
                                      gutterBottom
                                      variant="h5"
                                      component="h2"
                                    >
                                      Subscribed: {datesubscribed}
                                    </Typography>
                                  </React.Fragment>
                                ) : (
                                  this.state.error.phone
                                )}
                              </div>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </Fade>
                    </div>
                  </Zoom>
                </Modal>
              )}
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
