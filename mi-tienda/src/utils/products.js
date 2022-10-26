import { getFirestore , doc , getDoc, collection, getDocs, where ,query } from 'firebase/firestore';


export const getAllProducts = () =>{
    const database = getFirestore();
    const collectionReference = collection(database, 'items');
    return getDocs(collectionReference)
        .then(snapshot => {
            const list = snapshot
            .docs
            .map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
        return list;
        })
        .catch(error=>console.warn(error));
};

export const getProduct = (id) =>{

    const database = getFirestore();
    
    const itemReference = doc(database, 'items' , id);
    return getDoc(itemReference)
    .then(snapshot => {
        if(snapshot.exists()) {
            const item = {
            id: snapshot.id,
            ...snapshot.data()
            };
            return item;
        }
    })
};

export const getProductsByCategory = (categoryId) =>{
    //OBTENEMOS LA BASE DE DATOS
    const database = getFirestore();
    //obtenemos la referenciaa la collection
    const collectionReference = collection(database, 'items');
    //crear query/consulta con el filtro qe queremos aplicar
    const collectionQuerry = query(collectionReference , where('category', '==' ,categoryId))
    //obtenemos los datos desde firestore
    return getDocs(collectionQuerry)
        .then(snapshot => {
            const list = snapshot
            .docs
            .map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
        return list;
        })
        .catch(error=>console.warn(error));
};


const products = [
    
    {
    title:'liquido 1', 
    
    category:'liquido' , 
    
    description:'liquido de vainilla', 
    
    price:150 , 
    
    pictureUrl:'https://www.boutiquedelvapeo.com/4186-large_default/vanilla-biscuit-50ml-essential-vape-.jpg' , 
    
    stock: 10 
},
    
] 

/* export const createAllProducts = async () => {
    try{
        
        const database = getFirestore();

        const collectionReference = collection(database, 'items');

        for(let i=0 ; i<products.length; i++) {
            console.log(products[i]);
            const snapshot = await addDoc(collectionReference,products[i])
        }
        }catch(error){
            console.warn(error);
        }
    } */
