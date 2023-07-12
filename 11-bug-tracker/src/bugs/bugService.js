import bugApi from './bugApi';

function getAllBugs() {
    return bugApi.getAllBugs()
}
function saveBug(newBugName){
        const newBugData = {
        id: 0,
        name: newBugName,
        isClosed: false,
        createdAt: new Date()
    };
    return bugApi.saveBug(newBugData);
}
const bugService = {
    getAllBugs,
    saveBug
}
export default bugService;