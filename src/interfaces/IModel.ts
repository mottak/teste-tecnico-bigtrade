export default interface IModel<T> {
  create(obj: T): Promise<T>;
  getById(id: string): Promise<T | null>;
  //update(id: string): Promise<T>;
  //delete(id: string): Promise<void>;

}
