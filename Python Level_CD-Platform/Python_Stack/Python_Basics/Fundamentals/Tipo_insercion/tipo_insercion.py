def tipo_insercion(x):
    for i in range(1, len(x)):
        for j in range(i-1, -1, -1):
            if x[j] > x[j+1]:
                x[j], x[j+1] = x[j+1], x[j]
    return x


print(tipo_insercion([2, 8, 5, 6, 9]))
