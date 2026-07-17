Phase 3 (Current)
Backend setup
Express
MongoDB
API structure
Environment variables
Folder architecture
No frontend changes

1.Create the server/ folder.
2.Initialize the Node.js project.
3.Install backend dependencies.
4.Set up Express and MongoDB.
5.Verify the API is running.
6.Then we'll move on to designing the complete database blueprint before implementing any business logic.

1.cd server
pwd for checking path,

Step 2: Initialize Node Project
npm init -y
this create
server/
│
├── package.json

Step 3: Install Required Packages
npm install express mongoose cors dotenv bcryptjs jsonwebtoken cookie-parser multer cloudinary

Step 4: Install Development Dependency
npm install -D nodemon

Step 5: Verify

Your folder should now contain:

server/
│
├── node_modules/
├── package-lock.json
├── package.json

The installation completed successfully.

From your terminal I can see:

✅ express
✅ mongoose
✅ cors
✅ dotenv
✅ bcryptjs
✅ jsonwebtoken
✅ cookie-parser
✅ multer
✅ cloudinary
✅ nodemon

learning :
Think of your backend as a company.

Express = Reception + Manager
MongoDB = Warehouse
Mongoose = Warehouse Manager
JWT = Employee ID Card
bcrypt = Password Locker
Multer = Delivery Boy
Cloudinary = Cloud Storage Warehouse

npm install express
What is it?

Express is a Node.js framework that helps us build APIs and web servers.

Without Express, writing an API in Node.js requires much more code.

Think of Express as the heart of our backend.
Browser
    │
    ▼
Express Server
    │
    ▼
Database

Express receives the request, decides what should happen, talks to MongoDB if needed, and sends a response.

2️⃣ Mongoose

npm install mongoose

What is it?

MongoDB stores data as documents.

Mongoose is a library that lets Node.js communicate with MongoDB easily.

Without Mongoose we'd write raw MongoDB queries.

With Mongoose:
User.find()

3️⃣ CORS

npm install cors
Our frontend runs here: localhost:5173
Backend runs here: localhost:5000

These are different origins.
Browsers block requests between them by default.
CORS tells the browser:
"It's okay. React is allowed to talk to this backend."

React ❌ Backend
Blocked by CORS policy
Blocked by CORS policy

With CORS:
React ✔ Backend

4️⃣ dotenv
npm install dotenv
const password="abc123";
Instead create:.env
PORT=5000

MONGO_URI=...

JWT_SECRET=...

CLOUDINARY_KEY=...
Now Node reads them safely:
process.env.PORT

This keeps passwords and keys out of your code and Git repository.

5.bcryptjs
npm install bcryptjs
Suppose you register.
Password:kalpesh123
We should never store it directly.
Bad:kalpesh123
Good:$2a$10$kL8W...

bcrypt converts your password into a secure hash.
During login:
Entered Password
        │
bcrypt.compare()
        │
Stored Hash
If they match, login succeeds.

Even if someone steals the database, they won't see real passwords.

6️⃣ jsonwebtoken (JWT)
npm install jsonwebtoken
After login, how does the server remember who you are?

Instead of storing your password, it gives you a token.

Think of it as a movie ticket.
Login
   │
Server
   │
Creates Token
   │
User Stores Token

Later:
Book Event
User sends token.

Server checks:
Valid?

Yes ✔

No ❌

7️⃣ cookie-parser
npm install cookie-parser
Cookies are small pieces of data stored by the browser.

We can store the JWT inside a cookie.

Browser:
Cookie
Every request automatically sends it.
Login
↓

Browser saves cookie

↓

Open Dashboard

↓

Cookie automatically sent

↓

Server verifies user

8️⃣ Multer
npm install multer
Users will upload images for events.

Example:
Summer Camp.jpg
Browser

↓

Express

↓

Multer receives the file

↓

Processes it

↓

We'll then upload it to Cloudinary.

Without Multer, Express can't easily handle file uploads.

9️⃣ Cloudinary
npm install cloudinary

Where should uploaded images live?

Not in our project folder.

Instead:
User Upload

↓

Cloudinary

↓

Returns URL

↓

Save URL in MongoDB
Benefits:

Fast image delivery
Automatic optimization
No need to manage server storage

🔟 Nodemon
npm install -D nodemon

Normally:

You change code.

Need to stop server.

Run again.

Again.

Again.

With Nodemon:

Save File

↓

Server Restarts Automatically
Much faster during development.

This is why it's a development dependency (-D). We use it while building the app, but not in production.

How these packages work together in Eventify

                 React Frontend
              (localhost:5173)
                      │
                      │ HTTP Request
                      ▼
                 Express Server
                      │
      ┌───────────────┼────────────────┐
      │               │                │
      ▼               ▼                ▼
   CORS         Cookie Parser      Multer
      │               │                │
      └───────────────┼────────────────┘
                      ▼
             Authentication
          bcrypt + JWT + dotenv
                      │
                      ▼
                 Mongoose
                      │
                      ▼
                 MongoDB Database
                      │
                      ▼
                 Cloudinary
             (Stores Event Images)


What we've accomplished today

Although we haven't written any backend code yet, we've completed the foundation:

1.Installed the framework (Express) to build APIs.
2.Installed the database library (Mongoose) to work with MongoDB.
3.Enabled communication between the frontend and backend (CORS).
4.Added support for environment variables (dotenv).
5.Prepared secure password handling (bcryptjs).
6.Prepared token-based authentication (jsonwebtoken).
7.Added cookie support (cookie-parser).
8.Prepared for file uploads (Multer).
9.Prepared cloud image storage (Cloudinary).
10.Installed automatic server restart during development (Nodemon).

This is like buying all the materials before constructing a house. The next step is to arrange them into a clean backend architecture and start building the actual application.

Q1 :but while installing dependences we just run fev cmd we didnt run each and every depndence cmd ?
That's a very good observation. It shows you're trying to understand how npm works, not just memorizing commands.

The answer is yes, we installed all of them individually—but in a single command.

npm install express mongoose cors dotenv bcryptjs jsonwebtoken cookie-parser multer cloudinary



Next Step (Phase 3.1)
Now we'll create the backend folder structure.
server/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── utils/
├── validations/
│
├── server.js
├── .env
├── .gitignore
└── package.json
