import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

function GifExpertApp() {

    const [categories, setCategories] = useState(['One Punch']);

    const handleAdd = () => {
        //setCategories([...categories, 'Spiderman'])
        setCategories((cats) => {
            return [...cats, 'Hi']

        })

    }

    console.log(categories)


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map((category) => {
                    return <GifGrid
                        key={ category }
                        category={category}
                    /> //<li key={ category }>{ category }</li>
                })}
            </ol>
        </>
    );
}

export default GifExpertApp;
