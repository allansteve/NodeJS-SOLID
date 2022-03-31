import { Specification } from "../model/Specification";


interface ICreateSpecificationDTO 
{
  name:string;
  description:string;
}

interface ISpecification {
  create({name,description}: ICreateSpecificationDTO):void;
  findByName(name:string):Specification;
}

export {ISpecification,ICreateSpecificationDTO}