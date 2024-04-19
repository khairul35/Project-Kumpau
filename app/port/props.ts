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
    loading: boolean;
    search: string;
    state: string;
    setSearch: (search: string) => void;
    setState: (state: string) => void;
    onCreatePort: () => void;
    onRefresh: () => void;
}
