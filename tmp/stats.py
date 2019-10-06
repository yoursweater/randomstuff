import math

players = ['sudeep',  'vik', 'matt', 'henry', 'ankit', 'dan b', 'dan e', 'marissa', 'mounika', 'joe' ]
pointsfor = [1847, 1731, 1600, 1534, 1600, 1590, 1547, 1499, 1528, 1561]
pointsagainst = [1545, 1503, 1514, 1596, 1662, 1568, 1726, 1499, 1528, 1561]

def calcMean(points):
    total = 0
    length = len(points)
    for num in points:
        total = total + num
    return total / length

meanScored = calcMean(pointsfor)
meanAgainst = calcMean(pointsagainst)

print('Mean points scored: {}'.format(meanScored))
print('Mean points scored against: {}'.format(meanAgainst))

def calcDeviation(points, meanValue):
    squared = []
    for num in points:
        square = (num - meanValue) ** 2
        squared.append(square)
    squaredTotal = 0
    for num in squared:
        squaredTotal = squaredTotal + num
    variance = squaredTotal / len(squared)
    print(variance)
    deviation = math.sqrt(variance)
    print(deviation)
    return deviation

pointsforDev = calcDeviation(pointsfor, meanScored)
pointagainstDev = calcDeviation(pointsagainst, meanAgainst)

def devFromMean(points, devMean, dev):
    meanDeviation = []
    for num in points:
        temp = (num - devMean) / dev)
        temp = (round(temp, 2)
        meanDeviation.append(temp)
    return meanDeviation

howscrewedFor = devFromMean(pointsfor, meanScored, pointsforDev)
print(howscrewedFor)
howscrewedAgainst = devFromMean(pointsagainst, meanAgainst, pointagainstDev)
print(howscrewedAgainst)

def giveName(names, arr):
    result = []
    for i in range(len(names)):
        temp = []
        temp.append(names[i])
        temp.append(arr[i])
        result.append(temp)
    print(result)
    return result

pointsfor1 = giveName(players, howscrewedFor)
pointsagainst1 = giveName(players, howscrewedAgainst)

def printVals(arr):

    arr.sort(key=lambda x: x[1])
    arr.reverse()
    for name, val in arr:
        val = -(val)
        mystring = "{} : {}".format(name, val)
        print(mystring)

# printVals(pointsfor1)
printVals(pointsagainst1)