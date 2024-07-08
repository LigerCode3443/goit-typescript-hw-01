function showMessage(message: string): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): void {
  throw new Error("Error");
}
customError();
calc(2, 4);
showMessage("hello");
