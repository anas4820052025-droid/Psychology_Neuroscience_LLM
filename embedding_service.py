from fastapi import FastAPI
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer


app = FastAPI(title="Local Embedding Service")

MODEL_NAME = "sentence-transformers/all-MiniLM-L6-v2"

model = SentenceTransformer(
    MODEL_NAME,
    device="cpu",
)


class EmbeddingRequest(BaseModel):
    texts: list[str]


@app.post("/embed")
def embed(request: EmbeddingRequest):
    embeddings = model.encode(
        request.texts,
        normalize_embeddings=True,
        show_progress_bar=False,
    )

    return {
        "embeddings": embeddings.tolist(),
        "model": MODEL_NAME,
    }