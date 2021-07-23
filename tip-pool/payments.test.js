describe("Payments test", () => {
    beforeEach(() => {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
      });
      

it('should reflect current payment in allPayments object on submitPaymentInfo()', () => {

    submitPaymentInfo();

    expect(paymentId).toBe(1);
    expect(allPayments['payment' + paymentId].billAmt).toEqual('100');
    expect(allPayments['payment' + paymentId].tipAmt).toEqual('20');
    expect(allPayments['payment' + paymentId].tipPercent).toBe(20);
});

it('should return undefined with negative or empty inputs on createCurPayment()', () => {
    billAmtInput.value = -1;
    tipAmtInput.value = -1;

    createCurPayment();

    expect(paymentId).toBeFalsy();
    expect(createCurPayment()).toBeUndefined();
});

it('should take input value and append to paymentTbody with appropriate Id on appendPaymentTable()', () => {

    expect(paymentTbody.lastChild.id).toEqual('payment1');
})

it('should update summary table appropriately on updateSummary()', () => {
    
    expect(summaryTds[0].innerHTML).toEqual('$100');
    expect(summaryTds[1].innerHTML).toEqual('$20');
    expect(summaryTds[2].innerHTML).toEqual('20%');
});

afterEach(function() {
    paymentId = 0;
    billAmtInput.value = '';
    tipAmtInput.value = '';
  });

});
