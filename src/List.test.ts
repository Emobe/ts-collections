import test from "tape";
import { List } from "./List";

test("List constructor should initialise with items added", t => {
  const list = new List<string>(["hello", "there", "tape"]);
  const actual = list.Items;
  const expected = ["hello", "there", "tape"];
  t.deepEqual(actual, expected);
  t.end();
});

test("List.add(item) should add item to list", t => {
  const list = new List<string>();
  const item = "Hello";
  list.add(item);
  const expected = [item];
  const actual = list.Items;
  t.deepEqual(actual, expected);
  t.end();
});

test("List.remove(1) should remove item from second index", t => {
  const list = new List<string>(["first", "second", "third"]);
  list.remove(1);
  const expected = ["first", "third"];
  const actual = list.Items;
  t.deepEqual(actual, expected);
  t.end();
});

test("List.contains(item) should return true if item is in the list", t => {
  const numberList = new List<number>([1, 2, 3]);
  let actual = numberList.contains(2);
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
  const refList = new List<any>(items);
  actual = refList.contains(subject);
  t.deepEqual(actual, expected);
  t.end();
});

test("List.clear() should empty list of items", t => {
  const list = new List<number>([1, 2, 3, 4]);
  list.clear();
  const actual = list.Items;
  const expected: any[] = [];
  t.deepEqual(actual, expected);
  t.end();
});
