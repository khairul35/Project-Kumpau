export interface FormProps {
    showForm: boolean;
    onCancelForm: () => void;
    onRefresh: () => void;
}

export interface ComponentProps {
    showForm: boolean,
    onCancelForm: () => void;
    onFinish: (values: any) => void;
}
