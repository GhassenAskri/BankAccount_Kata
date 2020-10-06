const account = {
    balance: 0,
    deposit: (moneyAmount) => {
        if(moneyAmount == 0) {
            return "Nothing to deposit"
        }
        if (moneyAmount < 0.01){
            return "Deposit must be superior to €0.01"
        }
        return account.balance += moneyAmount
    }
};

describe('Test our  test tool JEST', () => {
    test('if 2=2 = true ', () => {
        expect(2 == 2).toStrictEqual(true)
    });
});

describe('Deposit money from a customer to his account', () => {
    test('if a customer deposit money to his account otherwise ' +
        'his account balance will increase by the amount of the deposit', () => {
        expect(account.deposit(1)).toStrictEqual(1)
    });
    test('if a customer deposit money equal to zero to his account otherwise ' +
        'his account balance will not increase by the amount of the deposit', () => {
        expect(account.deposit(0)).toStrictEqual("Nothing to deposit")
    });
    test('if a customer deposit money less than 0.01 to his account otherwise ' +
        'his account balance will not increase by the amount of the deposit', () => {
        expect(account.deposit(0.001)).toStrictEqual("Deposit must be superior to €0.01")
    });
});
describe('withdraw money from a customer account ', () => {
    test('if a customer take a withdraw otherwise ' +
        'his account balance will decrease by the amount of the withdraw', () => {
        expect(account.deposit(1)).toStrictEqual(-1)
    });

});

