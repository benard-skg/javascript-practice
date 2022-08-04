const { readFileSync, writeFileSync } = require('fs');

const wf = writeFileSync('./goal-scorers.txt', 'T.Gabuza = 35');

const topGoalScorer = readFileSync('./goal-scorers.txt', 'utf8');

module.exports = { 
	topGoalScorer,
};
