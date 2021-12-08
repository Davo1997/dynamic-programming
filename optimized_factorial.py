"""
This is a function for fastly counting factorial of any
number (up to 100.000 and more (works in 5-10 seconds)) without
recursion, with list - values in it
"""

def fac(n):
    f = [1] * (n + 1)
    for i in range(1, n + 1):
        f[i] = f[i - 1] * i
    return f[n]

print(fac(100000))
