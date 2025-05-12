import { useNavigate, useParams } from "react-router";

const Category = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const handleReturnToHome = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={handleReturnToHome} className="btn btn-dark">
        Retour à la page d'accueil
      </button>
      <h1>{categoryId}</h1>
    </div>
  );
};

export default Category;
