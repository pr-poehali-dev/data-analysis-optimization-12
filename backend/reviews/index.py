import json
import os
import psycopg2

def handler(event: dict, context) -> dict:
    """Получение и добавление отзывов"""
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': headers, 'body': ''}

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()

    if event.get('httpMethod') == 'GET':
        cur.execute("SELECT id, name, game, text, rating, created_at FROM reviews ORDER BY created_at DESC LIMIT 50")
        rows = cur.fetchall()
        reviews = [
            {
                'id': r[0],
                'name': r[1],
                'game': r[2],
                'text': r[3],
                'rating': r[4],
                'created_at': r[5].isoformat(),
            }
            for r in rows
        ]
        cur.close()
        conn.close()
        return {'statusCode': 200, 'headers': headers, 'body': json.dumps(reviews, ensure_ascii=False)}

    if event.get('httpMethod') == 'POST':
        body = json.loads(event.get('body') or '{}')
        name = (body.get('name') or '').strip()
        game = (body.get('game') or '').strip()
        text = (body.get('text') or '').strip()
        rating = int(body.get('rating') or 5)

        if not name or not text or not game:
            cur.close()
            conn.close()
            return {'statusCode': 400, 'headers': headers, 'body': json.dumps({'error': 'Заполните все поля'})}

        if rating < 1 or rating > 5:
            rating = 5

        cur.execute(
            "INSERT INTO reviews (name, game, text, rating) VALUES (%s, %s, %s, %s) RETURNING id",
            (name, game, text, rating)
        )
        new_id = cur.fetchone()[0]
        conn.commit()
        cur.close()
        conn.close()
        return {'statusCode': 201, 'headers': headers, 'body': json.dumps({'id': new_id})}

    cur.close()
    conn.close()
    return {'statusCode': 405, 'headers': headers, 'body': json.dumps({'error': 'Method not allowed'})}
