// import React, { useEffect } from "react";
// import { useNavigate } from "react-router";
// import { auth } from "./Firebase";

// export default function Root() {
//   const { currentUser } = auth;
//   const navigate = useNavigate();
//   useEffect(() => {
//     try {
//       currentUser ? navigate("/tasks") : navigate("/signin");
//       console.log("done");
//     } catch (err) {
//       console.log("err");
//       console.log(err);
//     }
//   }, [currentUser, navigate]);
//   return <div> hi</div>;
// }
