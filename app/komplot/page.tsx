'use client';

import { useState } from "react";
import Component from "./component";

const Komplot = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const onRefresh = async () => {
        console.log('refresh');
    };

    return (
        <>
            <Component
                onRefresh={onRefresh}
                loading={loading}
            />
        </>
    );
};

export default Komplot;
