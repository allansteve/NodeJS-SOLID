import { Category } from "../model/Category";


interface ICreateCategoryDTO {
  name:string;
  description: string;
}

interface ICategories {
  findByName(name: string): Category;
  list(): Category[];
  create({name, description}: ICreateCategoryDTO): void;
}

export {ICategories,ICreateCategoryDTO}