import test from 'tape';
import Dictionary from '../src/Dictionary';
import { KeyPair } from '../src/KeyPair';

test('Dictionary constructor should initialise with items added', (t) => {
  const initial: [string, number][] = [
    ['hello', 1],
    ['bye', 2],
  ];
  const dictionary = new Dictionary<string, number>(initial);
  const actual = dictionary.Items;
  const expected = new Map(initial);
  t.deepEqual(actual, expected);
  t.end();
});

test('Dictionary.add(key, item) should add item to dictionary', (t) => {
  const dictionary = new Dictionary<string, number>();
  dictionary.add('hello', 2);
  const expected = 2;
  const actual = dictionary.get('hello');
  t.deepEqual(actual, expected);
  t.end();
});

test('Dictionary.add should throw error if key already exists', (t) => {
  const dictionary = new Dictionary<string, number>([['hello', 2]]);
  t.throws(() => dictionary.add('hello', 2));
  t.end();
});

test.skip('Dictionary.add(key, item) should emit an event with the current list of items', (t) => {
  t.plan(1);
  const dictionary = new Dictionary<number, boolean>();
  const item = [123, true];
  dictionary.on('add', (added) => {
    t.deepEqual(added, item);
  });
  dictionary.add(123, true);
});

test('Dictionary.remove should remove item', (t) => {
  const initial: [string, number][] = [
    ['test', 2],
    ['testing', 102],
    ['tested', 210934021930],
  ];
  const dictionary = new Dictionary<string, number>(initial);
  dictionary.remove('testing');
  const expected = new Map([
    ['test', 2],
    ['tested', 210934021930],
  ]);
  const actual = dictionary.Items;
  t.deepEqual(actual, expected);
  t.end();
});

test('Dictionary.containsKey(key) should return true or false depending on if key exists', (t) => {
  const initial: [string, number][] = [
    ['test', 2],
    ['testing', 3],
  ];
  const dictionary = new Dictionary<string, number>(initial);
  let actual = dictionary.containsKey('test');
  let expected = true;
  t.deepEqual(actual, expected, "Should return true because 'test' exists");
  actual = dictionary.containsKey('noKey');
  expected = false;
  t.deepEqual(actual, expected, "Should return false because 'noKey' does not exist");
  t.end();
});
