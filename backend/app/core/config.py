import os


class Settings:
    APP_NAME: str = os.getenv("APP_NAME", "HireLens API")
    APP_VERSION: str = os.getenv("APP_VERSION", "0.1.0")
    ENVIRONMENT: str = os.getenv("ENVIRONMENT", "development")


settings = Settings()
