

def orden_seleccion(x):
    for i in range(len(x)):
        minimum = i
        for j in range(i+1, len(x)):
            if x[minimum] > x[j]:
                minimum = j
        x[i], x[minimum] = x[minimum], x[i]
    return x
print(orden_seleccion([0, 1, 5, 6, 3, 2, 4, 9, 8, 7, 10]))
