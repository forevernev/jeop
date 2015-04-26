if (Meteor.isServer){

	Accounts.config({
		sendVerificationEmail: false,
		forbidClientAccountCreation: false,
		loginExpirationInDays: 1
	});

	Accounts.onCreateUser(function(options, user) {
		user.currentRoom = options.currentRoom;
		return user;
	})
}