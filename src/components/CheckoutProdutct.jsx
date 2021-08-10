import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProdutct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
    const dispatch = useDispatch()
    const addItemToBasket = () => {
        const product = {
            id,
            title,
            price,
            description,
            category,
            image,
            hasPrime,
          };
          //sendint the product as an action to the REDUX store... the basket slice
          dispatch(addToBasket(product));
    }

    const removeItemFromBasket = () => {
          //remove the product as an action to the REDUX store... the basket slice
          dispatch(removeFromBasket({id}));
    }
  return (
    <div className="grid grid-cols-5 bg-white p-5">
      <Image src={image} height={200} width={200} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          <p>
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon key={i} className="h-5 text-yellow-500" />
              ))}
          </p>
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="CAD" />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https:links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className='flex flex-col space-y-2 my-auto jus'>
        <button onClick={addItemToBasket} className="button">
          Add to Cart
        </button>
        <button onClick={removeItemFromBasket} className="button">
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProdutct;
