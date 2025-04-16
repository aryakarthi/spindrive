import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import contactRoute from "./routes/contactRoute.js";

dotenv.config();

const PORT = 5000;
const app = express();

// const whitelist = [
//   process.env.CLIENT_BASE_URL.replace(/\/$/, "https://spindrive-client.vercel.app/"),
// ];

// const corsOptions = {
//   origin: function (origin, callback) {
//     console.log("CORS Origin:", origin);
//     console.log("Allowed Origin:", whitelist);

//     if (!origin || whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       console.error(`CORS blocked: ${origin}`);
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
//   optionsSuccessStatus: 200,
// };

// app.use((req, res, next) => {
//   if (req.method === "OPTIONS") {
//     console.log("Handling preflight request...");
//     res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_BASE_URL);
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "GET, POST, PUT, DELETE, OPTIONS"
//     );
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "Content-Type, Authorization"
//     );
//     res.setHeader("Access-Control-Allow-Credentials", "true");
//     return res.sendStatus(200);
//   }
//   next();
// });

// const whitelist = [
//   (
//     process.env.CLIENT_BASE_URL || "https://spindrive-client.vercel.app"
//   ).replace(/\/$/, ""),
// ];

// const corsOptions = {
//   origin: function (origin, callback) {
//     const whitelist = new Set([
//       process.env.CLIENT_BASE_URL?.replace(/\/$/, ""), // Remove trailing slash
//       "https://spindrive-client.vercel.app".replace(/\/$/, ""), // Explicitly add production URL
//       "http://localhost:5173".replace(/\/$/, ""), // Explicitly add development URL
//     ]);

//     console.log("CORS Origin:", origin);
//     console.log("Allowed Origin:", whitelist);

//     if (!origin || whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       console.error(`CORS blocked: ${origin}`);
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
//   optionsSuccessStatus: 200,
// };

// app.use(cors(corsOptions));
// app.options("*", cors(corsOptions));

app.use(
  cors({
    // origin: "http://localhost:5173",
    origin: "https://www.spindrivecars.com",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/contact", contactRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
