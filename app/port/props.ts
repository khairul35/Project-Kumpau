export interface Port {
    id: number;
    name: string;
    state: string;
    fees: number;
    description: string;
    target: string[];
    bait: string[];
    technique: string[];
    isLegal: boolean;
}

export interface ComponentProps {
    ports: Port[];
    onCreatePort: () => void;
}
