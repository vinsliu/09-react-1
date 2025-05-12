import { useParams } from "react-router";

const Category = () => {
  const { categoryId } = useParams();

  return (
    <div>
      <h1>{categoryId}</h1>
    </div>
  );
};

export default Category;
