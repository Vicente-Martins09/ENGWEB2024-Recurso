import json

def clean_json(input_json):
    cleaned_json = []
    for entry in input_json:
        cleaned_entry = {}

        # Limpar o campo bookId para manter apenas o número
        cleaned_entry['_id'] = entry['bookId'].split('-')[0].split('.')[0]

        # Limpar campos que são listas
        cleaned_entry['genres'] = eval(entry['genres'])
        cleaned_entry['characters'] = eval(entry['characters'])
        cleaned_entry['awards'] = eval(entry['awards'])
        cleaned_entry['ratingsByStars'] = eval(entry['ratingsByStars'])
        cleaned_entry['setting'] = eval(entry['setting'])

        # Resto dos campos permanecem inalterados
        cleaned_entry['title'] = entry['title']
        cleaned_entry['series'] = entry['series']
        cleaned_entry['author'] = entry['author']
        cleaned_entry['rating'] = entry['rating']
        cleaned_entry['description'] = entry['description']
        cleaned_entry['language'] = entry['language']
        cleaned_entry['bookFormat'] = entry['bookFormat']
        cleaned_entry['edition'] = entry['edition']
        cleaned_entry['pages'] = entry['pages']
        cleaned_entry['publisher'] = entry['publisher']
        cleaned_entry['publishDate'] = entry['publishDate']
        cleaned_entry['firstPublishDate'] = entry['firstPublishDate']
        cleaned_entry['numRatings'] = entry['numRatings']
        cleaned_entry['likedPercent'] = entry['likedPercent']
        cleaned_entry['coverImg'] = entry['coverImg']
        cleaned_entry['bbeScore'] = entry['bbeScore']
        cleaned_entry['bbeVotes'] = entry['bbeVotes']
        cleaned_entry['price'] = entry['price']

        # Adicionar entrada limpa à lista de JSON limpo
        cleaned_json.append(cleaned_entry)

    return cleaned_json

# Carregar o JSON original
with open('dataset.json', 'r') as file:
    original_json = json.load(file)

# Limpar o JSON
cleaned_json = clean_json(original_json)

# Salvar o JSON limpo em um novo arquivo
with open('cleaned_dataset.json', 'w') as file:
    json.dump(cleaned_json, file, indent=4)

print("JSON limpo salvo como 'cleaned_dataset.json'.")
