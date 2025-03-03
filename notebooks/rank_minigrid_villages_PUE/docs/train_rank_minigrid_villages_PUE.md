# Train Rank Minigrid Villages PUE

This notebook trains a model to rank villages for minigrid deployment based on Productive Use of Electricity (PUE) potential. It uses a regression or ranking approach (e.g., Random Forest Regressor or pairwise ranking) to prioritize villages with higher PUE viability.

## Functionality
- **Data Loading and Preprocessing**: Loads village data with PUE-related features, handles missing values, and preprocesses for ranking.
- **Model Training**: Trains a Random Forest Regressor or similar model to predict a PUE score, optimized with cross-validation.
- **Evaluation**: Assesses model performance with metrics like Mean Squared Error (MSE) or ranking accuracy (e.g., Spearman correlation).
- **Visualization**: Plots feature importance and predicted vs. actual PUE scores.
- **Model Saving**: Saves the trained model, scaler, and feature names to a ZIP archive (`rank_minigrid_villages_PUE_models.zip`).

## Features
Input features (hypothetical, adjust as needed):
- Infrastructure: `building_count`, `permanent_building_count`, `services`
- Economic: `commercial_facilities`, `market_access`
- Energy: `mean_pvout_solar_radiation`, `existing_grid`
- Land use: `percentage_crop_land`, `percentage_built_area`
- Categorical: `contains_protected_area`

Target: `PUE_score` (continuous or ordinal ranking).

## Usage
1. Place `village_pue_data.csv` in `data/processed/` with required features.
2. Run the notebook:
   ```bash
   jupyter notebook train_rank_minigrid_villages_PUE.ipynb
   ```
3. Models are saved in `models/` and archived as `rank_minigrid_villages_PUE_models.zip`.

## Output
- Trained model: `rf_regressor_model.pkl`
- Scaler: `scaler.pkl`
- Feature names: `feature_names.txt`
- Performance metrics and visualizations.

## Notes
- Requires `scikit-learn`, `pandas`, `numpy`, `matplotlib`, `seaborn`.
- Assumes data includes a PUE score or proxy metric for training.
