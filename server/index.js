import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import { dirname } from "path";
import { fileURLToPath } from "url";
import cors from "cors";



const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Ride-Hack-24",
    password: "vishwas",
    port: 5432,
});

db.connect();

const app = express();
const PORT = 5000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("client"));
app.use(bodyParser.json());
app.use(cors());


app.post("/signup", async (req, res) => {
  const { fname, lname, password, email } = req.body;

  try {
    console.log("Received form data:", { fname, lname, password, email });

    const check = await db.query("SELECT * FROM signup WHERE email = $1", [email]);
    if (check.rows.length > 0) {
      return res.send({ success: true });
      
    } else {
      const result = await db.query(
        "INSERT INTO signup(first_name, last_name, email, password) VALUES ($1, $2, $3, $4)",
        [fname, lname, email, password]
      );
      console.log("Signup Successful:", result.rows);
      return res.send({ success: true });
    }
  } catch (err) {
    console.error("Error during signup:", err);
    return res.send({ success: false });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await db.query(
      "SELECT * FROM signup WHERE email = $1",
      [email]
    );
    if (result.rows.length > 0) {
      const getPassword = result.rows[0].password;
      if (getPassword === password) {
        console.log("User Exist Login successful");
        return res.send({ success: true });
      } else {
        console.log("Incorrect Password");
        return res.send({ success: false, error: "Incorrect Password" });
      }
    } else {
      console.log("User not found");
      return res.send({ success: false, error: "User not found" });
    }
  } catch (err) {
    console.log("Error during login:", err);
    return res.status(500).send("An error occurred during login");
  }
});

app.post("/donate", async (req, res) => {
  const { Fname, email, phone, title, bookAuthor, quantity, category, description } = req.body;
  try {
    const result = await db.query(
      "INSERT INTO donate (full_name, email, phone, title, author, quantity, genre, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
      [Fname, email, phone, title, bookAuthor, quantity, category, description]
    );
    console.log(result);
    res.send("Data saved successfully");
    return res.send({success: true});
   
  } catch (error) {
    console.log(error);
    res.status(500).send("Error occurred while saving data");
    return res.send({success: false});
  }
});

app.listen(PORT, () => {
  console.log('Server is running on PORT');
});