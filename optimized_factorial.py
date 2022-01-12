"""
This is a function for fastly counting factorial of any
number without recursion, with list - values in it
"""

def fac(n):
    f = [1] * (n + 1)
    for i in range(1, n + 1):
        f[i] = f[i - 1] * i
    return f[n]

print(fac(100000))
