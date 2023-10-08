const guysWithTeam = [
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

// Group the objects by their team property
const groupedByTeam = guysWithTeam.reduce((acc, obj) => {
  const key = obj.team;
  if (!acc[key]) {
    acc[key] = { team: key, name: [] };
  }
  acc[key].name.push(obj.name);
  return acc;
}, {});

// Map the grouped result to the desired format
const groupedArray = Object.values(groupedByTeam);
console.log(groupedArray);

// Console
//! [
//?   { team: 'lakers', name: ['Enver', 'Enes'] },
//*   { team: 'cavs', name: ['Muhammet', 'Umut'] },
//! ];

//TODO CHAT GPT
/*

  Group the objects by their team property
  const groupedByTeam = guysWithTeam.reduce((acc, guy) => {
    acc[guy.team] = acc[guy.team] || [];
    acc[guy.team].push(guy.name);
    return acc;
  }, {});

   Map the grouped result to the desired format
  const result = Object.entries(groupedByTeam).map(([team, names]) => ({
    team,
    name: names,
  }));

  console.log(result);

   Console
  [
    { team: 'lakers', name: ['Enver', 'Enes'] },
    { team: 'cavs', name: ['Muhammet', 'Umut'] },
  ];
  */
