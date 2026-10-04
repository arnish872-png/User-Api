const API_URL = "https://fakestoreapi.noksha.dev/api/users"


let users = []
const userFetch = async()=>{
    try {
        const response = await fetch(API_URL)
        let data = await response.json()
        if (!response.ok) {
            throw new Error("api error")
        }
        console.log(data.data);
        displayUser(data.data)
        users = data.data
        
    } catch (error) {
        console.log(error,"error")
    }
}

const displayUser = async (user) => {
    user.map((v)=>{
        console.log(v);
        
    })
}
userFetch()