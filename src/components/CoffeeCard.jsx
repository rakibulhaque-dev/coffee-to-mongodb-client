import React from 'react';

const CoffeeCard = ({coffee}) => {
    const {_id, name, quantity, photo, supplier, taste} = coffee;
    return (
        <div className='p-8 border rounded-lg shadow-lg'>
            <img className='w-96' src={photo} alt="" />
            <p>Name: {name}</p>
            <p>Taste: {taste}</p>
            <p>Supplier: {supplier}</p>
            <p>Available: {quantity} pcs</p>
        </div>
    );
};

export default CoffeeCard;