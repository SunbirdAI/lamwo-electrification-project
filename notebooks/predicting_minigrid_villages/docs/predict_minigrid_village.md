# Predict Minigrid Village

This notebook predicts whether a village is suitable for a minigrid using pre-trained binary classifiers. It supports adjustable probability thresholds for decision-making.

## Functionality
- **Model Loading**: Loads Logistic Regression, Random Forest, and scaler from `minigrid_village_predictor_models.zip`.
- **Preprocessing**: Ensures input data matches training features and scales it.
- **Prediction**: Returns binary predictions (Minigrid or Not Minigrid) and probabilities.
- **Thresholding**: Allows custom thresholds (default: 0.5).

## Features
Matches the training script features (see [training README](train_minigrid_village_predictor.md)).

## Usage
1. Unzip `minigrid_village_predictor_models.zip`:
   ```bash
   unzip minigrid_village_predictor_models.zip
   ```
2. Run the notebook:
   ```bash
   jupyter notebook predict_minigrid_village.ipynb
   ```
3. Adjust example data and threshold as needed.

## Example
```python
single_village = {
    'facilities': 1,
    'building_count': 200,
    # ... other features
}
rf_pred_df = predictor.get_prediction_df(single_village, 'random_forest', threshold=0.3)
print(rf_pred_df)
```

## Output
- DataFrame with `Minigrid_Probability` and `Prediction` (Minigrid/Not Minigrid).

## Notes
- Default model is Random Forest; use `model_type='logistic_regression'` for Logistic Regression.
- Threshold tuning can balance precision and recall based on deployment needs.
