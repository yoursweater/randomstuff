

with open('somefile.txt', 'w') as open_file:
  open_file.write('somestring')

with open('somefile.txt', 'r') as open_file:
  all_text = open_file.read()


with open('somefile.txt', 'r') as open_file:
  line = open_file.readline()
  while line:
    print(line)
    line = open_file.readline()