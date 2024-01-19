export default interface IUserService<T> {
  create(obj: T): Promise<T>;
  findById(id: string): Promise<T>;
  update(id: string, obj: Partial<T>): Promise<T>;
  delete(id: string): Promise<void>;

}