*SupplyPulse – AI-Powered Supply Chain Control Tower*

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

## updated pic of the project dashbord


<img width="1600" height="822" alt="PHOTO-2026-04-16-17-12-59" src="https://github.com/user-attachments/assets/9af99e39-c863-46c5-95a0-fa00e7a3df69" />
<img width="1600" height="828" alt="PHOTO-2026-04-16-17-13-39" src="https://github.com/user-attachments/assets/52b7749d-1f47-4b8b-b71e-a75a960fbc27" />
<img width="1600" height="819" alt="PHOTO-2026-04-16-17-13-18" src="https://github.com/user-attachments/assets/b90f41c7-ccc2-45c4-b4a9-640e9d719879" />
<img width="1600" height="825" alt="PHOTO-2026-04-16-17-12-38" src="https://github.com/user-attachments/assets/56458f02-1a94-4870-83b0-45a5119c085d" />


