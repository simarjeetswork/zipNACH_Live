export interface Control {
  title: string;
  description: string;
  status: "implemented";
}

export interface ControlSection {
  id: string;
  title: string;
  controls: Control[];
}