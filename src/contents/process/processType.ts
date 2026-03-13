export interface ProcessItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  shape: string;
  animation: string;
}

export interface ProcessStepThree {
    id: number;
    icon: string;
    title: string;
    text: string;
    delay: number;
    reverse?: boolean;
}