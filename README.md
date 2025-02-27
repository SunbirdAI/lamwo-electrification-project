# Lamwo electrification project
This is a project in partnership with GIZ FairForward, Sunbird AI and the Ministry of Energy and Mineral Development in Uganda.

The goal is to use machine learning to identify the best electrification strategy for a rural village in Uganda. For this prototype we focus on Lamwo district in the North of Uganda.

## Project Organization

```

├── LICENSE            <- Open-source license 
├── README.md          <- The top-level README for developers using this project.
├── data
│   ├── processed      <- The final, canonical data sets for modeling.
│   └── raw            <- The original, immutable data dump.
│
├── outputs            <- Sample outputs from models
│
├── models             <- Trained and serialized models, model predictions, or model summaries
│
├── notebooks          <- Jupyter notebooks for the machine learning components.
│
├── assets             <- Images and tables used in the documentation READMEs 
│                         
│
└── notebooks          <- Jupyter notebooks for the machine learning components.
    │
    ├── predicting_minigrid_villages             <- Prediction of minigrid villages
    │   ├── train_electrification_strategy_for_village_predictor.ipynb        <- Train strategy predictor
    │   ├── train_minigrid_village_predictor.ipynb                            <- Train strategy predictor
    │   ├── predict_electrification_strategy_for_village_predictor.ipynb      <- Strategy predictor inference
    │   └── predict_minigrid_village_predictor.ipynb                          <- Minigrid predictor inference
    │
    ├── rank_minigrid_villages_PUE               <- Rank villages based on Productive Use of Energy (PUE)
    │
    ├── reposition_minigrids                     <- Reposition minigrids to areas of population.
    │
    └──  predict_future_building_count           <- Predict future building growth in a village.

```