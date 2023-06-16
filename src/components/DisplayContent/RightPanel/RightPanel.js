import React, {useState, useEffect} from 'react'
import './RightPanel.css'
import Product from './Product/Product'

function RightPanel() {
    const [listOfProducts, setListOfProducts] = useState([]);

    useEffect(() => {
        // api call
        let list = [
            {name: "iPhone11", rating: 4, ratingCount: 35000, price: 50999, image:"https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/71w3oJ7aWyL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1681641021702"},
            {name: "iPhone12", rating: 5, ratingCount: 45000, price: 40999, image:"https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/71i2XhHU3pL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1681641021264"},
            {name: "iPhone13", rating: 3.5, ratingCount: 55000, price: 30999, image:"https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1681641021282"},
            {name: "iPhone14", rating: 4.5, ratingCount: 65000, price: 20999, image:"https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65___1_.webp?updatedAt=1681641021616"},
            {name: "iPhone15", rating: 4.5, ratingCount: 55000, price: 30999, image:"https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/71ZOtNdaZCL._AC_UL640_FMwebp_QL65_.webp?updatedAt=1681641021282"},
            {name: "iPhone16", rating: 4.5, ratingCount: 65000, price: 20999, image:"https://ik.imagekit.io/gaganEcomm/amazon-image/mobiles/51PuFBgBK4L._AC_UL640_FMwebp_QL65___1_.webp?updatedAt=1681641021616"},
        ]

        setListOfProducts(list);
    }, [])
     
  return (
    <div className="rightSide__main">
        { listOfProducts.map((product, index) => (
            <Product key={index} prod={product}/>
        ))}
        
    </div>
  )
}

export default RightPanel