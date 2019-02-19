function userCard(index) {
	let operationTime = new Date().toLocaleString('uk-UA');
	const card = {
		key: index,
		balance: 100,
		transactionLimit: 100,
		historyLogs: []
	};
	function cardOperationLogs (oppType,credits,oppTime) {
		card.historyLogs.push({
			operationType: oppType,
			credits: credits,
			operationTime: oppTime
		});
	}
	function checkCreditsValidity(amount) {
		const minAmount = 0;
		return typeof amount === 'number' && 
			amount > minAmount;
	}
	return {
		getCardOptions() {
			return card;
		},
		takeCredits(amount) {
			if(checkCreditsValidity(amount)) {
				if(card.balance < amount) {
					console.error('You don\'t have enough money. Your current balance is ' + card.balance);
				} else {
					card.balance -= amount;
					cardOperationLogs('Withdrawal of credits',amount,operationTime);
				}
			} else {
				console.error('Invalid input amount');
			}
		},
		putCredits(amount) {
			if(checkCreditsValidity(amount)) {
				card.balance += amount;
				cardOperationLogs('Received credits',amount,operationTime);
			} else {
				console.error('Invalid input amount');
			}
		},
		setTransactionLimit(amount) {
			const minTransactionLimit = 0;
			if(typeof amount === 'number' && amount >= minTransactionLimit) {
				card.transactionLimit = amount;
				cardOperationLogs('Transaction limit change',amount,operationTime);
			} else {
				console.error('Invalid input transaction limit');
			}
		},
		transferCredits(amount,card) {
			if(checkCreditsValidity(amount)) {
				const tax = 0.005;
				let amountWithTaxes = amount + amount * tax;
				if (amountWithTaxes > card.balance) {
					console.error('You don\'t have enough money. Your current balance is ' + card.balance);
				} else if (amountWithTaxes > card.transactionLimit) {
					console.error('Your transaction limit don\'t allow you to make this operation.' + 
						'Your transaction limit is ' + card.transactionLimit);
				} else {
					this.takeCredits(amountWithTaxes);
					card.putCredits(amount);
				}
			} else {
				console.error('Invalid input amount');
			}
		}
	};
}
class UserAccount {
	constructor(name) {
		this.name = name;
		this.cards = [];
		this.cards_limit = 3;
	}
	addCard() {
		if(this.cards.length < this.cards_limit){
			this.cards.push(userCard(this.cards.length + 1));
		} else {
			console.error('You can\'t add more card (limit)!');
		}
	}
	getCardByKey(index) {
		return this.cards[index - 1];
	}
}
