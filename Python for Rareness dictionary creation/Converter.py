#Converts the aspell dictionary to json file type stripping away unessential data
from pyparsing import *
import glob
import json

scowl = open("scowl-googlebooks-report original.txt", "r")
scowlString = scowl.read().lower()


period = Suppress(Literal("."))
integer = Word(nums).setParseAction(lambda t: int(t[0]))
complexNum = Combine(integer + Optional(Suppress(Literal(",")+integer)) +Optional( period + integer))
word = OneOrMore(Word(alphanums))

bar =Suppress(Literal("|"))

line = word + bar + complexNum + Suppress(restOfLine)
line2 = word + bar + complexNum+Literal("x") + Suppress(complexNum + complexNum + bar + word + period + bar + word + period)
full = OneOrMore(Group(line("Type1") | Suppress(line2("Type2"))))
list =full.parseString(scowlString)
last_Term = 0
string = ""
for term in list:
    if len(term) == 2:
        string+=('"' + term[0] + '":'+term[1]+"," + "\n")
        last_Term = term[1]
    # if len(term) == 3:
    #     string+=('"' + term[0] + '":'+str(int(term[1])*int(last_Term))+","+ "\n")
print string
file = open("dictionary.json", "w")
file.write("{"+string+"}")


