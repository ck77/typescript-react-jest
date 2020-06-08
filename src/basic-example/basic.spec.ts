test('test', () => {

    const myMockFn = jest
        .fn()
        .mockImplementation(scalar => 42 + scalar)   // replace by mockReturnValue(777)
        .mockReturnValue(777)
        .mockName('add42');


    // //expect(myMockFn()).toBe(NaN);
    //expect(myMockFn()).toBe(777);
    expect(myMockFn(1, 2, 3)).toBe(777);


    // const myMock = jest.fn();
    // // console.log(myMock());
    // // > undefined

    // myMock.mockReturnValue(777);

    // expect(myMock()).toBe(777);
    // //console.log(myMock(), myMock(), myMock(), myMock());
    // // > 10, 'x', true, true

});