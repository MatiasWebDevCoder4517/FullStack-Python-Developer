/*

También escriba las consultas SQL necesarias para realizar las siguientes tareas:

.Devuelva a todos los usuarios que son amigos de Kermit, asegúrese de que sus nombres se muestren en los resultados.
.Devuelve el recuento de todas las amistades.
.Descubre quién tiene más amigos y devuelve el recuento de sus amigos.
.Crea un nuevo usuario y hazlos amigos de Eli Byers, Kermit The Frog y Marky Mark.
.Devuelve a los amigos de Eli en orden alfabético.
.Eliminar a Marky Mark de los amigos de Eli.
.Devuelve todas las amistades, mostrando solo el nombre y apellido de ambos amigos

*/

-- RESPUESTAS --

/*
SELECT 
    users.first_name AS FriendName, friendships.friend_id
FROM
    friendships
        JOIN
    users ON users.id = friendships.user_id
WHERE
    users.first_name = 'Kermit';
*/

-- 2 --

    
    
    