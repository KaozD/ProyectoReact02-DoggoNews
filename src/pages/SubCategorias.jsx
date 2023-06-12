import { useParams } from "react-router-dom";
import ListPosts from "../componentes/ListPosts";

const SubCategoria = () => {
    const { subcategoria } = useParams();
    return (
        <ListPosts url={ `/posts?subcategoria=${ subcategoria }` } />
    )
} 

export default SubCategoria