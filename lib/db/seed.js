const fetch = require("node-fetch");

const knex = require('knex')({
  client: 'mysql',
  connection: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'tobaksvara.2019',
      database: 'users'
  }
});

seedDbWithRandomUsers(150);

async function seedDbWithRandomUsers(numberOfUsers = 150) {
  const randomUsers = await getRandomPeople(numberOfUsers);
  const seedData = await formatSeedData(randomUsers);

  await seedDb(seedData);
}

async function getRandomPeople(numberOfUsers) {
  const url = `http://randomuser.me/api/?results=${numberOfUsers}`;

  console.log("\ncalling randomuser.me API...");

  const response = await fetch(url);
  const randomPeople = await response.json();

  return randomPeople;
}

async function formatSeedData(jsonData) {
  let seedData = [];

  console.log("parsing started...");

  for (let person of jsonData.results) {
    const anotherOne = {
      UserName: `${person.login.username}`,
      UserEmail: `${person.email}`,
      Password: `${person.login.password}`,
    };

    seedData.push(anotherOne);
  }

  console.log("parsing completed.");

  return seedData;
}

async function seedDb(data) {
  await knex("persons").insert(data);
  console.log("\n✅ database seeded");

  await knex.destroy();
}