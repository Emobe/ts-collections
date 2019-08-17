import test from "tape";
import { Dictionary } from "../../src/Dictionary/Dictionary";
import { KeyPair } from "../../src/models/KeyPair";

test("Dictionary constructor should initialise with items added", t => {
  const expected = { test: 3 };
  const dictionary = new Dictionary<number>(expected);
  const actual = dictionary.Items;
  t.deepEqual(actual, expected);
  t.end();
});

test("Dictionary.add(key, item) should add item to dictionary", t => {
  const dictionary = new Dictionary<number>();
  dictionary.add("hello", 2);
  const expected = { hello: 2 };
  const actual = dictionary.Items;
  t.deepEqual(actual, expected);
  t.end();
});

test("Dictionary.remove(1) should remove item", t => {
  const initial: KeyPair<number>[] = [
    { test: 2 },
    { testing: 102 },
    { tested: 210934021930 }
  ];
  const dictionary = new Dictionary<number>(...initial);
  dictionary.remove("testing");
  const expected = {
    test: 2,
    tested: 210934021930
  };
  const actual = dictionary.Items;
  t.deepEqual(actual, expected);
  t.end();
});

test("Dictionary.containsKey(key) should return true or false depending on if key exists", t => {
  const initial = {
    test: 2,
    testing: 3
  };
  const dictionary = new Dictionary<number>(initial);
  let actual = dictionary.containsKey("test");
  let expected = true;
  t.deepEqual(actual, expected, "Should return true because 'test' exists");
  actual = dictionary.containsKey("noKey");
  expected = false;
  t.deepEqual(
    actual,
    expected,
    "Should return false because 'noKey' does not exist"
  );
  t.end();
});

test("Dictionary.containsKey(key) should return true or false depending on if key exists", t => {
  const initial = {
    test: 2,
    testing: 3
  };
  const dictionary = new Dictionary<number>(initial);
  let actual = dictionary.containsValue(2);
  let expected = true;
  t.deepEqual(actual, expected, "Should return true because 'test' exists");
  actual = dictionary.containsValue(123123);
  expected = false;
  t.deepEqual(
    actual,
    expected,
    "Should return false because 'noKey' does not exist"
  );
  t.end();
});

//
//test("Dictionary.contains(item) should return true if item is in the dictionary", t => {
//  const numberDictionary = new Dictionary<number>([1, 2, 3]);
//  let actual = numberDictionary.contains(2);
//  const expected = true;
//  t.deepEqual(actual, expected);
//
//  //Reference test
//  const items = [
//    {
//      name: "Mr Test",
//      street: "Test Street"
//    },
//    {
//      name: "Miss Test",
//      street: "Tape Street"
//    }
//  ];
//  const subject = items[1];
//  const refDictionary = new Dictionary<any>(items);
//  actual = refDictionary.contains(subject);
//  t.deepEqual(actual, expected);
//  t.end();
//});
//
//test("Dictionary.clear() should empty dictionary of items", t => {
//  const dictionary = new Dictionary<number>([1, 2, 3, 4]);
//  dictionary.clear();
//  const actual = dictionary.Items;
//  const expected: any[] = [];
//  t.deepEqual(actual, expected);
//  t.end();
//});
