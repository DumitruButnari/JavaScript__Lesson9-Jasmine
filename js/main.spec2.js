describe("Testing weekFn() Function", () => {
  it("Test weekFn(1) Function return 'Понедельник'", () => {
    expect(weekFn(1)).toBe("Понедельник");
  });

  it("Test weekFn(3) Function return 'Среда'", () => {
    expect(weekFn(3)).toBe("Среда");
  });

  it("Test weekFn(7) Function return 'Воскресенье'", () => {
    expect(weekFn(7)).toBe("Воскресенье");
  });

  it("Test weekFn() Function with a string or a number not in 0...7 return null", () => {
    expect(weekFn(1.5)).toBe(null);
    expect(weekFn(9)).toBe(null);
    expect(weekFn("2")).toBe(null);
  });
});
