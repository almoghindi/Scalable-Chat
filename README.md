# Scalable Socket.IO Chat Application

This project is a scalable real-time chat application built using modern web technologies. It leverages Socket.IO for real-time communication, Redis for session management, Kafka for event streaming, and PostgreSQL for data persistence. The client side is built with React, TypeScript, Tailwind CSS, and Shadcn.

## Features

- **Real-Time Communication**: Instant messaging with Socket.IO.
- **Scalability**: Kafka handles event streaming, and Redis provides fast access to session data.
- **Persistent Data Storage**: PostgreSQL is used to store chat history and user data.
- **Modern Frontend**: Built with React and TypeScript for type safety, Tailwind CSS for styling, and Shadcn for a consistent UI component library.

## Tech Stack

### Backend

- **Node.js**: JavaScript runtime used to build the server.
- **Socket.IO**: Library for real-time, bidirectional communication.
- **Redis**: In-memory data structure store used for managing sessions and caching.
- **Kafka**: Distributed event streaming platform used to handle chat events.
- **PostgreSQL**: Relational database used for storing user data and chat history.
- **Express.js**: Web framework for Node.js, used to create REST APIs.
- **TypeScript**: Superset of JavaScript that adds static typing.

### Frontend

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Shadcn**: Component library for a consistent UI.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed.
- **Docker**: Recommended for running Redis, Kafka, and PostgreSQL.
- **Kafka and Zookeeper**: Ensure Kafka and Zookeeper are running.

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/socketio-chat-app.git
cd socketio-chat-app
```

2. **Install backend dependencies:**
```bash
cd backend
npm install
```

3.**Install frontend dependencies:**
```bash
cd ../fronten
npm install
```

4.**Configure Environment Variables: Create a .env file in the backend directory and add the following:**
```bash
PORT=3001
REDIS_HOST=localhost
REDIS_PORT=6379
KAFKA_BROKER=localhost:9092
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=chatapp
POSTGRES_USER=youruser
POSTGRES_PASSWORD=yourpassword
```

# Running the Application

5. **Clone the repository:**
```bash
cd backend
npm start
```

6. **Install backend dependencies:**
```bash
cd backend
npm start
```
