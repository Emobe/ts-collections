import { KeyPair } from "../models/DictionaryCollection";
import { ObservableDictionaryCollection } from "../models/ObservableDictionaryCollection";
import { Observable } from "rxjs";
export declare class ObservableDictionary<V> implements ObservableDictionaryCollection<V> {
    items$: Observable<KeyPair<V>>;
    private items;
    constructor(...items: KeyPair<V>[]);
    add(item: KeyPair<V>): void;
    add(key: string, value: V): boolean;
    clear(): void;
    containsKey(key: string): boolean;
    containsValue(value: V): boolean;
    remove(key: string): boolean;
    remove(index: number): void;
    contains(item: KeyPair<V>): boolean;
    readonly Items: KeyPair<V>;
    private update;
}
