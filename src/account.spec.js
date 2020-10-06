describe('Test our  test tool JEST', () => {
    test('if 2=2 = true ', () => {
        expect(2 == 2).toStrictEqual(true)
    });
});

var account = {balance : 0};

const deposit = (moneyAmount) => account.balance += moneyAmount;


describe('Deposit money from a customer to his account', () => {
    test('if a customer deposit money to his account otherwise ' +
        'his account balance will increase by the amount of the deposit',() => {
            expect(deposit(1)).toStrictEqual( 1)
        });
});
