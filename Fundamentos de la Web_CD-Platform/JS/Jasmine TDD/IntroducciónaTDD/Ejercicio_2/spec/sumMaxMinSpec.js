//crea una prueba o función que devuelva la suma del número más grande y el más pequeño del array.
//Por ejemplo, sumMaxMin([1,3,10]) debería devolver 10 + 1 = 11, y sumMaxMin([-2,-5,-10])
//debería devolver -2 + -10 = -12.
function sumMaxMin(arr) {
  var max = arr[0];
  var min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return max + min;
}

describe("sumMaxMin", function () {
  it("should return 11 when we pass [1,3,10] as an argument", function () {
    expect(sumMaxMin([1, 3, 10])).toEqual(11);
  });
  it("should return -12 when we pass [-2,-5,-10] as an argument", function () {
    expect(sumMaxMin([-2, -5, -10])).toEqual(-12);
  });
});
