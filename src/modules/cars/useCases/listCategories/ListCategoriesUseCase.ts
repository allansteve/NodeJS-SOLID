import { categoriesRoutes } from '../../../../routes/categories.routes';
import {ICategories} from '../../interfaces/ICategories'
import { Category } from '../../model/Category';
class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategories){}
  
  execute() : Category[] {
    const categories = this.categoriesRepository.list();

    return categories;
  
  }
}

export { ListCategoriesUseCase }