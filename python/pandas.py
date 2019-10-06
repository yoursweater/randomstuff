import pandas as pd
from pandas import ExcelWriter
from pandas import ExcelFile

# 
# TO READ FROM PANDAS
# 

df = pd.read_excel('File.xlsx', sheetname='Sheet1')

# column headings
print("Column headings:")
print(df.columns)

# print all items from column
print(df['Sepal width'])

# to iterate
for i in df.index:
    print(df['Sepal width'][i])

# save column as list
listSepalWidth = df['Sepal width']

# 
# TO WRITE IN PANDAS
# 

df = pd.DataFrame({'a':[1,3,5,7,4,5,6,4,7,8,9],
                   'b':[3,5,6,2,4,6,7,8,7,8,9]})

# this will write our df to excel
writer = ExcelWriter('Pandas-Example2.xlsx')
df.to_excel(writer,'Sheet1',index=False)
writer.save()
