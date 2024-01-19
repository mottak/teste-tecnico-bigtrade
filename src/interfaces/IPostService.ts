export default interface IPostService<T> {
  create(obj: T, userId: string): Promise<T>;
  findAll(): Promise<T[]>;
  findById(id: string): Promise<T>;
  update(id: string, obj: Partial<T>): Promise<T>;
  delete(id: string): Promise<void>;

}