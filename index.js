function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}


function getAllTeams() {
  const game = gameObject();
  return Object.values(game);
}

function getAllPlayers() {
  const players = [];
  getAllTeams().forEach((team) => {
    Object.entries(team.players).forEach(([playerName, stats]) => {
      players.push({ playerName, stats });
    });
  });
  return players;
}

function findPlayer(playerName) {
  return getAllPlayers().find((p) => p.playerName === playerName);
}

function findTeam(teamName) {
  return getAllTeams().find((t) => t.teamName === teamName);
}



function numPointsScored(playerName) {
  const player = findPlayer(playerName);
  return player ? player.stats.points : undefined;
}

function shoeSize(playerName) {
  const player = findPlayer(playerName);
  return player ? player.stats.shoe : undefined;
}




function teamColors(teamName) {
  const team = findTeam(teamName);
  return team ? team.colors : undefined;
}

function teamNames() {
  return getAllTeams().map((team) => team.teamName);
}

  


function playerNumbers(teamName) {
  const team = findTeam(teamName);
  if (!team) return undefined;
  return Object.values(team.players).map((stats) => stats.number);
}

function playerStats(playerName) {
  const player = findPlayer(playerName);
  return player ? Object.assign({}, player.stats) : undefined;
}



function bigShoeRebounds() {
  const players = getAllPlayers();
  let biggest = players[0];
  players.forEach((p) => {
    if (p.stats.shoe > biggest.stats.shoe) biggest = p;
  });
  return biggest.stats.rebounds;
}



function mostPointsScored() {
  const players = getAllPlayers();
  let top = players[0];
  players.forEach((p) => {
    if (p.stats.points > top.stats.points) top = p;
  });
  return top.playerName;
}

function winningTeam() {
  const totals = getAllTeams().map((team) => {
    const totalPoints = Object.values(team.players).reduce(
      (sum, s) => sum + s.points,
      0
    );
    return { teamName: team.teamName, totalPoints };
  });
  totals.sort((a, b) => b.totalPoints - a.totalPoints);
  return totals[0].teamName;
}

function playerWithLongestName() {
  const players = getAllPlayers();
  let longest = players[0];
  players.forEach((p) => {
    if (p.playerName.length > longest.playerName.length) longest = p;
  });
  return longest.playerName;
}




module.exports = {
  gameObject,
  numPointsScored,
  shoeSize,
  teamColors,
  teamNames,
  playerNumbers,
  playerStats,
  bigShoeRebounds,
  mostPointsScored,
  winningTeam,
  playerWithLongestName,
};