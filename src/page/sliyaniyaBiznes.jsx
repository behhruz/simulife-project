import React from 'react';

const SliyanieBiznesovPage = ({ businesses }) => {
    return (
        <div>
            <h2>Слияние бизнесов</h2>
            <p>У вас {businesses.length} бизнесов во владении.</p>
            <ul>
                {businesses.map((business) => (
                    <li key={business.id}>
                        {business.name} - {business.cost}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SliyanieBiznesovPage;
