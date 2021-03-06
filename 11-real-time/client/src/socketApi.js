import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("Sunucuya bağlanılıyor...");
  socket = io("http://localhost:3001", {
    transports: ["websocket"],
  });
  socket.on("connect", () =>
    console.log("Sunucuya bağlantı başarıyla gerçekleşti.")
  );
};

export const send = (color) => {
  socket.emit(
    "newColor",
    color
  ); /* emit --> clienttaysak backend'e, backendeysek client'a data göndermeyi sağlar. */
};

export const subscribe = (cb) => {
  socket.on("receive", (color) => {
    console.log(color);
    cb(color);
  });
};
