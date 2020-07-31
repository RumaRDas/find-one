import React, { useState, useEffect } from 'react';
import RecipeItem from './RecipeItem';
import Container from '../../components/Container';
import Axios from 'axios';
import './style.css';


const Recipies = () => {

    const [search, setSearch] = useState("chicken");
    const [recipes, setRecipes] = useState([]);

    const APP_ID = "5662a21c";
    const APP_KEY = "13f8fe2ab934ea2ac4076e4a44bce438";

    useEffect(() => {
        getRecipes();
    }, []);

    const getRecipes = async () => {
        const result = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);

        setRecipes(result.data.hits);

    };

    const onInputChange = (e) => {
        setSearch(e.target.value);
    }
    const searchClick = () => {
        getRecipes();
    }

    return (
        <Container>
            <div className=" content recipStyle">
                <div className="columns">
                    <div className="column is-7">
                        <h1 className="">
                            Find Your Reipies</h1>
                    </div>
                    <div className="columns is-gapless">
                        <div className="column is-8">
                            <input class="input is-hovered" type="text" id="search" placeholder="Search your Recipe..." value={search} onChange={onInputChange} />
                        </div>
                        <div className="column is-4">
                            <button className="submit-btn" onClick={searchClick}>Search</button>
                        </div>
                    </div>

                </div>
                <div className="columns">
                    <div className="column is-12">
                        <div className="columns is-multiline">
                            {recipes.map(recipe => (
                                <RecipeItem
                                    key={Math.random() * 100}
                                    name={recipe.recipe.label}
                                    image={recipe.recipe.image}
                                    ingredientLines={recipe.recipe.ingredientLines}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </Container >
    )
}

export default Recipies;


