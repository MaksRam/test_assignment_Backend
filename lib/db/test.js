import axios from 'axios';

async function getRandomPeople() {
    const url = `http://randomuser.me/api/?results=5`;
  
    const res = await axios.get(url)
  
    console.log("\ncalling randomuser.me API...");
    console.log(res);
  
    return res;
  }

  console.log(getRandomPeople())