import { DictionaryCollection } from "../models/DictionaryCollection";
import { KeyPair } from "../models/KeyPair";
export declare class Dictionary<V> implements DictionaryCollection<V> {
    private items;
    constructor(...items: KeyPair<V>[]);
    add(item: KeyPair<V>): void;
    add(key: string, value: V): boolean;
    clear(): void;
    containsKey(key: string): boolean;
    containsValue(value: V): boolean;
    remove(key: string): boolean;
    remove(index: number): void;
    readonly Items: KeyPair<V>;
    contains(item: KeyPair<V>): boolean;
    private update;
}
