import { DictionaryCollection, KeyPair } from "./DictionaryCollection";
import { Observable } from "rxjs";

export interface ObservableDictionaryCollection<V>
  extends DictionaryCollection<V> {
  items$: Observable<KeyPair<V>>;
}
