import test from "tape";
import { List } from "../src/List";

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

test("List.insert(index, item) should insert item at index", t => {
  const list = new List<number>([1, 2, 3, 2, 4]);
  list.insert(2, 100);
  const expected = [1, 2, 100, 3, 2, 4];
  const actual = list.Items;
  t.deepEqual(actual, expected);
  t.end();
});

test("List.remove(item) should remove first occurance of item", t => {
  const list = new List<number>([1, 2, 3, 2, 4]);
  list.remove(2);
  const expected = [1, 3, 2, 4];
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

test("List should be iterable", t => {
  const list = new List<number>([1, 2, 3, 4]);
  const expected = [1, 2, 3, 4];
  const actual = [];
  for (const i of list) {
    actual.push(i);
  }
  t.deepEqual(actual, expected);
  t.end();
});
