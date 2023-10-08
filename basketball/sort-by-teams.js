const fans = [
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

function filterByTeam() {
  const allTeams = fans.map((arrElement) => arrElement.team);

  const filteredTeams = allTeams.filter((team, index, array) => {
    return array.indexOf(team) === index;
  });

  filteredTeams.forEach((uniqueTeam) => {
    const supporters = fans
      .map((arrElement) => {
        if (arrElement.team === uniqueTeam) {
          return arrElement.name;
        } else {
          return false;
        }
      })
      .filter(Boolean);

    const result = {
      team: uniqueTeam,
      supporters,
    };
    console.log(result);
  });
}

filterByTeam();
