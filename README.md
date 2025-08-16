
# 📈 Stock Marketplace System

A full-stack stock marketplace platform built using the **MERN stack** that allows users to view stock data, analyze performance with charts, and perform secure buy/sell transactions. The system differentiates between public users and authenticated users, ensuring a smooth and role-specific experience.

---

## 🚀 Features

- 🔐 **User Authentication & Authorization** using **Passport.js**  
- 👥 **Public Users** (unauthenticated) can access:  
	- About Page  
	- Products Section  
	- Pricing Details  
- 👤 **Authenticated Users** can:  
	- View **live stock data**  
	- **Buy and Sell** stocks  
	- Analyze stock performance via **interactive charts** (Chart.js)  
- 🧪 **Automation Testing** using **Jest** for both backend logic & React components  

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Chart.js  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **Authentication:** Passport.js  
- **Testing:** Jest  

---

## 📂 Project Structure

Stock-Market-main/
│── backend/           # Express.js server, APIs, authentication logic
│   ├── index.js
│   ├── package.json
│   ├── model/         # MongoDB models
│   ├── schemas/       # Mongoose schemas
│
│── dashboard/         # React.js dashboard frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
│── frontend/          # React.js landing page frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
│── Screenshots/       # Project screenshots
│   ├── BuyandSell.png
│   ├── Dashboard.png
│   ├── Funds.png
│   ├── Holdings.png
│   ├── Orders.png
│   ├── Position.png
│   ├── Pricing.png
│   └── Support.png
│
└── README.md

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/stock-marketplace.git
cd stock-marketplace
```

### 2️⃣ Install dependencies
**Backend:**
```bash
cd backend
npm install
```
**Frontend:**
```bash
cd frontend
npm install
```

### 3️⃣ Set up environment variables
Create a `.env` file in the backend folder:
```ini
MONGO_URI=your-mongodb-atlas-uri
SESSION_SECRET=your-secret-key
```

### 4️⃣ Run the project
**Backend:**
```bash
npm start
```
**Frontend:**
```bash
npm run dev
```

### 🧪 Testing
Run Jest tests for backend & frontend:
```bash
npm test
```

---


## 📸 Screenshots

### 🏠 Home Page
![Home](Screenshots/Home.png)

### 📊 Dashboard
![Dashboard](Screenshots/Dashboard.png)

### 🔑 Login Page
![Login](Screenshots/Login.png)

### 📝 Sign Up
![Sign Up](Screenshots/Sign%20Up.png)

### 💰 Funds
![Funds](Screenshots/Funds.png)

### 📋 Holdings
![Holdings](Screenshots/Holdings.png)

### 📦 Orders
![Orders](Screenshots/Orders.png)

### 📈 Position
![Position](Screenshots/Position.png)

### 💸 Pricing
![Pricing](Screenshots/Pricing.png)

### � Products
![Products](Screenshots/Products.png)

### ℹ️ About
![About](Screenshots/About.png)


### 🛠️ Support
![Support](Screenshots/Support.png)

### 🏷️ Buy and Sell
![Buy and Sell](Screenshots/BuyandSell.png)

---


## 🤝 Contributing
Fork the repo

Create a new branch (feature/xyz)

Commit your changes

Open a pull request

---

## 📜 License
This project is licensed under the MIT License.

---

## 👨‍💻 Author
Developed by Anuj Awasthi ✨
