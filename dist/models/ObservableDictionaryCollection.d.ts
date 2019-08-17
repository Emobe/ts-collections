import { DictionaryCollection } from "./DictionaryCollection";
import { Observable } from "rxjs";
import { KeyPair } from "./";
export interface ObservableDictionaryCollection<V> extends DictionaryCollection<V> {
    items$: Observable<KeyPair<V>>;
}
