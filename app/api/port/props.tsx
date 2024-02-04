export interface CreatePortRequest {
    name: string;
    state: string;
    fees: number;
    description: string;
    isLegal: boolean;
    target: string[];
    bait: string[];
    technique: string[];
}
