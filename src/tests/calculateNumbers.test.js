import { calculateNumbers } from "../lib/Calculate"

describe("Testing the calculate numbers function", () => {
  it("should caculate two numbers correctly", () => {
    const result = calculateNumbers(5, "+", 5)
    expect(result).toEqual(10)
  })

  it("Should subtract left from right", () => {
    const result = calculateNumbers(5, "-", 3)
    expect(result).toEqual(2)
  })

  it("should multiply left and right", () => {
    const result = calculateNumbers(2, "*", 2)
    expect(result).toEqual(4)
  })

  it("should divide left from right", () => {
    const result = calculateNumbers(2, "/", 1)
    expect(result).toEqual(2)
  })
})