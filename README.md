# My First Docker Project

This is my first Node.js application running inside a Docker container.

## 🚀 Features
- Simple Express.js server
- `/` - Home page (HTML + CSS)
- `/products` - API endpoint returning product data
- Dockerized application

## 🛠️ Technologies Used
- Node.js
- Express.js
- Docker
- HTML + CSS

## 📦 Steps to Run Locally
```bash
# Build Docker image
docker build -t firstdocker .

# Run the container
docker run -d -p 3000:8000 firstdocker

