import React from 'react';
import Header from './Header';
import MainSlide from './MainSlide';
import MainTitle from './MainTitle';
import ProductList from './ProductList';

function Page_Main() {
    return (
        <div>
            <Header />
            <MainSlide />
            <MainTitle />
            <ProductList />
        </div>
    );
}
export default Page_Main;