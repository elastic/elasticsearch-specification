#!/usr/bin/env python

import os
from constants import (
    DEFAULT_OUTPUT_PATH, 
    DEFAULT_OPENAPI_FOLDER, 
    DEFAULT_OPENAPI_FILE
)
from OpenapiAnalyzer import OpenapiAnalyzer

def main():
    openpi_filepath = os.path.join(DEFAULT_OUTPUT_PATH, 
                                   DEFAULT_OPENAPI_FOLDER,
                                   DEFAULT_OPENAPI_FILE)
    if not os.path.exists(openpi_filepath):
        print(f"OpenAPI file not found: {openpi_filepath}")
        return
    openapi_analyzer = OpenapiAnalyzer(openpi_filepath)
    openapi_analyzer.run()

if __name__ == "__main__":
    main()