export interface ComplianceItem {
  title: string;
  href: string;
}

export interface ControlCardData {
  title: string;
  href: string;
  items: string[];
}
export interface Props {
  data: ControlCardData;
  onClick: (id: string) => void;
}