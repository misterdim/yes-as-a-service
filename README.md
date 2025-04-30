# Yes-as-a-Service

An Express-based HTTP service that responds with a random positive affirmation, tailored by mood. Great for bots, apps, or existential reassurance.

This was vibe-coded, so I don't care what you do with it.

## 🎯 Features

- `GET /yes` returns a random “yes” reason.
- Supports mood modes:
  - `?mode=fun`
  - `?mode=corporate`
  - `?mode=sarcastic`
- Rate limited to **10 requests per minute per IP**.

## 🚀 Quick Start

### 1. Clone the repo

```bash
git clone https://github.com/your-username/yes-as-a-service.git
cd yes-as-a-service
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
npm start
```

### 4. Example Requests

```bash
curl http://localhost:3000/yes
curl http://localhost:3000/yes?mode=fun
curl http://localhost:3000/yes?mode=corporate
curl http://localhost:3000/yes?mode=sarcastic
```