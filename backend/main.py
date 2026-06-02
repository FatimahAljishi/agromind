from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
from rag import retrieve_knowledge

app = FastAPI()

df = pd.read_excel("data/products.xlsx")

products = df.to_dict(orient="records")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "AgroMind API is running"}

@app.post("/diagnose")
async def diagnose(file: UploadFile = File(...)):
    crop = "Tomato"
    condition = "Possible fungal disease"

    retrieved_info = retrieve_knowledge(
        f"{crop} {condition} treatment fungicide"
    )

    return {
        "crop": crop,
        "condition": condition,
        "explanation": "The plant shows symptoms that may indicate a fungal infection.",
        "treatment": retrieved_info[0]["content"][:800],
        "recommended_products": retrieved_info
    }

@app.get("/products")
def get_products():
    return products

@app.get("/products/{product_id}")
def get_product(product_id: str):

    for product in products:

        if str(product["id"]) == product_id:
            return product

    return {"error": "Product not found"}