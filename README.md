# Green electrification planning
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
    │   ├── train_electrification_strategy_for_village_predictor.ipynb        <- Train electrification strategy predictor
    │   ├── train_minigrid_village_predictor.ipynb                            <- Train minigrid predictor
    │   ├── predict_electrification_strategy_for_village.ipynb                <- Strategy predictor inference
    │   └── predict_minigrid_village.ipynb                                    <- Minigrid predictor inference
    │
    ├── rank_minigrid_villages_PUE               <- Rank villages based on Productive Use of Energy (PUE)
    │   ├── train_PUE_predictor.ipynb                                        <- Train PUE predictor
    │   ├── predict_PUE_and_rank_candidate_mg_villages.ipynb                 <- Inference for PUE and ranking
    │   └── rank_candidate_minigrids_lamwo.ipynb                             <- Rank Lamwo candidate mg villages
    │
    ├── reposition_minigrids                     <- Reposition minigrids to more densely populated areas.
    │   └── move_minigrids.ipynb                             
    │
    ├── predict_future_building_count            <- Predict future building growth in a village.
    │   ├── historic_building_counts_simple_regression.ipynb        <- Analysis of building counts in Lamwo's villages
    │   ├── image_regression_data_preprocesser.ipynb                <- Prepares data for image regression model 
    │   ├── image_regression_model_trainer.ipynb                    <- Trains image regression model
    │   └── image_regression_tester.ipynb                           <- Testing and inference of image regression model
    │
    └── village_feature_extraction.ipynb         <- Extract features from villages in Lamwo.

```

## Setup Instructions

### Install Git LFS

To handle large files, you need to install Git LFS (Large File Storage). Follow the instructions below to install and set up Git LFS:

1. **Install Git LFS**:
    ```sh
    git lfs install
    ```

2. **Track Jupyter Notebooks**:
    ```sh
    git lfs track "*.ipynb"
    ```

3. **Add the changes to Git**:
    ```sh
    git add .gitattributes
    ```

4. **Commit the changes**:
    ```sh
    git commit -m "Track Jupyter Notebooks with Git LFS"
    ```
