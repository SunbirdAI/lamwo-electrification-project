# Predict Rank Minigrid Villages PUE

This notebook predicts PUE-based rankings for villages using a pre-trained model. It supports single-instance or batch predictions to prioritize minigrid deployment.

## Functionality
- **Model Loading**: Loads the trained Random Forest Regressor and scaler from `rank_minigrid_villages_PUE_models.zip`.
- **Preprocessing**: Scales input data and ensures feature consistency.
- **Prediction**: Returns a PUE score for each village, which can be sorted for ranking.
- **Output**: Provides a DataFrame with predicted PUE scores and optional rankings.

## Features
Uses the same features as the training script (see [training README](train_rank_minigrid_villages_PUE.md)).

## Usage
1. Unzip `rank_minigrid_villages_PUE_models.zip`:
   ```bash
   unzip rank_minigrid_villages_PUE_models.zip
   ```
2. Run the notebook:
   ```bash
   jupyter notebook predict_rank_minigrid_villages_PUE.ipynb
   ```
3. Modify example data (`single_village` or `batch_data`) as needed.

## Example
```python
single_village = {
    'services': 2,
    'commercial_facilities': 1,
    # ... other features
}
pred_df = predictor.get_prediction_df(single_village)
print(pred_df)
```

## Output
- DataFrame with columns: `PUE_score` (predicted value), optionally sorted for ranking.

## Notes
- Requires trained models from the training script.
- Use the predicted scores to rank villages by sorting the DataFrame.
