import { ControlSection } from "./types";

export const controlsData: ControlSection[] = [
  {
    id: "access-identity",
    title: "Access & Identity",
    controls: [
      {
        title: "Role-Based Access Control",
        description:
          "Access to the ZipNACH application, supporting infrastructure, and administrative functions is governed through Role-Based Access Control (RBAC). Users are granted the minimum level of access necessary to perform their authorized responsibilities, following the principle of least privilege.",
        status: "implemented",
      },
      {
        title: "Secure Remote Access",
        description:
          "Access to the ZipNACH production environment is restricted to authorized personnel using Multi-Factor Authentication (MFA), secure authentication mechanisms, and encrypted communication channels. Administrative activities are logged and monitored.",
        status: "implemented",
      },
    ],
  },

  {
    id: "monitoring-endpoint-security",
    title: "Monitoring & Endpoint Security",
    controls: [
      {
        title: "Security Monitoring & Logging",
        description:
          "ZipNACH continuously monitors production systems, infrastructure, APIs, network security devices, and application events. Security logs are collected, protected, and reviewed to detect unauthorized activities and support incident investigations.",
        status: "implemented",
      },
      {
        title: "Endpoint Detection & Response",
        description:
          "Security monitoring solutions are deployed across company-managed endpoints supporting the ZipNACH platform. Alerts are reviewed and triaged by our security team for rapid investigation and remediation.",
        status: "implemented",
      },
      {
        title: "Anti-Malware Protection",
        description:
          "Anti-malware protections are deployed across company-issued endpoints to detect, quarantine, and remediate malicious software, with automatic signature and definition updates.",
        status: "implemented",
      },
    ],
  },

  {
    id: "vulnerability-risk-management",
    title: "Vulnerability & Risk Management",
    controls: [
      {
        title: "Vulnerability Management",
        description:
          "The ZipNACH platform undergoes regular vulnerability assessments and penetration testing. Identified vulnerabilities are evaluated based on risk and remediated accordingly.",
        status: "implemented",
      },
      {
        title: "Patch Management",
        description:
          "Operating systems, applications, databases, and supporting infrastructure are regularly patched to address security vulnerabilities and maintain platform security.",
        status: "implemented",
      },
      {
        title: "Risk Management",
        description:
          "Security risks affecting the ZipNACH platform are identified, assessed, tracked, and mitigated through an established information security risk management process.",
        status: "implemented",
      },
    ],
  },

  {
    id: "data-protection",
    title: "Data Protection",
    controls: [
      {
        title: "Encryption",
        description:
          "Customer information is protected using strong encryption mechanisms for data at rest and in transit to safeguard confidentiality and integrity.",
        status: "implemented",
      },
      {
        title: "Data Retention & Secure Disposal",
        description:
          "Customer information is retained only for the duration necessary to meet business, contractual, and regulatory requirements. Data is securely disposed of using approved destruction procedures once retention requirements expire.",
        status: "implemented",
      },
      {
        title: "Secure Media Disposal",
        description:
          "Storage media and electronic devices containing customer or business data are securely sanitized or destroyed before disposal, with appropriate records maintained.",
        status: "implemented",
      },
    ],
  },

  {
    id: "resilience-availability",
    title: "Resilience & Availability",
    controls: [
      {
        title: "Backup & Recovery",
        description:
          "Critical systems and customer data are regularly backed up, tested, and protected to support timely recovery from operational disruptions or disaster scenarios.",
        status: "implemented",
      },
      {
        title: "System Availability",
        description:
          "The ZipNACH platform is designed with redundancy, monitoring, and operational controls to maintain high availability and service continuity.",
        status: "implemented",
      },
    ],
  },

  {
    id: "incident-response",
    title: "Incident Response",
    controls: [
      {
        title: "Incident Response & Breach Notification",
        description:
          "Security incidents are managed through documented response procedures. Incidents are investigated, contained, remediated, and reported in accordance with regulatory and contractual obligations.",
        status: "implemented",
      },
    ],
  },

  {
    id: "secure-development",
    title: "Secure Development",
    controls: [
      {
        title: "Secure Development Lifecycle",
        description:
          "Security is integrated throughout the software development lifecycle using secure coding practices, code reviews, dependency management, and security testing before deployment.",
        status: "implemented",
      },
    ],
  },
];