landmap = [["森" for i in range(20)] for j in range(10)]
landmap[0][0] = "城"
landmap[0][19] = "町"
landmap[9][19] = "町"
for i,line in enumerate(landmap):
    print(str(i) + ":", end="")
    for j ,area in enumerate(line):
        if (i % 2 == 0 or j % 3 == 0) and area == "森":
            print("+", end="")
        else:
            print(area, end="")
    print()