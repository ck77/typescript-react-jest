test('test', () => {

    const myMockFn = jest
        .fn()
        .mockImplementation(scalar => 42 + scalar)
        .mockReturnValue(777)
        .mockName('add42');


    // //expect(myMockFn()).toBe(NaN);
    //expect(myMockFn()).toBe(777);
    expect(myMockFn(1)).toBe(43);


    // const myMock = jest.fn();
    // // console.log(myMock());
    // // > undefined

    // myMock.mockReturnValue(777);

    // expect(myMock()).toBe(777);
    // //console.log(myMock(), myMock(), myMock(), myMock());
    // // > 10, 'x', true, true

});