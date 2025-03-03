# Predicting Minigrid Villages

This repository contains machine learning models and scripts developed as part of the Lamwo Electrification Project by [Sunbird AI](https://github.com/SunbirdAI). The goal is to predict suitable electrification strategies for villages, with a particular focus on identifying viable locations for minigrid deployments. The project leverages Logistic Regression and Random Forest algorithms trained on village-level data to classify electrification strategies and assess minigrid suitability.

The repository includes four main Jupyter notebooks, each serving a distinct purpose in the workflow: training models, performing inference, and predicting minigrid viability. These scripts were originally developed in Google Colab and have been adapted for general use.

## Repository Structure

1. **[`train_electrification_strategy_for_village_predictor.ipynb`](#train-electrification-strategy-for-village-predictor)**  
   Trains models to predict the best electrification strategy (Grid Extension, Existing Grid, Solar Home System, or Minigrid) for a village.  
   [README](docs/train_electrification_strategy_for_village_predictor.md)

2. **[`predict_electrification_strategy_for_village.ipynb`](#predict-electrification-strategy-for-village)**  
   Performs inference using trained models to predict electrification strategies for single or batch village data.  
   [README](docs/predict_electrification_strategy_for_village.md)

3. **[`train_minigrid_village_predictor.ipynb`](#train-minigrid-village-predictor)**  
   Trains binary classifiers to determine whether a village is suitable for a minigrid, optimizing with grid search and threshold evaluation.  
   [README](docs/train_minigrid_village_predictor.md)

4. **[`predict_minigrid_village.ipynb`](#predict-minigrid-village)**  
   Predicts minigrid suitability for villages using trained binary classifiers with adjustable probability thresholds.  
   [README](docs/predict_minigrid_village.md)

## Getting Started

### Prerequisites
- Python 3.8+
- Required libraries: `pandas`, `numpy`, `scikit-learn`, `matplotlib`, `seaborn`, `pickle`
- Install dependencies via:  
  ```bash
  pip install -r requirements.txt
  ```

### Data
The models expect preprocessed village data in CSV format (e.g., `village_data.csv`). Features include infrastructure metrics (e.g., building count, road types), environmental data (e.g., NDVI, solar radiation), and more. See individual READMEs for feature details.

### Usage
Clone the repository and navigate to the desired notebook. Each script includes example data and instructions for execution. Trained models and scalers are saved in ZIP archives (`electrification_strategy_models.zip` and `minigrid_village_predictor_models.zip`).

```bash
git clone https://github.com/SunbirdAI/lamwo-electrification-project.git
cd lamwo-electrification-project/notebooks/predicting_minigrid_villages
```

## Contributing
Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request. Ensure code follows PEP 8 standards and includes appropriate tests.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For questions, contact the Sunbird AI team via GitHub issues or email.
