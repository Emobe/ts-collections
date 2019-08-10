export interface Collection<T> {
    add(item: T): void;
    clear(): void;
    contains(item: T): boolean;
    remove(index: number): void;
}
