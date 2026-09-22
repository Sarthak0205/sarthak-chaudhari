# Sarthak – Software Engineering Portfolio

Hi, I’m Sarthak.

This portfolio showcases my work across **backend systems, databases, data analysis, and frontend interfaces**. The projects here focus on solving practical problems using clean system design, structured data, and well-reasoned engineering decisions.

I build projects end-to-end — from database schema and access control to backend logic, frontend presentation, and data-driven evaluation — with an emphasis on correctness, clarity, and scalability.

---

## What this portfolio reflects

- Systems designed with **clear data models and constraints**
- Backend-first thinking with deliberate access control and security choices
- Data-driven features evaluated using meaningful metrics
- Frontend interfaces built to support system behavior, not distract from it

---

## Selected Projects

### CineSense
A two-stage hybrid recommendation platform combining dense semantic candidate retrieval with collaborative graph reranking and franchise diversity enforcement across 16,261 catalog records.

**Focus areas:**
- Two-stage architecture: dense semantic candidate generation + collaborative graph reranking
- 384-dimensional Sentence-Transformer embeddings (`all-MiniLM-L6-v2`)
- Sub-100ms response times, 51.50% Hit Rate@10, and franchise deduplication

This project focuses on how recommendation logic fits into a system — including data preparation, evaluation, and presentation — rather than treating it as a standalone algorithm.

---

### Smart Study Planning System
A system designed to help students plan and manage their study schedules intelligently while enforcing access control and data security at the database level.

**Focus areas:**
- Structured data modeling for subjects, tasks, schedules, and users
- Role-based access control and permissions (DBSAC concepts)
- Backend logic for planning, constraints, and updates
- Secure data access enforced at the database layer

This project combines **system design and database security**, demonstrating how access control concepts are applied within a real multi-user application.

---

## Technologies Used

- JavaScript, React, Vite
- Python, Django
- PostgreSQL
- Scikit-learn, Pandas

---

## Running the project locally

```bash
npm install
npm run dev
