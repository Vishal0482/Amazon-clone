import { useState, useEffect } from 'react';
import { db } from '../firebase/config'
import { collection, getDocs } from "firebase/firestore";

const DataLoad = (collectionName, id, subCollection) => {
    const [data, setData] = useState([]);
    const getProducts = async () => {
        let response;
        if (id) {
            response = await getDocs(collection(db, collectionName, id, subCollection));
        }
        else {
            response = await getDocs(collection(db, collectionName));
        }
        let items = [];
        response.docs.forEach(doc => {
            items.push({ ...doc.data(), id: doc.id });
        })
        setData(items);
    };

    useEffect(() => {
        getProducts();
    }, [collectionName]);

    return { data }
}

export default DataLoad;
