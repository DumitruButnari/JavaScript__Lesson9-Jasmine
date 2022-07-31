describe("Testing ageClassification() Function", () => {
  it("Test ageClassification() Function with negative number return null", () => {
    expect(ageClassification(-1)).toBe(null);
    expect(ageClassification(-30)).toBe(null);
  });

  it("Test ageClassification(0..24) returns 'детский возраст'", () => {
    expect(ageClassification(1)).toBe("детский возраст");
    expect(ageClassification(24)).toBe("детский возраст");
  });

  it("Test ageClassification(24+..44) returns 'молодой возраст'", () => {
    expect(ageClassification(24.01)).toBe("молодой возраст");
    expect(ageClassification(44)).toBe("молодой возраст");
  });

  it("Test ageClassification(44+..65) returns 'средний возраст'", () => {
    expect(ageClassification(44.01)).toBe("средний возраст");
    expect(ageClassification(65)).toBe("средний возраст");
  });

  it("Test ageClassification(65+..75) returns 'пожилой возраст'", () => {
    expect(ageClassification(65.01)).toBe("пожилой возраст");
    expect(ageClassification(75)).toBe("пожилой возраст");
  });

  it("Test ageClassification(75+..90) returns 'старческий возраст'", () => {
    expect(ageClassification(75.01)).toBe("старческий возраст");
    expect(ageClassification(90)).toBe("старческий возраст");
  });

  it("Test ageClassification(90+..122) returns 'долгожители'", () => {
    expect(ageClassification(90.01)).toBe("долгожители");
    expect(ageClassification(122)).toBe("долгожители");
  });

  it("Test ageClassification(122+) returns null", () => {
    expect(ageClassification(122.01)).toBe(null);
    expect(ageClassification(150)).toBe(null);
  });
});
