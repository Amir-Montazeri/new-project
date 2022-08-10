import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CreateProductForm from "./createProductForm";

function CreateProduct() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  return (
    <CreateProductForm
      register={register}
      handleSubmit={handleSubmit}
      navigate={(path) => navigate(path)}
    />
  );
}

export default CreateProduct;
