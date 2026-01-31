This project is an AI-driven Customer Relationship Management (CRM) system that automates customer support for e-commerce platforms using Google Gemini AI.

The system reads customer emails, checks shipment (AWB) status, automatically creates support tickets, assigns priority, and generates professional email replies — all in real time.

🚀 Problem Statement

Customer support teams manually read thousands of emails every day to:

Understand customer issues

Check shipment status

Create tickets

Write replies

This process is slow, error-prone, and costly.

💡 Solution

We built an AI-powered CRM that uses Google Gemini to:

Understand customer emails

Analyze AWB (shipment) status

Categorize issues

Assign ticket priority

Generate human-like responses automatically

This reduces support workload and improves customer experience.

🛠 Tech Stack
Frontend

HTML

CSS

JavaScript

Backend

Node.js

Express.js

AI

Google Gemini API

Model: gemini-2.5-flash

🧩 How the System Works

Customer email and AWB status are entered in the UI

Data is sent to the backend API

Backend sends a prompt to Google Gemini

Gemini analyzes the data and returns:

Ticket Category

Priority

Professional Reply

The response is displayed on the screen
