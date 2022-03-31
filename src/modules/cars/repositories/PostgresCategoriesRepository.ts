import { Category } from "../model/Category";
import { ICategories,ICreateCategoryDTO } from "../interfaces/ICategories";


class PostgresCategoriesRepository implements ICategories {
  findByName(name: string): Category {
    console.log(name)
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({name, description} : ICreateCategoryDTO): void {
    console.log(name,description);
  }

}

export { PostgresCategoriesRepository }