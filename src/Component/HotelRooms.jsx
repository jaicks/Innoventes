import React, { Component, Fragment } from "react";
import "../App.css";
class HotelRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookedRoom: 1,
      adult: 1,
      children: 0,
    };
  }

  handleAdd() {
    if (this.state.bookedRoom < 5) {
      this.setState({
        bookedRoom: this.state.bookedRoom + 1,
        adult: this.state.adult + 1,
      });
    }
  }

  handleMinus() {
    if (this.state.bookedRoom > 1) {
      this.setState({ bookedRoom: this.state.bookedRoom - 1 });
    }
  }

  handleAddAdult() {
    if (this.state.adult < this.state.bookedRoom * 4) {
      this.setState({ adult: this.state.adult + 1 });
    } else if (
      this.state.adult + 1 > this.state.bookedRoom * 4 &&
      Number(this.state.adult) < 20
    ) {
      this.setState({
        bookedRoom: this.state.bookedRoom + 1,
        adult: this.state.adult + 1,
      });
    }
  }

  handleMinusAdult() {
    console.log(this.state.adult, this.state.bookedRoom);
    if (
      this.state.adult + this.state.children === 4 &&
      this.state.bookedRoom > 1
    ) {
      this.setState({ bookedRoom: 1, adult: this.state.adult - 1 });
    } else if (
      this.state.adult + this.state.children === 8 &&
      this.state.bookedRoom > 1
    ) {
      this.setState({ bookedRoom: 2, adult: this.state.adult - 1 });
    } else if (
      this.state.adult + this.state.children === 12 &&
      this.state.bookedRoom > 1
    ) {
      this.setState({ bookedRoom: 3, adult: this.state.adult - 1 });
    } else if (
      this.state.adult + this.state.children === 16 &&
      this.state.bookedRoom > 1
    ) {
      this.setState({ bookedRoom: 4, adult: this.state.adult - 1 });
    } else if (this.state.adult > 1) {
      this.setState({ adult: this.state.adult - 1 });
    }
  }

  handleAddChildren() {
    if (
      this.state.adult + this.state.children > 4 &&
      this.state.adult + this.state.children < 8
    ) {
      this.setState({ bookedRoom: 2 });
    } else if (
      this.state.adult + this.state.children <= this.state.bookedRoom * 4 &&
      Number(this.state.adult) < 20
    ) {
      this.setState({ children: this.state.children + 1 });
    }
  }
  componentDidMount = () => {};
  render() {
    const { children, adult, bookedRoom } = this.state;

    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <i className="fa fa-users icon"></i>
            choose Number of people
          </div>

          <div className="card p-3">
            <div className="row border-bottom p-3">
              <div className="col-sm-9 text-left">
                <i className="fa fa-bed icon"></i>ROOMS
              </div>
              <div className="col-sm-3">
                <i
                  className="fa fa-minus minus_icon"
                  onClick={() => this.handleMinus()}
                ></i>
                {bookedRoom}
                <i
                  className="fa fa-plus add_icon"
                  onClick={() => this.handleAdd()}
                >
                  {" "}
                </i>
              </div>
            </div>

            <div className="row border-bottom p-3">
              <div className="col-sm-9 text-left">
                <i className="fa fa-female icon"></i>ADULTS
              </div>
              <div className="col-sm-3">
                <i
                  className="fa fa-minus minus_icon"
                  onClick={() => this.handleMinusAdult()}
                >
                  {" "}
                </i>
                {adult}
                <i
                  className="fa fa-plus add_icon"
                  onClick={() => this.handleAddAdult()}
                >
                  {" "}
                </i>
              </div>
            </div>

            <div className="row p-3">
              <div className="col-sm-9 text-left">
                <i className="fa fa-child icon"></i>CHILDREN
              </div>
              <div className="col-sm-3">
                <i className="fa fa-minus minus_icon"> </i>
                {children}
                <i className="fa fa-plus add_icon"> </i>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HotelRooms;
