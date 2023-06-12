import { useState, useEffect } from 'react'
import "../assets/css/blog.css"
import { buscar } from '../API/api'
import ListCategorias from '../componentes/ListCategorias'
import ListPosts from '../componentes/ListPosts'
import SubCategoria from './SubCategorias'
import { useParams, Routes, Route, Link, useResolvedPath } from 'react-router-dom'

const Categoria = () => {

    const [ subcategorias, setSubcategorias ] = useState( [] );
    const { id } = useParams() ;

    const url = useResolvedPath("").pathname
    
    useEffect( () => {
        buscar(`/categorias?id=${ id }`, ( response ) => {
            setSubcategorias( response[0].subcategorias )
        })
    }, [id])

    return (
        <>
            <div className="container">
                <h2 className="title-page">Pet Noticias</h2>
            </div>
            <ListCategorias />
            <ul className='category-list container flex'>
                {
                    subcategorias.map( subcategoria => (
                        <li className={ `category-list__category category-list__category--${ id }` } key={ subcategoria }>
                            <Link to={`${ url }/${ subcategoria }`}>
                                { subcategoria }
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Routes>
                <Route path='/' element={ <ListPosts url={ `/posts?categoria=${ id }`} /> } />
                <Route path='/:subcategoria' element={<SubCategoria />} />                
            </Routes>
            
        </>
    )
}

export default Categoria


/*
En react al usar la paqueteria de React Router Dom, podemos generar no solo rutas de forma directa
en nuestro archivo APP.js sino tambien podremos anidar rutas en otros elementos al llamar a la pauqeteria
al elemento y definir su orden:
    Routes 
        Route
Asi podemos extender las funcionalidades hasta donde necesitemos.

*/