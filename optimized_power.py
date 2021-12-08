"""
This is a function that counts the inserted power of inserted
number very very fastly ! (for ex. number^1.000.000).
If you enter more than 1.000.000 (for ex. 10.000.000) - it raises 'inf'...
"""

def power(a:float, n:int):
    assert n >= 0, "Please enter the 'power' as equal or more than ZERO !"
    if n == 0:
        return 1
    elif n % 2 == 1:
        return power(a, n - 1) * a
    elif n % 2 == 0:
        return power(a * a, n // 2)

print(power(2, 1000000))
