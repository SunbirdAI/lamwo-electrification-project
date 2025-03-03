# Predict Electrification Strategy for Village

This notebook performs inference using pre-trained models to predict the electrification strategy for villages. It supports both single-instance and batch predictions using Logistic Regression or Random Forest.

## Functionality
- **Model Loading**: Loads pre-trained Logistic Regression, Random Forest models, and scaler from `electrification_strategy_models.zip`.
- **Preprocessing**: Scales input data and ensures feature consistency.
- **Prediction**: Returns predicted strategy and class probabilities.
- **Output**: Provides a DataFrame with predictions and probabilities for each class (Grid Extension, Existing Grid, Solar Home System, Minigrid).

## Features
Uses the same features as the training script (see [training README](train_electrification_strategy_for_village_predictor.md)).

## Usage
1. Unzip `electrification_strategy_models.zip`:
   ```bash
   unzip electrification_strategy_models.zip
   ```
2. Run the notebook:
   ```bash
   jupyter notebook predict_electrification_strategy_for_village.ipynb
   ```
3. Modify example data (`single_village` or `batch_data`) as needed.

## Example
```python
single_village = {
    'facilities': 1,
    'building_count': 200,
    # ... other features
}
rf_pred_df = predictor.get_probability_df(single_village, 'random_forest')
print(rf_pred_df)
```

## Output
- DataFrame with columns: `Grid extension`, `Existing grid`, `Solar home system`, `minigrid`, `prediction`.

## Notes
- Requires trained models from the training script.
- Default model is Random Forest; switch to Logistic Regression with `model_type='logistic_regression'`.
