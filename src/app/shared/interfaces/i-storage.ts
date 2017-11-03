export interface IStorage {
    setItem(key: string, data: Object): Object;
    getItem(key: string): Object;
    clearAll();
    clear(key: string);
}
