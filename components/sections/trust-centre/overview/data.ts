import { ComplianceItem, ControlCardData } from "./types";


export const complianceData: ComplianceItem[] = [
  {
    title: "ISO 27001:2022 Certified",
    href: "#",
  },
  {
    title: "Regulatory Compliance",
    href: "#",
  },
];
export const controlsData: ControlCardData[] = [
  {
    title: "Access & Identity",
    href: "access-identity",
    items: [
      "Role-Based Access Control",
      "Secure Remote Access",
    ],
  },
  {
    title: "Monitoring & Endpoint Security",
    href: "monitoring-endpoint-security",
    items: [
      "Security Monitoring & Logging",
      "Endpoint Detection & Response",
      "Anti-Malware Protection",
    ],
  },
  {
    title: "Vulnerability & Risk Management",
    href: "vulnerability-risk-management",
    items: [
      "Vulnerability Management",
      "Patch Management",
      "Risk Management",
    ],
  },
  {
    title: "Data Protection",
    href: "data-protection",
    items: [
      "Encryption",
      "Data Retention & Secure Disposal",
      "Secure Media Disposal",
    ],
  },
  {
    title: "Resilience & Availability",
    href: "resilience-availability",
    items: [
      "Backup & Recovery",
      "System Availability",
    ],
  },
  {
    title: "Incident Response",
    href: "incident-response",
    items: [
      "Incident Response & Breach Notification",
    ],
  },
  {
    title: "Secure Development",
    href: "secure-development",
    items: [
      "Secure Development Lifecycle",
    ],
  },
];