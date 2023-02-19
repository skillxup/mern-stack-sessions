import React, { Component } from "react";
import { messageService } from "@/_services";

class Home extends Component {
  

  sendMessage() {
    messageService.sendMessage("msg");
  }

  clearMessages() {
    messageService.clearMessages();
  }
  render() {
    return (
      <div>
        <h5 className="text-info">Observables and Subscribers</h5>

        <button
          type="button"
          className="btn btn-success"
          onClick={this.sendMessage}
        >
          {" "}
          Send Message{" "}
        </button>

        <button
          type="button"
          className="btn btn-danger"
          onClick={this.clearMessages}
        >
          {" "}
          Clear Message(s){" "}
        </button>
      </div>
    );
  }
}

export { Home };
