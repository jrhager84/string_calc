export const calculateNumbers = (left: number, operand: string, right: number) => {
  switch (operand) {
    case "+":
      return left + right
      break

    case "-":
      return left - right
      break

    case "*":
      return left * right
      break

    case "/":
      return left / right
      break;

    default:
      return null
  }
}
