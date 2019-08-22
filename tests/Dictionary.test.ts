import test from "tape";
import { Dictionary } from "../src/Dictionary";
import { KeyPair } from "../src/KeyPair";

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
  let expected = 2;
  const actual = dictionary.get("hello");
  t.deepEqual(actual, expected);
  t.end();
});

test("Dictionary.add should throw error if key already exists", t => {
  const dictionary = new Dictionary<number>({ hello: 1 });
  t.throws(() => dictionary.add("hello", 2));
  t.end();
});

test("Dictionary.remove should remove item", t => {
  const initial: KeyPair<number> = {
    test: 2,
    testing: 102,
    tested: 210934021930
  };
  const dictionary = new Dictionary<number>(initial);
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
