import { useForm } from "react-hook-form";
import CreateProductForm from "./createProductForm";

function CreateProduct() {
  const { register, handleSubmit } = useForm();

  return <CreateProductForm register={register} handleSubmit={handleSubmit} />;
}

export default CreateProduct;
