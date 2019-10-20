import test from "tape";
import ObservableDictionary from "../src/ObservableDictionary";
import { stringify } from "querystring";

test("ObservableDictionary should initialise", t => {
  const items = new ObservableDictionary<string, number>();
  t.true(items);
  t.end();
});

test("ObservableDictionary should react on adding", t => {
  const items = new ObservableDictionary<string, number>();
  items.items$.subscribe(value => {
    t.true(true);
    t.end();
  });

  items.add("test", 34);
});
