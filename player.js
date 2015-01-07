var playerId = 0
var fullName = 1
var firstName = 2
var lastName = 3
var team = 4
var games = 5
var minutesPerGame = 6
var pointsPerGame = 7
var pointsDrive = 8
var fieldGoalPercentageDrive = 9
var pointsClose = 10
var fieldGoalPercentageClose = 11
var pointsCatchAndShoot = 12
var fieldGoalPercentageCatchAndShoot = 13
var pointsPullUp = 14
var fieldGoalPercentagePullUp = 15
var fieldGoalsDrive = 16
var fieldGoalsClose = 17
var fieldGoalsCatchAndShoot = 18
var fieldGoalsPullUp = 19
var effectiveFieldGoalPercentage = 20

function playerShooting(shootingArray) {

	this.points = shootingArray[pointsPerGame]
	this.pointsDrive = shootingArray[pointsDrive]
	this.fieldGoalPercentageDrive = shootingArray[fieldGoalPercentageDrive]
	this.pointsClose = shootingArray[pointsClose]
	this.fieldGoalPercentageClose = shootingArray[fieldGoalPercentageClose]
	this.pointsCatchAndShoot = shootingArray[pointsCatchAndShoot]
	this.fieldGoalPercentageCatchAndShoot = shootingArray[fieldGoalPercentageCatchAndShoot]
	this.pointsPullUp = shootingArray[pointsPullUp]
	this.fieldGoalPercentagePullUp = shootingArray[fieldGoalPercentagePullUp]
	this.fieldGoalsDrive = shootingArray[fieldGoalsDrive]
	this.fieldGoalsClose = shootingArray[fieldGoalsClose]
	this.fieldGoalsCatchAndShoot = shootingArray[fieldGoalsCatchAndShoot]
	this.fieldGoalsPullUp = shootingArray[fieldGoalsPullUp]
	this.effectiveFieldGoalPercentage = shootingArray[effectiveFieldGoalPercentage]
	this.totalFieldGoals = this.fieldGoalsDrive + this.fieldGoalsClose + this.fieldGoalsCatchAndShoot + this.fieldGoalsPullUp	
}


function player(shootingArray, reboundingArray) {
	for(var i = 0; i < shootingArray.length; i++)
	{
		if(shootingArray[i] == null)
		{
			shootingArray[i] = 0
		}
	}
	this.id = shootingArray[playerId]
	this.firstName = shootingArray[firstName]
	this.lastName = shootingArray[lastName]
	this.team = shootingArray[team]
	this.games = shootingArray[games]
	this.minutes = shootingArray[minutesPerGame]
	this.shooting = new playerShooting(shootingArray)
} 