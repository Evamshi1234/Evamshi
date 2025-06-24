# Student Performance Prediction Project

# Step 1: Import Libraries
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, confusion_matrix

# Step 2: Load Dataset
# You can download and use the UCI dataset or simulate your own data
# For now, we simulate a simple dataset
np.random.seed(0)
data = pd.DataFrame({
    'Hours_Studied': np.random.randint(1, 10, 100),
    'Attendance': np.random.randint(50, 100, 100),
    'Participation': np.random.randint(1, 10, 100),
    'Previous_Grade': np.random.choice(['A', 'B', 'C', 'D'], 100),
    'Extra_Activities': np.random.choice(['Yes', 'No'], 100),
    'Result': np.random.choice(['Pass', 'Fail'], 100)
})

# Step 3: Data Preprocessing
le = LabelEncoder()
data['Previous_Grade'] = le.fit_transform(data['Previous_Grade'])
data['Extra_Activities'] = le.fit_transform(data['Extra_Activities'])
data['Result'] = le.fit_transform(data['Result'])

# Step 4: Feature Selection
X = data.drop('Result', axis=1)
y = data['Result']

# Step 5: Train/Test Split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

# Step 6: Feature Scaling
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# Step 7: Model Training
model = RandomForestClassifier(n_estimators=100, random_state=0)
model.fit(X_train, y_train)

# Step 8: Prediction and Evaluation
y_pred = model.predict(X_test)
print("Classification Report:\n", classification_report(y_test, y_pred))
print("Confusion Matrix:\n", confusion_matrix(y_test, y_pred))

# Step 9: Feature Importance
feature_imp = pd.Series(model.feature_importances_, index=X.columns)
feature_imp.nlargest(5).plot(kind='barh')
plt.title("Feature Importance")
plt.show()
