from fastapi import FastAPI

from app.core.config import settings

app = FastAPI(
    title=settings.APP_NAME,
    description="Resume screening and explainable candidate matching platform",
    version=settings.APP_VERSION,
)


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "hirelens-api",
    }