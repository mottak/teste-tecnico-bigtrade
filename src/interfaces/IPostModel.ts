export default interface IPostModel<T> {
  create(obj: T): Promise<T>;
  getAll(): Promise<T[]>;
  getById(id: string): Promise<T | null>;
  update(id: string, obj: Partial<T>): Promise<T | null>;
  delete(id: string): Promise<void>;

}
