import axios from 'axios';

async function getAllBugs() {
    const response = await axios.get('http://localhost:3000/bugs');
    const bugs = response.data
    return bugs;
}

async function saveBug(bugData){
    const response = await axios.post('http://localhost:3000/bugs', bugData)
    const newBug = response.data
    return newBug
}

const bugApi = {
    getAllBugs,
    saveBug
};

export default bugApi;