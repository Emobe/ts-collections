import { Collection } from "../models/Collection";
export declare class List<T> implements Collection<T> {
    private items;
    constructor(items?: T[]);
    add(item: T): void;
    clear(): void;
    contains(item: T): boolean;
    remove(index: number): void;
    readonly Items: T[];
}
