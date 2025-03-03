# Train Electrification Strategy for Village Predictor

This notebook trains machine learning models to predict the most suitable electrification strategy for a village, classifying into four categories: Grid Extension, Existing Grid, Solar Home System, or Minigrid. It uses Logistic Regression and Random Forest classifiers.

## Functionality
- **Data Loading and Preprocessing**: Loads village data, combines minigrid-related classes, handles categorical variables, and fills missing values.
- **Model Training**: Trains Logistic Regression and Random Forest models with cross-validation.
- **Evaluation**: Generates classification reports, confusion matrices, and feature importance analyses.
- **Visualization**: Plots confusion matrices and Random Forest feature importance.
- **Model Saving**: Saves trained models, scaler, and feature names to a ZIP archive (`electrification_strategy_models.zip`).

## Features
Input features include:
- `facilities`, `grid_extension`, `existing_grid`
- Environmental: `mean_ndvi`, `mean_wind_speed`, `mean_pvout_solar_radiation`
- Infrastructure: `building_count`, `permanent_building_count`, road types, etc.
- Land use: `percentage_crop_land`, `percentage_built_area`
- Categorical: `contains_protected_area`

Target: `electrification_strategy` (multiclass).

## Usage
1. Ensure `village_data.csv` is in `data/processed/` with required features.
2. Run the notebook:
   ```bash
   jupyter notebook train_electrification_strategy_for_village_predictor.ipynb
   ```
3. Models are saved in `models/` and archived as `electrification_strategy_models.zip`.

## Output
- Trained models: `log_reg_model.pkl`, `rf_model.pkl`
- Scaler: `scaler.pkl`
- Feature names: `feature_names.txt`
- Visualizations and performance metrics.

## Notes
- Requires `scikit-learn`, `pandas`, `numpy`, `matplotlib`, `seaborn`.
- Assumes preprocessed data excludes `village_id`, `candidate_minigrids`, `existing_minigrids`, `protected_area_name`.
