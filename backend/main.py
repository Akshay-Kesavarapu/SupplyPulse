from fastapi import FastAPI
import random
from datetime import datetime
from fastapi.middleware.cors import CORSMiddleware
import requests
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🔥 ================== API KEY ==================
API_KEY = os.getenv("API_KEY")   # ❗ LINE 16 → PUT YOUR KEY HERE

# ---------- DATA ----------

routes = [
    "Chennai → Bangalore",
    "Hyderabad → Mumbai",
    "Delhi → Jaipur",
    "Pune → Ahmedabad"
]

traffic_conditions = ["Low", "Medium", "High"]

# ---------- REAL WEATHER FUNCTION ----------

def get_weather(city="Chennai"):
    try:
        url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"
        response = requests.get(url)

        print("STATUS:", response.status_code)   # 🔥 DEBUG
        print("RAW:", response.text)             # 🔥 DEBUG

        data = response.json()

        if response.status_code != 200:
            return "API_ERROR"

        weather_main = data["weather"][0]["main"]

        if weather_main in ["Rain", "Thunderstorm"]:
            return "Rain"
        elif weather_main in ["Clouds"]:
            return "Medium"
        else:
            return "Clear"

    except Exception as e:
        print("ERROR:", e)
        return "ERROR"

# ---------- AI LOGIC ----------

def calculate_risk(weather, traffic, delay):
    risk = 0

    if weather == "Rain":
        risk += 25
    elif weather == "Storm":
        risk += 40

    if traffic == "Medium":
        risk += 20
    elif traffic == "High":
        risk += 35

    if delay:
        risk += 30

    return min(risk, 100)

def predict_delay(risk):
    return risk > 60

def risk_level(risk):
    if risk < 40:
        return "LOW"
    elif risk < 70:
        return "MEDIUM"
    else:
        return "HIGH"

# ---------- SHIPMENT ----------

def generate_shipment():
    city = random.choice(["Chennai", "Bangalore", "Hyderabad", "Mumbai"])
    weather = get_weather(city)

    traffic = random.choice(traffic_conditions)
    delay_flag = random.choice([True, False])

    risk = calculate_risk(weather, traffic, delay_flag)
    delay = predict_delay(risk)

    return {
        "id": f"TRK-{random.randint(100,999)}",
        "route": random.choice(routes),
        "city": city,
        "status": "DELAYED" if delay else "ON TIME",
        "eta_hours": random.randint(2, 6),
        "risk_score": risk,
        "risk_level": risk_level(risk),
        "weather": weather,
        "traffic": traffic,
        "delay_predicted": delay
    }

# ---------- AI AGENT ----------

def perceive():
    return {
        "event": random.choice(["Traffic Spike", "Heavy Rain", "Vehicle Breakdown"]),
        "severity": random.choice(["LOW", "MEDIUM", "HIGH"])
    }

def reason():
    delay = random.randint(20, 50)
    probability = random.randint(70, 90)

    return {
        "cause": "Real-time disruption detected",
        "impact": f"{delay} min delay expected",
        "analysis": f"{probability}% probability of delay"
    }

def decide():
    return {
        "action": "Switch to alternate route",
        "confidence": f"{random.randint(85, 98)}%",
        "expected_improvement": f"{random.randint(20, 40)}% faster delivery"
    }

def act():
    return {
        "status": "Reroute Executed",
        "new_eta": f"{random.randint(2,5)}h {random.randint(0,59)}m"
    }

# ---------- APIs ----------

@app.get("/")
def home():
    return {"message": "SupplyPulse AI Backend Running 🚀"}

@app.get("/overview")
def overview():
    shipments = [generate_shipment() for _ in range(5)]

    return {
        "total_shipments": len(shipments),
        "alerts": sum(1 for s in shipments if s["risk_level"] == "HIGH"),
        "system_health": f"{random.randint(95,99)}%",
        "cost_savings": f"₹{random.randint(20000,70000)} saved",
        "shipments": shipments
    }

@app.get("/ai")
def ai_dashboard():
    return {
        "perception": perceive(),
        "reasoning": reason(),
        "decision": decide(),
        "action": act()
    }

@app.get("/operations")
def operations():
    return {
        "queue": random.randint(1, 10),
        "logs": [
            f"{datetime.now().strftime('%H:%M:%S')} | Delay detected",
            f"{datetime.now().strftime('%H:%M:%S')} | Task queued",
            f"{datetime.now().strftime('%H:%M:%S')} | Processing",
            f"{datetime.now().strftime('%H:%M:%S')} | Reroute completed"
        ]
    }

@app.get("/alerts")
def alerts():
    shipments = [generate_shipment() for _ in range(8)]

    return [
        {
            "id": s["id"],
            "route": s["route"],
            "risk": s["risk_score"],
            "message": "⚠️ High Risk Shipment"
        }
        for s in shipments if s["risk_level"] == "HIGH"
    ]

@app.get("/summary")
def summary():
    shipments = [generate_shipment() for _ in range(10)]

    return {
        "total": len(shipments),
        "high_risk": sum(1 for s in shipments if s["risk_level"] == "HIGH"),
        "delayed": sum(1 for s in shipments if s["delay_predicted"])
    }

@app.post("/login")
def login(role: str):
    return {
        "role": role,
        "token": "fake-jwt-token"
    }
