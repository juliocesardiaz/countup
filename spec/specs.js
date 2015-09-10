describe('multipleCounter', function(){
  it("Count up to 10 by multiples of 1", function(){
    expect(multipleCounter(1, 10)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("Count up to 200 by multiples of 23", function(){
    expect(multipleCounter(23, 200)).to.eql([23, 46, 69, 92, 115, 138, 161, 184]);
  });
});
