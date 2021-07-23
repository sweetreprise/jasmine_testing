describe("Helpers test", () => {
    beforeEach(() => {
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
      });

    it('should result in truthy payment totals after passing in valid inputs', () => {


        expect(sumPaymentTotal('billAmt')).toBeTruthy();
        expect(sumPaymentTotal('tipAmt')).toBeTruthy();
    })
      
    it('should calculate tip percentage', () => {

        expect(calculateTipPercent(100, 20)).toBe(20);
        
    });

    it('should append td to tr with a specific value on  appendTd(tr, value)', () => {

        expect(paymentTbody.lastChild.innerHTML).toEqual('<td>$100</td><td>$20</td><td>20%</td>');
    });


    afterEach(() => {
        allPayments = {};
        paymentId = 0;
        billAmtInput.value = '';
        tipAmtInput.value = '';
    });

});
