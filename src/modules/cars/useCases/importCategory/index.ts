import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { ImportCategoryController } from "./ImportCaterogyController";

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);

const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController };