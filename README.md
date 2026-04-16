#  *SupplyPulse – AI-Powered Supply Chain Control Tower

## 🧠 Problem Statement

Modern supply chains face **real-time visibility issues**, delayed decision-making, and lack of predictive intelligence.

Key challenges:

* ❌ No centralized monitoring system
* ❌ Delays in identifying disruptions
* ❌ Poor demand forecasting
* ❌ Inefficient communication between stakeholders

---

## 💡 Solution

**SupplyPulse** is a **Real-Time Supply Chain Control Tower Agent** that provides:

✅ Live tracking of supply chain operations
✅ AI-powered insights & anomaly detection
✅ Predictive analytics for demand & delays
✅ Centralized dashboard for decision-makers

It acts as a **single source of truth** for supply chain visibility.

---

## 🏗️ System Architecture

* Follows **MVC (Model-View-Controller)** architecture
* Backend built with **RESTful APIs**
* Frontend communicates via API endpoints
* Modular and scalable design

---

## ⚙️ Tech Stack

### 🔹 Frontend

* React.js
* Tailwind CSS

### 🔹 Backend

* FastAPI (Python)
* REST API Architecture

### 🔹 Database

* MongoDB / PostgreSQL *(based on your setup)*

### 🔹 AI/ML (Optional Enhancement)

* Anomaly detection models
* Forecasting algorithms

### 🔹 DevOps

* Docker (for containerization)

---

## 📂 Project Structure

```
SupplyPulse/
│── frontend/        # React UI
│── backend/         # FastAPI server
│── models/          # Data models (MVC)
│── controllers/     # API logic
│── routes/          # API endpoints
│── database/        # DB connection (Singleton)
│── utils/           # Helpers & logging
│── README.md
```

---

## 🔗 API Design (REST Structure)

| Method | Endpoint  | Description           |
| ------ | --------- | --------------------- |
| GET    | /supplies | Fetch all supply data |
| POST   | /supplies | Add new supply        |
| GET    | /alerts   | Get anomaly alerts    |
| GET    | /forecast | Demand prediction     |

---

## 🧩 Design Patterns Used

* ✅ **Singleton Pattern** → Database connection
* ✅ **MVC Architecture** → Clean separation of logic
* ✅ **REST API Structure** → Scalable backend communication

---

## 📊 Features

* 📡 Real-time data monitoring
* 📉 Predictive analytics
* 🚨 Intelligent alert system
* 📊 Dashboard visualization
* 🔗 API-based integration

---

## 🧪 Error Handling & Logging

* Centralized error handling implemented
* Logging system for debugging and monitoring
* API responses include proper status codes

---

## ▶️ How to Run the Project

### 🔹 Clone Repository

```bash
git clone https://github.com/Akshay-Kesavarapu/SupplyPulse.git
cd SupplyPulse
```

### 🔹 Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### 🔹 Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🐳 Docker Setup (Optional)

```bash
docker-compose up --build
```

---

## 📸 Screenshots

> *(Add screenshots of dashboard, API response, UI here)*

---

## 🌟 Why This Project Stands Out

* Real-world **industry problem solving**
* Scalable **microservice-ready architecture**
* AI integration for **future expansion**
* Clean, maintainable, production-ready codebase

---

##  Future Improvements

* Real-time IoT integration
* Advanced ML forecasting
* Multi-user authentication
* Cloud deployment (AWS/GCP)

---

## 👨‍💻 Team

* Developer 1 – Frontend
* Developer 2 – Backend & API

---

## 🏁 Conclusion

SupplyPulse transforms traditional supply chains into **intelligent, data-driven ecosystems**, enabling faster decisions and reducing operational risks.

---
## The updated pics of the Dashbord of my project(Supplypulse)


<img width="1600" height="825" alt="image" src="https://github.com/user-attachments/assets/8c09dcd4-987e-4ed6-b4a6-7c6b40b2de93" />


<img width="1600" height="822" alt="image" src="https://github.com/user-attachments/assets/b9a0763e-5a4a-498b-9aee-56a6cd431fe7" />

<img width="1600" height="819" alt="image" src="https://github.com/user-attachments/assets/981d68de-e096-42f7-8f3d-eb34508d91e3" />


<img width="1600" height="828" alt="image" src="https://github.com/user-attachments/assets/5ba29571-a3b7-4f40-84ef-7964ee15b365" />
