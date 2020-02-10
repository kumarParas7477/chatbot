
import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:4000");

class ProjectService {
  message: string = "";
  public initiate = () => {
    socket.on("connect", () => {
      console.log("connected");
    });
  };
  public sendMessage = (message: any): String => {
    socket.emit("createMessage", `${message}`, this.getMessage());
    return this.message;
  };
  public getMessage = () => {
    socket.on("newMessage", (message: any) => {
      this.message = message;
    });
  };
}
export default new ProjectService();
