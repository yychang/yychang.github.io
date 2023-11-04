# Python pandas Quick Reference

## DataFrame

### Basics

```python
import pandas as pd

# Initialization
df = pd.DataFrame(columns=['A', 'B', 'C'])

# sort by column
col_name = 'A'
df = df.sort_values(col_name)


```

### Adding new row

TL;DR: Do NOT grow your DataFrame in loops.

Grow the data in a list, then create the DataFrame with the finalized list.

ref: https://stackoverflow.com/questions/13784192/creating-an-empty-pandas-dataframe-and-then-filling-it

### Access

* Access the rows by integer position: df.iloc[r]
* Access the rows and columns by integer position: df.iloc[r, c]
* The input r and c can be:
    * scalar integer: df.iloc[0]
    * list of integer: df.iloc[ [0, 1, 2] ]
    * slice object: df.iloc[:3]
    * boolean array of the same length as the index: df.iloc[ [True, False, False] ]
    * callable that takes the DataFrame as input and returns one of the above valid input type

### Misc

Find the rows that contains a specific string pattern `pattern` in the column `MyColumnName`

```python
selected_rows = df['MyColumnName'].str.contains('pattern', na=False)

print( df.loc[selected_rows] )
```

Use multiple conditions to filter the rows

```python
selected_rows = df['MyColumnName'].str.contains('pattern1', na=False)
selected_rows &= df['MyColumnName'].str.contains('pattern2', na=False)
selected_rows &= ~df['MyColumnName'].str.contains('pattern3', na=False)

print( df.loc[selected_rows] )
```

## CSV

"Merge" two data CSV files that

* the first line is the column header
* at least 1 common column exists in both CSV files

```python
import pandas as pd

a = pd.read_csv('file1.csv')
b = pd.read_csv('file2.csv')
a = a.merge(b, on="CommonColumn", how="outer")
a.to_csv('output.csv', index=False)
```

* Notes:
    * The parameter `how` determines how the merge is performed. See https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.merge.html

"Merge" two data CSV files that

* the first line is the column header
* the column headers are the same
* the rows are from different data sets


```python
import pandas as pd

merged_data = pd.DataFrame()
a = pd.read_csv('file1.csv')
b = pd.read_csv('file2.csv')

# Introduce a new column 'DataSource', if necessary, to indicate the
# source of the entry
a['DataSource'] = 'file1'
b['DataSource'] = 'file2'

merged_data = merged_data.append(a, ignore_index=True, sort=False)
merged_data = merged_data.append(b, ignore_index=True, sort=False)
merged_data.to_csv('output.csv', index=False)
``` 