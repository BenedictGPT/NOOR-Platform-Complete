# NOOR Platform - MCP and API Requirements

**Version:** 1.0
**Date:** October 29, 2025
**Purpose:** To define the Model Context Protocol (MCP) for inter-agent communication, and to specify the internal and external APIs required for the operation of the 26-agent team.

---

## 1. Executive Summary

Effective communication and integration are critical for the success of the 26-agent team. This document specifies the three core pillars of the NOOR platform's connectivity:

1.  **Model Context Protocol (MCP):** A standardized, JSON-based messaging schema that all agents MUST use for inter-agent communication. It ensures that all communication is structured, predictable, and machine-readable.
2.  **Internal APIs:** A suite of RESTful APIs, exposed by the Backend Agent, that provides a secure and managed gateway for other agents to access platform data and functionality.
3.  **External APIs:** A curated list of third-party services that provide essential functionality, from payment processing to machine translation and government authentication.

This specification serves as the definitive guide for developers building the communication and integration layers of the NOOR platform.

---

## 2. Model Context Protocol (MCP)

The Model Context Protocol (MCP) is the universal language for inter-agent communication. It is a simple, yet powerful JSON-based protocol designed for asynchronous, message-based interaction.

### 2.1. MCP Message Structure

All messages exchanged between agents MUST conform to the following JSON structure:

```json
{
  "mcp_version": "1.0",
  "message_id": "uuid-v4-string",
  "timestamp": "iso-8601-string",
  "source_agent": "agent-name-string",
  "destination_agent": "agent-name-string",
  "message_type": "REQUEST | RESPONSE | NOTIFICATION",
  "correlation_id": "uuid-v4-string-or-null",
  "payload": {
    "action": "action-name-string",
    "parameters": {
      "key1": "value1",
      "key2": "value2"
    },
    "status": "SUCCESS | ERROR",
    "data": { ... },
    "error": {
      "code": "error-code-string",
      "message": "error-message-string"
    }
  }
}
```

### 2.2. Key Fields Explained

| Field | Description |
| :--- | :--- |
| `mcp_version` | The version of the MCP protocol being used. |
| `message_id` | A unique identifier for this specific message. |
| `timestamp` | The ISO 8601 timestamp when the message was created. |
| `source_agent` | The name of the agent sending the message. |
| `destination_agent` | The name of the agent intended to receive the message. Can be a specific agent or a broadcast group (e.g., `DEVELOPMENT_AGENTS`). |
| `message_type` | The type of message: `REQUEST` (requires a response), `RESPONSE` (a reply to a request), or `NOTIFICATION` (fire-and-forget). |
| `correlation_id` | If the `message_type` is `RESPONSE`, this field MUST contain the `message_id` of the original `REQUEST`. |
| `payload` | The content of the message. |
| `payload.action` | The specific action being requested or performed (e.g., `CREATE_TASK`, `RUN_SCAN`). |
| `payload.parameters`| The parameters required for the action. |
| `payload.status` | In a `RESPONSE`, indicates if the action was successful. |
| `payload.data` | In a `RESPONSE`, contains the data returned by the action. |
| `payload.error` | In a `RESPONSE`, contains details if the action failed. |

### 2.3. Example MCP Interaction: Orchestrator to Frontend Agent

**1. Orchestrator sends a `REQUEST` to the QA Agent:**

```json
{
  "mcp_version": "1.0",
  "message_id": "a1b2c3d4",
  "timestamp": "2025-10-29T10:00:00Z",
  "source_agent": "OrchestratorAgent",
  "destination_agent": "QAAgent",
  "message_type": "REQUEST",
  "payload": {
    "action": "RUN_E2E_TESTS",
    "parameters": {
      "feature_branch": "feature/new-dashboard"
    }
  }
}
```

**2. QA Agent sends a `RESPONSE` back to the Orchestrator:**

```json
{
  "mcp_version": "1.0",
  "message_id": "e5f6g7h8",
  "timestamp": "2025-10-29T10:05:00Z",
  "source_agent": "QAAgent",
  "destination_agent": "OrchestratorAgent",
  "message_type": "RESPONSE",
  "correlation_id": "a1b2c3d4",
  "payload": {
    "action": "RUN_E2E_TESTS",
    "status": "SUCCESS",
    "data": {
      "test_run_id": "tr-9876",
      "passed": 127,
      "failed": 2,
      "report_url": "https://qa.noor.gov/reports/tr-9876"
    }
  }
}
```

---

## 3. Internal APIs (Gateway via Backend Agent)

To ensure security, consistency, and manageability, agents do not interact directly with the databases. Instead, the **Backend Agent** exposes a set of secure, internal RESTful APIs that act as a gateway to the platform's data and business logic. All internal API endpoints require authentication via a JWT issued to the agent.

### 3.1. API Endpoint Summary

| Endpoint | Method | Description | Authorized Agents |
| :--- | :--- | :--- | :--- |
| `/api/v1/users` | GET, POST | Manage user profiles. | Orchestrator, RadiantAI |
| `/api/v1/competencies` | GET | Retrieve competency data. | All Agents |
| `/api/v1/assessments` | GET, POST | Manage assessments. | AssessmentMgmtAgent |
| `/api/v1/guilds` | GET, POST | Manage guilds. | GuildMgmtAgent |
| `/api/v1/tokens` | POST | Manage token transactions. | TokenEconomyAgent |
| `/api/v1/reports` | POST | Generate compliance reports. | EmiratizationAgent |
| `/api/v1/tasks` | GET, PUT | Update task status in Jira. | Orchestrator |
| `/api/v1/models` | GET | Access trained ML models. | RadiantAI, MentorMatching |

---

## 4. External APIs & Services

The NOOR platform relies on a number of third-party APIs and services to provide its full range of functionality. The **API Integration Agent** is responsible for managing these integrations.

| Service | Purpose | Integrating Agent(s) |
| :--- | :--- | :--- |
| **UAE Pass** | Single Sign-On (SSO) Authentication | API Integration Agent |
| **Stripe** | Payment Processing | API Integration Agent |
| **Google Translate API** | Machine Translation | Translation Agent |
| **DeepL API** | Machine Translation (alternative) | Translation Agent |
| **Semantic Scholar API**| Academic Research | Scholar AI Agent |
| **arXiv API** | Academic Research | Scholar AI Agent |
| **GitHub API** | Version Control & CI/CD | Orchestrator, DevOps Agent |
| **Jira API** | Task Management | Orchestrator |
| **Slack API** | Notifications and Alerts | Orchestrator, Monitoring Agent |
| **Snyk API** | Security Scanning | Security Agent |
| **HashiCorp Vault API**| Secrets Management | Security Agent, DevOps Agent |
| **Firebase (FCM)** | Mobile Push Notifications | Mobile Agent |
| **Postmark/SendGrid**| Transactional Emails | Backend Agent |
| **AWS S3 API** | File Storage | Backend Agent |

---

## 5. Conclusion

This document provides the foundational specification for all communication and integration within the NOOR platform. By adhering to the standardized Model Context Protocol (MCP) and utilizing the defined internal and external APIs, the 26-agent team can collaborate seamlessly to build and operate a complex, feature-rich platform. This structured approach ensures security, scalability, and maintainability of the entire agentic ecosystem.

