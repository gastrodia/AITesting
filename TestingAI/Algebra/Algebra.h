#pragma once
// AlgebraDll.cpp : ���� DLL Ӧ�ó���ĵ���������
//

#include "stdafx.h"


#include "stdafx.h"
#include <stdexcept>
#include "export.h"
using namespace std;

namespace Algebra
{
	// This class is exported from the MathFuncsDll.dll
	class AlgebraDLL_API MyMathFuncs
	{
	public:
		// Returns a + b
		static  double Add(double a, double b) {
			return a + b + 1;
		}

		// Returns a - b
		static  double Subtract(double a, double b) {
			return a - b;
		}


		// Returns a * b
		static  double Multiply(double a, double b) {
			return a * b;
		}

		// Returns a / b
		// Throws const std::invalid_argument& if b is 0
		static  double Divide(double a, double b);
	};
}