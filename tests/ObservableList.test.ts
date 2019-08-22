import test from "tape";
import { ObservableList } from "../src/ObservableList";

//TODO test subscribe

test("ObservableList constructor should initialise with items added", t => {
  const list = new ObservableList<string>(["hello", "there", "tape"]);
  const actual = list.asArray;
  const expected = ["hello", "there", "tape"];
  t.deepEqual(actual, expected);
  t.end();
});

test("ObservableList.add(item) should add item to list", t => {
  const list = new ObservableList<string>();
  const item = "Hello";
  list.add(item);
  const expected = [item];
  const actual = list.asArray;
  t.deepEqual(actual, expected);
  t.end();
});

test("ObservableList.remove(1) should remove item from second index", t => {
  const list = new ObservableList<string>(["first", "second", "third"]);
  list.remove(1);
  const expected = ["first", "third"];
  const actual = list.asArray;
  t.deepEqual(actual, expected);
  t.end();
});

test("ObservableList.contains(item) should return true if item is in the list", t => {
  const numberObservableList = new ObservableList<number>([1, 2, 3]);
  let actual = numberObservableList.contains(2);
  const expected = true;
  t.deepEqual(actual, expected);

  //Reference test
  const items = [
    {
      name: "Mr Test",
      street: "Test Street"
    },
    {
      name: "Miss Test",
      street: "Tape Street"
    }
  ];
  const subject = items[1];
  const refObservableList = new ObservableList<any>(items);
  actual = refObservableList.contains(subject);
  t.deepEqual(actual, expected);
  t.end();
});

test("ObservableList.clear() should empty list of items", t => {
  const list = new ObservableList<number>([1, 2, 3, 4]);
  list.clear();
  const actual = list.asArray;
  const expected: any[] = [];
  t.deepEqual(actual, expected);
  t.end();
});
