export default interface IService<T> {
  create(obj: T): Promise<T>;
  //findById(id: string): Promise<T>;
  //update(id: string): Promise<T>;
  //delete(id: string): Promise<void>;

}