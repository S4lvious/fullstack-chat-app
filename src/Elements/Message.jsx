import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const convertTimestamp = (timestamp) => {
    let date = timestamp.toDate();
    let day = date.getDay();
    let mounth = date.getMonth();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let year = date.getFullYear();
  
    date = "alle " + hh + ":" + mm + " il " + day + "/" + mounth+1 + "/" + year ;
    console.log(mounth)
    return date;
  }

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>{convertTimestamp(message.date)}</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;