# NOOR Platform - Comprehensive Tools & Services Catalog

**Version:** 1.0
**Date:** October 29, 2025
**Purpose:** To provide a comprehensive catalog of all tools, platforms, frameworks, and services required for the development, deployment, and operation of the NOOR platform and its 26-agent team.

---

## 1. Executive Summary

This document serves as the single source of truth for the entire technical stack of the NOOR platform. It provides a curated list of over 50 essential tools and services, categorized by their function. Each entry includes the tool's purpose and the primary AI agents that utilize it.

This catalog is essential for developers, DevOps engineers, and the Orchestrator Agent to ensure that the correct tools are used for each task and that the platform's environment is consistent and manageable.

---

## 2. Development Tools

### 2.1. Languages & Frameworks

| Tool | Purpose | Primary Agent(s) |
| :--- | :--- | :--- |
| **Python 3.11+** | Primary backend language. | Backend, Data Science, All Agents |
| **FastAPI** | High-performance web framework for building backend APIs. | Backend Agent |
| **SQLAlchemy** | ORM for interacting with the PostgreSQL database. | Backend, Database Agent |
| **JavaScript (ES6+)** | Primary frontend language. | Frontend Agent |
| **TypeScript** | Superset of JavaScript for type safety in the frontend. | Frontend, Mobile Agent |
| **React 18+** | UI library for building the web frontend. | Frontend Agent |
| **React Native** | Framework for building native mobile apps (iOS & Android). | Mobile Agent |
| **Node.js 22+** | JavaScript runtime for frontend build tools. | Frontend Agent |
| **Tailwind CSS** | Utility-first CSS framework for styling. | Frontend Agent |

### 2.2. IDEs & Editors

| Tool | Purpose | Primary Agent(s) |
| :--- | :--- | :--- |
| **VS Code** | Primary code editor for both frontend and backend development. | Frontend, Backend, All Devs |
| **PyCharm** | Alternative IDE for Python development. | Backend, Data Science |
| **Jupyter Notebooks**| Interactive environment for data exploration and model prototyping. | Data Science, Scholar AI |

---

## 3. Infrastructure & DevOps

### 3.1. Cloud & Containerization

| Tool | Purpose | Primary Agent(s) |
| :--- | :--- | :--- |
| **AWS / Azure / GCP** | Primary cloud provider for hosting all infrastructure. | DevOps Agent |
| **Docker** | Containerization platform for packaging applications. | DevOps, All Devs |
| **Kubernetes** | Container orchestration for deploying and scaling services. | DevOps Agent |
| **Terraform** | Infrastructure as Code (IaC) for provisioning cloud resources. | DevOps Agent |
| **Helm** | Package manager for Kubernetes applications. | DevOps Agent |

### 3.2. Databases & Caching

| Tool | Purpose | Primary Agent(s) |
| :--- | :--- | :--- |
| **PostgreSQL 16** | Primary relational database for structured data. | Database Mgmt, Database |
| **MongoDB 7** | Document database for unstructured and semi-structured data. | Database Mgmt, Database |
| **Neo4j 5** | Graph database for modeling relationships (Guilds, Competencies). | Database Mgmt, Database |
| **Redis 7** | In-memory data store for caching and real-time messaging. | Database Mgmt, Backend |
| **Elasticsearch 8** | Search engine for full-text search capabilities. | Database Mgmt, Backend |
| **Apache Kafka** | Distributed streaming platform for real-time data pipelines. | Database Mgmt & Streaming |

### 3.3. CI/CD & Build Tools

| Tool | Purpose | Primary Agent(s) |
| :--- | :--- | :--- |
| **GitHub Actions** | Automation platform for CI/CD pipelines. | DevOps Agent |
| **Vite** | Modern build tool for the frontend application. | Frontend Agent |
| **Fastlane** | Automation tool for mobile app deployment. | Mobile Agent |

---

## 4. Monitoring & Observability

| Tool | Purpose | Primary Agent(s) |
| :--- | :--- | :--- |
| **Prometheus** | Time-series database for collecting metrics. | Monitoring & Observability |
| **Grafana** | Platform for building and visualizing monitoring dashboards. | Monitoring & Observability |
| **Loki** | Log aggregation system designed for Prometheus. | Monitoring & Observability |
| **Jaeger / OpenTelemetry**| Standard for distributed tracing to monitor request flows. | Monitoring & Observability |
| **Kubecost / Harness**| Tools for monitoring and optimizing Kubernetes costs. | Cost Optimization Agent |

---

## 5. Security

| Tool | Purpose | Primary Agent(s) |
| :--- | :--- | :--- |
| **HashiCorp Vault** | Centralized secrets management for API keys and credentials. | Security, DevOps Agent |
| **Snyk / Veracode** | Application security testing (SAST, DAST) for vulnerabilities. | Security Agent |
| **OWASP ZAP** | Open-source tool for penetration testing. | Security Agent |
| **Wazuh / Suricata**| Intrusion Detection System (IDS) for monitoring network threats. | Security Agent |
| **Clair** | Open-source container vulnerability scanner. | Security, DevOps Agent |

---

## 6. AI, Machine Learning & Data

| Tool | Purpose | Primary Agent(s) |
| :--- | :--- | :--- |
| **PyTorch / TensorFlow**| Deep learning frameworks for training AI models. | Data Science Agent |
| **Scikit-learn** | Library for classical machine learning algorithms. | Data Science, Analytics |
| **Pandas / NumPy** | Libraries for data manipulation and analysis in Python. | Data Science, Analytics |
| **MLflow** | Platform for managing the end-to-end machine learning lifecycle. | Data Science Agent |
| **spaCy / NLTK** | NLP libraries for text processing and analysis. | Content, Scholar, Competency |
| **Vector Databases** | Databases (Pinecone, Weaviate) for semantic search in RAG. | Radiant AI, Scholar AI |
| **dbt (Data Build Tool)**| Tool for transforming data in the data warehouse. | Database Mgmt & Streaming |

---

## 7. Communication & Project Management

| Tool | Purpose | Primary Agent(s) |
| :--- | :--- | :--- |
| **Jira** | Project management and issue tracking. | Orchestrator Agent |
| **Slack** | Real-time communication, notifications, and alerts. | Orchestrator, Monitoring Agent |
| **GitHub** | Source code management, version control, and collaboration. | All Development Agents |
| **Figma** | Collaborative design tool for UI/UX. | AURORA Agent |
| **MkDocs / Docusaurus**| Static site generators for creating documentation portals. | Documentation Agent |

---

## 8. Third-Party Services (External APIs)

| Service | Purpose | Primary Agent(s) |
| :--- | :--- | :--- |
| **UAE Pass** | Official UAE government SSO authentication service. | API Integration Agent |
| **Stripe** | Payment processing for subscriptions and services. | API Integration Agent |
| **Google Translate / DeepL**| Neural machine translation services. | Translation Agent |
| **Semantic Scholar / arXiv**| APIs for accessing academic research papers. | Scholar AI Agent |
| **Postmark / SendGrid**| Transactional email delivery services. | API Integration Agent |
| **Firebase (FCM / APNS)**| Service for sending mobile push notifications. | Mobile Agent |
| **AWS S3** | Object storage for files, documents, and backups. | API Integration, DevOps |

---

## 9. Conclusion

This catalog provides a comprehensive, though not exhaustive, list of the core technologies that power the NOOR platform. The selection of these tools is based on their industry-standard status, robust feature sets, scalability, and suitability for an agent-driven development environment. Adherence to this standardized stack will be crucial for maintaining the platform's integrity, security, and operational efficiency.

