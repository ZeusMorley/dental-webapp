export type Service = {
    id: string;
    name: string;
    price: number;
    type: "counter" | "toggle";
    count?: number;
    enabled?: boolean;
  };
  
  export const SERVICES: Service[] = [
    { id: "extraction", name: "Tooth Extraction", price: 1000, type: "counter", count: 0 },
    { id: "filling", name: "Dental Filling", price: 1500, type: "counter", count: 0 },
    { id: "root_canal", name: "Root Canal", price: 6000, type: "counter", count: 0 },
    { id: "crown", name: "Dental Crown", price: 8000, type: "counter", count: 0 },
    { id: "cleaning", name: "Teeth Cleaning", price: 2000, type: "toggle", enabled: false },
    { id: "whitening", name: "Whitening", price: 4500, type: "toggle", enabled: false },
    { id: "braces", name: "Braces (Full)", price: 40000, type: "toggle", enabled: false },
  ];