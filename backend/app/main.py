
from fastapi import FastAPI

app = FastAPI(
    title="HireLens API",
    description="Resume screening and explainable candidate matching platform",
    version="0.1.0",
)


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "hirelens-api",
    }
