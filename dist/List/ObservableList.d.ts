import { ObservableCollection } from "../models/ObservableCollection";
import { Observable } from "rxjs";
export declare class ObservableList<T> implements ObservableCollection<T> {
    items$: Observable<T[]>;
    private items;
    constructor(initialValue?: T[]);
    add(item: T): void;
    clear(): void;
    contains(item: T): boolean;
    remove(index: number): void;
    private update;
    readonly asArray: T[];
    readonly Items: T[];
}
