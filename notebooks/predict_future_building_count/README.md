# Predicting future building counts

This project aims to predict future building counts using satellite imagery and machine learning models. The workflow is divided into four main stages: data preprocessing, model training, model testing, and historic building count analysis.

## Notebooks

### 1. Historic Building Count Analysis

**Notebook:** `historic_building_counts_simple_regression.ipynb`

This notebook analyzes historic building counts and performs simple regression to predict future counts. It includes:
- Loading village data and initializing Google Earth Engine.
- Calculating building counts for each village from 2016 to 2023.
- Performing linear regression to predict building counts for 2024 and 2025.
- Identifying villages with the most significant increase in building counts.

### 2. Data Preprocessing

**Notebook:** `image_regression_data_preprocesser.ipynb`

This notebook handles the preprocessing of satellite imagery data. It includes:
- Downloading and processing Sentinel-2 and Open Buildings data.
- Generating composite images with multiple bands.
- Rescaling images to 8-bit format.
- Saving processed images and targets for training and testing.

### 3. Model Training

**Notebook:** `image_regression_model_trainer.ipynb`

This notebook is responsible for training the regression model. It includes:
- Loading the preprocessed data.
- Defining a custom dataset class.
- Computing mean and standard deviation for normalization.
- Defining and training a modified ResNet50 model for regression.
- Using the Hugging Face Trainer for efficient training and evaluation.

### 4. Model Testing

**Notebook:** `image_regression_tester.ipynb`

This notebook tests the trained model on new data. It includes:
- Loading the trained model from the Hugging Face Hub.
- Processing new satellite imagery data.
- Running the model on the new data and evaluating its performance.
- Visualizing the input data and model predictions.

## Usage

1. **Historic Building Count Analysis:**
   - Run the `historic_building_counts_simple_regression.ipynb` notebook to analyze historic building counts and predict future counts.

2. **Preprocessing:**
   - Run the `image_regression_data_preprocesser.ipynb` notebook to preprocess the data and save the processed images and targets.

3. **Training:**
   - Run the `image_regression_model_trainer.ipynb` notebook to train the model using the preprocessed data.

4. **Testing:**
   - Run the `image_regression_tester.ipynb` notebook to test the trained model on new data and visualize the results.

## Requirements

- Python 3.x
- Jupyter Notebook
- Required Python packages (install using `pip`):
  - `earthengine-api`
  - `geemap`
  - `numpy`
  - `requests`
  - `geopandas`
  - `shapely`
  - `Pillow`
  - `torch`
  - `torchvision`
  - `transformers`
  - `accelerate`
  - `scikit-learn`
  - `wandb`

## Acknowledgements

This project is part of the Lamwo Electrification Project and uses data from Google Earth Engine and the Hugging Face Hub.

