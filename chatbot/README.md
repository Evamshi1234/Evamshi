# Chatbot (Admission & Feedback) - Scaffold

This folder contains the initial scaffold for the student admission and feedback chatbot.

Structure:
- server/ - Node.js + Express + TypeScript backend
- client/ - React + TypeScript + Vite frontend

Required environment variables (see .env.example):
- MONGODB_URI
- JWT_SECRET
- AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, S3_BUCKET, S3_REGION
- OPENAI_API_KEY (optional)
- SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS (optional)

Quick start (development):
1. Install server dependencies: cd chatbot/server && npm install
2. Install client dependencies: cd ../client && npm install
3. Start server in dev mode: cd ../server && npm run dev
4. Start client: cd ../client && npm run dev
