import { Observable } from "rxjs";
import { Collection } from "./Collection";

export interface ObservableCollection<T> extends Collection<T> {
  items$: Observable<T>;
}
