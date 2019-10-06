

somestr = 'alkjsdf'

print(type(somestr))

obj = {
  'something': 'whatever'
}

print(obj['something'])

fstring = f'this is my {somestr}'

print(fstring)

anotherway = 'this is my {}'.format(somestr)
print(anotherway)