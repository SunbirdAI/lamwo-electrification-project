# Lamwo Electrification Project - Reposition Minigrids

This notebook is designed to optimize the placement of candidate minigrids in the Lamwo district by clustering buildings and repositioning minigrids to the center of the largest clusters.

## Main Steps

1. **Import Libraries**: Import necessary libraries such as `geopandas`, `shapely`, `matplotlib`, `numpy`, `sklearn`, and `folium`.
2. **Mount Google Drive**: Mount Google Drive to access the data files.
3. **Load Data**: Load the village boundaries, buildings, candidate minigrids, and existing minigrids into GeoDataFrames.
4. **Reproject Data**: Reproject data to a metric CRS if needed.
5. **Group Buildings by Village**: Group buildings by their respective villages.
6. **Cluster Buildings**: Use DBSCAN to cluster buildings within each village.
7. **Reposition Minigrids**: Reposition candidate minigrids to the center of the largest building clusters, ensuring they are at least 1 km away from existing minigrids.
8. **Visualize Results**: Visualize the original and updated candidate minigrid placements using `folium` and `matplotlib`.
9. **Save Results**: Save the updated candidate minigrids to a new GeoJSON file.

## Instructions to Run the Notebook

1. **Setup Environment**: Ensure you have the necessary libraries installed. You can install them using pip:
    ```bash
    pip install geopandas shapely matplotlib numpy scikit-learn folium
    ```

2. **Run the Notebook**: Open the notebook in Jupyter or Google Colab and run each cell sequentially.

3. **Update File Paths**: Update the file paths in the notebook to point to your local files or cloud storage locations.

4. **Save Results**: The updated candidate minigrids will be saved to a new GeoJSON file in your Google Drive.

## Notes

- Adjust the DBSCAN parameters (`eps` and `min_samples`) as needed based on the density and distribution of buildings.
- Ensure that the CRS (Coordinate Reference System) is consistent across all GeoDataFrames for accurate spatial operations.

