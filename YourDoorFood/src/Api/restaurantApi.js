
export async function getRestaurantByitemID(){
    try {
        const response = await fetch(`http://localhost:8888/api/YourDoorFood/restaurants/item/13`)

        const data = await response.json();
        console.log(data)
        

    } catch (error) {
        // console.log(error)
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
}

getRestaurantByitemID()