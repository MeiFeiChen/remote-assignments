-- select all articles with their author’s email
SELECT article.title, article.content, user.email 
    FROM article 
    LEFT JOIN user 
    ON article.author_id = user.id;

-- select articles from 7th to 12th sorted by id
SELECT * FROM article WHERE id BETWEEN 7 AND 12;