
exports.seed = knex => {
    return knex('user').del()
        .then(() => {
            return knex('user').insert([
                { id: 1, username: 'dattn', password: '$2a$06$M3tYEt1xCkDsLnifD2G2reZ7WdOUOJBdEmq52XV5N.LjbgEp40EY2' },
                { id: 2, username: 'john',  password: '$2a$06$wtdpoJSB5ZnIwY0DbZny5.yKJMJ6ZjH6dsa7ED9OmXKxj978LRHGC' },
                { id: 3, username: 'luke',  password: '$2a$06$aAjIOB0MLfr.QfYg9i/gXOBqNmmOzSZ0yzuQdW8WFaQIyPwlJ2rMK' },
                { id: 4, username: 'erica', password: '$2a$06$zLgf4O1mUMjzDqbYD3wrlutBtgC32hZZoLEk6ZZq54dTXi5lzAeNa' }
            ]);
        });
};
