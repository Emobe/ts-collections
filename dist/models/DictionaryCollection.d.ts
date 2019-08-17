import { Collection } from "./Collection";
import { KeyPair } from "./KeyPair";
export interface DictionaryCollection<V> extends Collection<KeyPair<V>> {
    add(item: KeyPair<V>): void;
    add(key: string, value: V): boolean;
    containsKey(key: string): boolean;
    containsValue(value: V): boolean;
    remove(key: string): boolean;
    remove(index: number): void;
}
