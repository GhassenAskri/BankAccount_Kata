const account = {balance: 0, deposit :(moneyAmount) => account.balance += moneyAmount};





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
});
