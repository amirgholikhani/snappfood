export interface Payload {
    payload: object
}

export type Customer = { data: any };

export interface Props {
    customersList: Customer[];
    count: number;
    loading: boolean;
    error: any;
    getCustomersDispatch: (payload: object) => void;
}
