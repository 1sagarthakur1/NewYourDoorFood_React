


export async function getAllitem(){
    try {
        const response = await fetch(`http://localhost:8888/api/YourDoorFood/items/get_item`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const data = await response.json();
        return data;
        

    } catch (error) {
        console.log(error)
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
}

getAllitem();

