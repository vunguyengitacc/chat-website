import { Client, Stomp } from "@stomp/stompjs";
import { AppDispatch } from "app/reduxStore";
import { addMessage } from "feature/chat-app/roomSlice";
import { IMessage } from "model/Message";
import { IRoom } from "model/Room";
import { useDispatch } from "react-redux";
import SockJS from "sockjs-client";

const useSocket = () => {
  const dispatch = useDispatch<AppDispatch>();

  const connect = (channels: IRoom[]) => {
    let sock = new SockJS("http://localhost:8080/chat");
    let stomp = Stomp.over(sock);
    stomp.debug = () => {};

    stomp.onConnect = () => {
      console.log(`Connected to ${sock.url}`);
      channels.forEach((i) => {
        stomp.subscribe(`/room/${i.id}`, (message) => {
          console.log("Received message");
          try {
            let payload = JSON.parse(message.body) as IMessage;
            dispatch(addMessage(payload));
          } catch (error) {}
        });
      });
    };

    stomp.onDisconnect = (frame) => {
      console.log("Disconnected");
    };
    stomp.activate();
  };

  return {
    connect,
  };
};

export default useSocket;
