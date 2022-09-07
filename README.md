# CRUD-API

## Описание

Что бы запустить сервер введите команду: 
```bash
npm run dev
```

Список операций: 
- Получить всех пользователей
  ```bash
  curl http://localhost:7000/api/users -i
  ```
- Получить одного пользователя
  ```bash
  curl http://localhost:7000/api/users/1 -i
  ```
- Добавить пользователя
  ```bash
  curl -X POST -H 'Content-Type: application/json' -d '{"username": "User", "hobbies": "sport", "age": 30}' http://localhost:7000/api/users -i
  ```
  (для создания нового юзера обязательно учитывать одинарные и двойные ковычки);
  Убедиться, что вы добавили юзера выполните команду:
  ```bash
  curl http://localhost:7000/api/users/ -i
  ```
- Обновить юзера
  ```bash
  curl -X PUT -H 'Content-Type: application/json' -d '{"username": "User", "hobbies": "sport", "age": 30}' http://localhost:7000/api/users/2 -i
  ```
  Убедитесь что ваш юзер был обновлен:
  ```bash
  curl http://localhost:7000/api/users/2 -i
  ```
- Удалить юзера
  ```bash
  curl -X DELETE http://localhost:7000/api/users/2 -i
  ```
  Убедитесь что юзер был удален
  ```bash
  curl http://localhost:7000/api/users/ -i
  ```