import React from "react";

const AnnouncementBar = () => {
  return (
    <div
      style={{
        height: 26,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: 8,
        backgroundColor: "#111111",
          color: "#fff",
      }}
    >
      <p style={{ fontSize: 13 }}>Stay in the loop, follow for more  |  X - <a href="https://twitter.com/PaidIncHQ"
                                                                               target="_blank"
                                                                               rel="noopener noreferrer" style={{color:"#2be82b"}} >@PaidIncHQ</a></p>
    </div>
  );
};

export default AnnouncementBar;
