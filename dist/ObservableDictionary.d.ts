import { Dictionary } from "./Dictionary";
export declare class ObservableDictionary<K, V> extends Dictionary<K, V> {
    subscribe(callback: (value: V) => void): void;
}
