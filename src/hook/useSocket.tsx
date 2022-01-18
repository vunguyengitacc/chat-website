import { Client, Stomp } from "@stomp/stompjs";
import { AppDispatch, RootState } from "app/reduxStore";
import { addMessage, removeOneRoom } from "feature/chat-app/roomSlice";
import { IMessage } from "model/Message";
import { IRoom } from "model/Room";
import { useDispatch, useSelector } from "react-redux";
import SockJS from "sockjs-client";

const useSocket = () => {
  const currentUser = useSelector(
    (state: RootState) => state.authReducer.currentUser
  );
  const dispatch = useDispatch<AppDispatch>();

  let sock = new SockJS("http://localhost:8080/chat");
  let stomp = Stomp.over(sock);
  const connect = (channels: IRoom[]) => {
    stomp.debug = () => {};

    stomp.onConnect = () => {
      channels.forEach((i) => {
        stomp.subscribe(`/room/${i.id}`, (message) => {
          console.log("message");
          try {
            let payload = JSON.parse(message.body) as IMessage;
            dispatch(addMessage(payload));
          } catch (error) {}
        });
        stomp.subscribe(`/room/${i.id}/delete`, (message) => {
          try {
            let payload = JSON.parse(message.body) as IRoom;
            dispatch(removeOneRoom(payload.id));
            stomp.unsubscribe(`/room/${i.id}`);
          } catch (error) {}
        });
      });
    };

    stomp.onDisconnect = (frame) => {
      console.log("Disconnected");
    };
    stomp.activate();
  };

  const disconnect = async () => {
    stomp.deactivate();
  };

  return {
    connect,
    disconnect,
  };
};

export default useSocket;
