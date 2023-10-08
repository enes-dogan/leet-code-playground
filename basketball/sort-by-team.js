// Sort the basketball fans by team name and print the result to the console.

// Example output:
// [
// { team: 'bulls', fans: [ 'Michael', 'Dwayne', 'Giannis', 'Dirk', 'Jerry', 'Scottie', 'Dennis' ] },
// ...
// ]

// Time complexity: O(n^2) needs to be improved.
const basketballFans = [
  { name: 'Julius', team: 'lakers' },
  { name: 'Wilt', team: 'cavs' },
  { name: 'Rick', team: 'lakers' },
  { name: 'Wiliam', team: 'cavs' },
  { name: 'John', team: 'lakers' },
  { name: 'Michael', team: 'bulls' },
  { name: 'Robert', team: 'bullets' },
  { name: 'David', team: 'celtics' },
  { name: 'Kevin', team: 'bullets' },
  { name: 'Chris', team: 'bulls' },
  { name: 'Anthony', team: 'celtics' },
  { name: 'Stephen', team: 'celtics' },
  { name: 'James', team: 'lakers' },
  { name: 'Dwayne', team: 'bulls' },
  { name: 'Derrick', team: 'bullets' },
  { name: 'Paul', team: 'celtics' },
  { name: 'Kawhi', team: 'cavs' },
  { name: 'Russell', team: 'celtics' },
  { name: 'Joel', team: 'bullets' },
  { name: 'Nikola', team: 'celtics' },
  { name: 'Luka', team: 'cavs' },
  { name: 'Giannis', team: 'bulls' },
  { name: 'Kobe', team: 'lakers' },
  { name: 'Magic', team: 'bullets' },
  { name: 'Larry', team: 'celtics' },
  { name: 'Shaquille', team: 'bullets' },
  { name: 'Tim', team: 'bulls' },
  { name: 'Karl', team: 'cavs' },
  { name: 'Dirk', team: 'bulls' },
  { name: 'Carmelo', team: 'cavs' },
  { name: 'Allen', team: 'celtics' },
  { name: 'Steve', team: 'lakers' },
  { name: 'Charles', team: 'cavs' },
  { name: 'Grant', team: 'bulls' },
  { name: 'Dominique', team: 'bullets' },
  { name: 'Kareem', team: 'lakers' },
  { name: 'Bill', team: 'bullets' },
  { name: 'Tracy', team: 'cavs' },
  { name: 'Jerry', team: 'bulls' },
  { name: 'Kevin', team: 'celtics' },
  { name: 'Scottie', team: 'bulls' },
  { name: 'Moses', team: 'cavs' },
  { name: 'Isiah', team: 'lakers' },
  { name: 'Dennis', team: 'bulls' },
  { name: 'Patrick', team: 'bullets' },
  { name: 'Reggie', team: 'lakers' },
  { name: 'David', team: 'cavs' },
  { name: 'Bill', team: 'lakers' },
  { name: 'Hakeem', team: 'celtics' },
  { name: 'John', team: 'bullets' },
];

function getUniqueTeams(fans) {
  return fans
    .map( fan => fan.team)
    .filter((team, index, teams) => teams.indexOf(team) === index);
}

function getTeamsWithFans(fans) {
  let teamsWithFans = [];
  const uniqueTeams = getUniqueTeams(fans);

  uniqueTeams.forEach( uniqueTeam => {
    const namesOfUniqeTeamSupporter = fans
      .filter( fan => fan.team === uniqueTeam)
      .map( fan => fan.name);

    teamsWithFans.push({ team: uniqueTeam, fans: namesOfUniqeTeamSupporter });
  });

  return teamsWithFans;
}

const teamsWithFans = getTeamsWithFans(basketballFans);
console.log(teamsWithFans);