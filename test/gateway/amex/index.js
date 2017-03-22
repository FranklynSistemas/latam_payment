var authorizeSuite = require('./authorize');
var createTokenSuite = require('./createToken');
var deleteTokenSuite = require('./deleteToken');
var getTokenSuite = require('./getToken');
var getGatewayInfoSuite = require('./getGatewayInfo');
var voidSuite = require('./void');

module.exports = function describeAmex() {
	describe('getGatewayInfo', getGatewayInfoSuite);
	describe('createToken', createTokenSuite);
	describe('deleteToken', deleteTokenSuite);
	describe('getToken', getTokenSuite);
	describe('authorize', authorizeSuite);
	describe('void', voidSuite);
};
