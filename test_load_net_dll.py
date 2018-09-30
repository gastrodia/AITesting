#!/usr/bin/env python
# -*- coding: utf-8 -*-
import clr
from System.Reflection import Assembly
Assembly.LoadFile("C:/Users/gastrodia/source/repos/ClassLibrary1/ClassLibrary1/bin/Debug/ClassLibrary1.dll")

from ClassLibrary1 import *   
def main():
    print(Class1.Add(1, 1))

if __name__ == '__main__':
    main()
