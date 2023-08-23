# Python pandas Quick Reference

## DataFrame

### Initialization


```python
import pandas as pd

df = pd.DataFrame(columns=['A', 'B', 'C'])
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