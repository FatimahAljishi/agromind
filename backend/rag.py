import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

df = pd.read_excel("data/product_details.xlsx")

columns_to_use = [
    "Product ID",
    "Product Name",
    "English name",
    "Product Type",
    "Chinese User Manual",
    "Instructions for use (dilute with water)",
    "Corresponding crops/plants",
    "Main ingredients",
    "Usage and dosage",
]

df["search_text"] = (
    df[columns_to_use]
    .fillna("")
    .astype(str)
    .agg(" ".join, axis=1)
)

documents = df["search_text"].tolist()

vectorizer = TfidfVectorizer()
document_vectors = vectorizer.fit_transform(documents)


def retrieve_knowledge(query, top_k=1):
    query_vector = vectorizer.transform([query])
    similarities = cosine_similarity(query_vector, document_vectors)[0]

    top_indices = similarities.argsort()[-top_k:][::-1]

    results = []

    for index in top_indices:
        row = df.iloc[index]

        results.append({
            "id": row["Product ID"],
            "name": row["Product Name"],
            "english_name": row["English name"],
            "type": row["Product Type"],
            "content": row["search_text"],
        })

    return results