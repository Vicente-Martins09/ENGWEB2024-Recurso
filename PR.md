# ENGWEB2024-Recurso


# Dataset

Após uma análise do dataset final, foi possívle perceber que o dataset precisava de algumas limpezas, haviacampos que são listas e estavam como string por exemplo: id do registo, as listas de géneros e de personagens.



# Importação para a base de dados

Primeiramente, criou-se um container para a mesma:
```bash
docker run -d -p 27017:27017 --name livros mongo
```

De seguida, importou-se o dataset para a base de dados:
```bash
sudo docker cp livros.json livros:/tmp
```

e dentro da bash do container

``` 
mongoimport -d livros -c livros /tmp/
```

# Queries

As queries solicitadas podem ser encontradas no ficheiro `ex1/queries.txt`.

# Ex1

Para colocar a API do primeiro exercício a correr, basta executar os seguintes comando, tendo em conta que a base de dados já se deve encontrar a correr:
```bash
npm install
npm start
```

# Ex2

Para colocar o frontend do segundo exercício a correr, basta executar os seguintes comando:
```bash
npm install
npm start
```