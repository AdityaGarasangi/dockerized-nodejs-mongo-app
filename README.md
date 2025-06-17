# 🐳 Dockerized Node.js + MongoDB App

A simple Express.js backend app running in Docker, connected to MongoDB, with Mongo Express for visual DB access. All services managed using Docker Compose.

## 📦 Tech Stack
- Node.js (Express)
- MongoDB
- Mongo Express
- Docker & Docker Compose

## 🚀 How to Run

```bash
docker compose up -d --build
```
#### Access:
 * Node app: http://localhost:5050
 * Mongo Express: http://localhost:8081

## 📬 API Endpoints

| Method | Endpoint  | Function      |
| ------ | --------- | ------------- |
| GET    | /getUsers | Get all users |
| POST   | /addUser  | Add a user    |

## 📦 Docker Volumes
MongoDB data is persisted on host using a volume:
```bash
/run/desktop/mnt/host/e/data:/data/db
```

## 🛠️ Future Improvements
 * Add healthchecks for services
 * Add .env file support
 * Add CI/CD pipeline using GitHub Actions

