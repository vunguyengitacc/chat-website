import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, IconButton } from "@mui/material";
import MessageInput from "component/Input/MessageInput";
import React from "react";
import { useForm } from "react-hook-form";
import messageScheme, { IMessagePayloadParams } from "./form";
import useMessageSenderStyle from "./style";
import SendIcon from "@mui/icons-material/Send";
import toast from "react-hot-toast";
import messageApi from "api/messageApi";

interface IProps {
  roomId: Number;
}

const MessageSender: React.FC<IProps> = ({ roomId }) => {
  const form = useForm<IMessagePayloadParams>({
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      content: "",
    },
    resolver: yupResolver(messageScheme),
  });
  const style = useMessageSenderStyle();

  const sendMessageHandler = async (data: IMessagePayloadParams) => {
    try {
      messageApi.create({ content: data.content, roomId: roomId.toString() });
      form.reset();
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <form
      className={style.surface}
      onSubmit={form.handleSubmit(sendMessageHandler)}
    >
      <MessageInput
        className={style.input}
        placeHolder="Type message here..."
        name="content"
        form={form}
      />
      <IconButton type="submit" className={style.btnSubmit} color="secondary">
        <SendIcon />
      </IconButton>
    </form>
  );
};

export default MessageSender;
