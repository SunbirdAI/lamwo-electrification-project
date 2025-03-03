# Train Minigrid Village Predictor

This notebook trains binary classifiers to determine whether a village is suitable for a minigrid. It uses Logistic Regression and Random Forest with grid search for hyperparameter tuning and evaluates multiple probability thresholds.

## Functionality
- **Data Loading and Preprocessing**: Converts electrification strategies to binary (Minigrid vs. Not Minigrid), handles missing values and categorical features.
- **Model Training**: Uses GridSearchCV to optimize Logistic Regression and Random Forest models with F1 scoring.
- **Threshold Evaluation**: Assesses performance at thresholds [0.3, 0.4, 0.5, 0.6, 0.7].
- **Visualization**: Plots confusion matrices, precision-recall curves, and Random Forest feature importance.
- **Model Saving**: Saves models and scaler to `minigrid_village_predictor_models.zip`.

## Features
Same as the electrification strategy predictor, with a binary target (`electrification_strategy`: 1 for Minigrid, 0 otherwise).

## Usage
1. Place `village_data.csv` in the working directory.
2. Run the notebook:
   ```bash
   jupyter notebook train_minigrid_village_predictor.ipynb
   ```
3. Models are saved in `models/` and archived.

## Output
- Trained models: `log_reg_model.pkl`, `rf_model.pkl`
- Scaler: `scaler.pkl`
- Feature names: `feature_names.txt`
- Performance metrics and visualizations.

## Notes
- Optimizes for F1 score due to potential class imbalance.
- Grid search parameters are customizable in `log_reg_param_grid` and `rf_param_grid`.
