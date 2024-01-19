import { Response, Request } from 'express';
import IPost from '../interfaces/IPost';
import IPostService from '../interfaces/IPostService';

export default class PostController{
  private postService: IPostService<IPost>;

  constructor(postService: IPostService<IPost>) {
    this.postService = postService;
  }

  async create (req: Request, res: Response<IPost>): Promise<void>  {
    const { userId } = req.body

    const post: IPost = await this.postService.create({ ...req.body }, userId )
    res.status(201).json(post);
  };

  async getAll(req: Request, res: Response<IPost[]>): Promise<void>  {
    
    const posts: IPost[] = await this.postService.findAll();
    res.status(200).json(posts);
  }

  async getById(req: Request, res: Response<IPost>): Promise<void>  {
    const { id } = req.params;

    const post: IPost = await this.postService.findById(id);
    res.status(200).json(post);
  }

  async update(req: Request, res: Response<IPost>): Promise<void>  {
    const { id } = req.params;
    const { body } = req

    const post: IPost = await this.postService.update(id, body)
    res.status(200).json(post);
  }

  async delete(req: Request, res: Response): Promise<void>  {
    const { id } = req.params;

    await this.postService.delete(id);
    res.status(201).json({ message: 'Post deleted successfully'});
  }

}