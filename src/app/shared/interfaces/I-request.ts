export interface IRequest {
    get(url: string): Promise<Object>;
    post(url: string, data: Object): Promise<Object>;
}
