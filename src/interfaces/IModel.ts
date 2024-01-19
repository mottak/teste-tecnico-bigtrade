export default interface IModel<T> {
  create(obj: T): Promise<T>;
  getById(id: string): Promise<T | null>;
  update(id: string, obj: Partial<T>): Promise<T | null>;
  delete(id: string): Promise<void>;

}
