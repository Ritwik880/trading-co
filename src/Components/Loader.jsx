// Loader.js

import React from 'react';
import { HashLoader } from 'react-spinners';
const Loader = () => {
    return (
        <section className='loader-spinner'>
                <HashLoader color="#36d7b7" size={100} />
        </section>
    );
};

export default Loader;
