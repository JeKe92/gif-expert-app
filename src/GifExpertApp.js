import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = []}) => {

    const [categories, setCategories] = useState( defaultCategories );

    return (
        <>
            <header>
                <h2 className="header-title">GifExpertApp</h2>
                <AddCategory setCategories={ setCategories }/>
                <hr /> 
            </header>
            <section>
                    {
                        categories.map( category => 
                        <GifGrid 
                            key={category}
                            category={category}
                        />)
                    }
            </section>
        </>
    )
}
