import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@heroui/react';

function NotFound() {
    const location = useLocation();

    return (
        <div className="container mx-auto px-4 py-16 text-center">
            <p className="text-6xl font-extrabold text-default-400 mb-4">404</p>
            <h1 className="text-2xl font-bold mb-2">Fant ikke siden</h1>
            <p className="text-default-500 mb-1">
                Adressen <code className="bg-content2 px-1 rounded text-sm">{location.pathname}</code> finnes ikke.
            </p>
            <p className="text-default-500 mb-6">
                Lenken kan være feilstavet, eller siden kan være flyttet.
            </p>
            <div className="flex gap-4 justify-center">
                <Button as={Link} to="/" color="primary">Til forsiden</Button>
                <Button as={Link} to="/emner" variant="bordered">Se alle emner</Button>
            </div>
        </div>
    );
}

export default NotFound;
