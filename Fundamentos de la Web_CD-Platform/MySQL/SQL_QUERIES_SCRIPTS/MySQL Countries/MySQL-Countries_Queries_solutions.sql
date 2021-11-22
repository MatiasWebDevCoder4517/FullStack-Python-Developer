/*
 Consultas
 1. ¿Qué consulta harías para obtener todos los países que hablan esloveno? Tu consulta debe devolver el nombre del país, el idioma y el porcentaje de idioma. 
 Tu consulta debe organizar el resultado por porcentaje de idioma en orden descendente. (1)
 
 2. ¿Qué consulta ejecutarías para mostrar el número total de ciudades para cada país? Su consulta debe devolver el nombre del país y el número total de ciudades. 
 Tu consulta debe organizar el resultado por el número de ciudades en orden descendente. (3)
 
 3. ¿Qué consulta harías para obtener todas las ciudades de México con una población de más de 500,000? 
 Tu consulta debe organizar el resultado por población en orden descendente. (1)
 
 4. ¿Qué consulta ejecutarías para obtener todos los idiomas en cada país con un porcentaje superior al 89%? 
 Tu consulta debe organizar el resultado por porcentaje en orden descendente. (1)
 
 5. ¿Qué consulta haría para obtener todos los países con un área de superficie inferior a 501 y una población superior a 100,000? (2)
 
 6. ¿Qué consulta harías para obtener países con solo Monarquía Constitucional con un capital superior a 200 y una esperanza de vida superior a 75 años? (1)
 
 7. ¿Qué consulta harías para obtener todas las ciudades de Argentina dentro del distrito de Buenos Aires y tener una población superior a 500,000? 
 La consulta debe devolver el nombre del país, el nombre de la ciudad, el distrito y la población. (2)
 
 8. ¿Qué consulta harías para resumir el número de países en cada región? La consulta debe mostrar el nombre de la región y el número de países. Además, 
 la consulta debe organizar el resultado por el número de países en orden descendente. (2)
 */
 
-- RESPUESTAS -- 

-- 1. -- 
/*
 SELECT c.name, l.language, l.percentage FROM countries AS c
 JOIN languages AS l ON c.code = l.country_code
 WHERE language = 'Slovene' ORDER BY l.percentage DESC;
 */
 
-- 2.  -- 
/*
SELECT co.name, COUNT(c.id) AS total_cities FROM countries AS co JOIN cities AS c ON co.code = c.country_code GROUP BY co.code ORDER BY total_cities DESC;
*/

-- 3.  -- 
/*
SELECT 
    cities.name, cities.population
FROM
    cities
        JOIN
    countries ON cities.country_id = countries.id
WHERE
    countries.name = 'Mexico'
        AND cities.population > 500000
ORDER BY cities.population DESC;
*/

-- 4.  -- 
/*
SELECT 
    l.language, co.name, l.percentage
FROM
    languages AS l
        JOIN
    countries AS co ON l.country_code = co.code
WHERE
    l.percentage > 89
ORDER BY l.percentage DESC;
*/

-- 5. -- 
/*
SELECT 
    co.name AS Nombre_Pais,
    co.surface_area AS Area,
    co.population AS Poblacion
FROM
    countries AS co
WHERE
    co.surface_area < 501
        AND co.population > 100000
ORDER BY co.surface_area DESC;
*/

-- 6. -- 
/*
SELECT 
    name AS Nombre_Pais,
    government_form AS Tipo_Gobierno,
    capital AS Capital_Pais,
    life_expectancy AS Esperanza_Vida
FROM
    countries
WHERE
    government_form = 'Constitutional Monarchy'
        AND capital > 200
        AND life_expectancy > 75
ORDER BY life_expectancy DESC;
*/

-- 7. -- 
/*
SELECT 
    countries.name AS Pais,
    ci.name AS Nombre_Ciudad,
    ci.district AS Distrito,
    ci.population AS Poblacion
FROM
    cities AS ci
        JOIN
    countries ON ci.country_id = countries.id
WHERE
    countries.name = 'Argentina'
        AND ci.population > 500000
        AND ci.district = 'Buenos Aires'
ORDER BY ci.population DESC;
*/

-- 8. -- 
/*
SELECT 
    countries.region, COUNT(countries.id)
FROM
    countries
GROUP BY countries.region
ORDER BY COUNT(countries.id) DESC;
*/



